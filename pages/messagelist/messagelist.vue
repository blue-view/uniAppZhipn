<template>
	<!-- :thumb="'../../static/images/' + msg.targetUser.header + '.png'" -->
	<!-- :title="msg.targetUser.username" -->
	<!-- :badgeText="msg.unReadCount" -->
	<view>
		<uni-list>
			<block :key="index" v-for="(msg, index) in lastMsgs">
				<uni-list-item
					:thumb="'../../static/images/' + msg.targetUser.header + '.png'"
					show-badge="true"
					:title="msg.targetUser.username"
					:note="msg.content"
					:badgeText="msg.unReadCount + ''"
					@click="showMsg(msg.from,msg.to)"
				></uni-list-item>
			</block>
		</uni-list>
	</view>
</template>

<script>
import uniList from '../../components/uni-list/uni-list.vue';
import uniListItem from '../../components/uni-list-item/uni-list-item.vue';
import { mapActions, mapGetters } from 'vuex';
import { CACH_USER, CACH_LASTMSG } from '../../utils/index.js';
export default {
	data() {
		return {
			lastMsgs: []
		};
	},
	components: {
		uniList,
		uniListItem
	},
	onShow(){
		if(parseInt(this.messages.unReadCount)>0){
			uni.setTabBarBadge({
				index: 1,
				text: this.messages.unReadCount + ''
			});
		}
		else{
			uni.removeTabBarBadge({
				index:1
			})
		}
	},
	watch: {
		messages: {
			handler(newValue, oldValue) {
				console.log('newValue', newValue);
				let user = JSON.parse(uni.getStorageSync('UNIUSER'));
				let userid = user._id;
				let { chatMsgs, users, unReadCount } = newValue;
				this.getLastMsgs(chatMsgs, users, userid);
				if(parseInt(newValue.unReadCount)>0){
					uni.setTabBarBadge({
						index: 1,
						text: newValue.unReadCount + ''
					});
				}
				else{
					uni.removeTabBarBadge({
						index:1
					})
				}
			},
			deep: true
		}
	},
	computed: {
		...mapGetters(['messages', 'user'])
	},
	methods: {
		...mapActions(['getMsgList','msgRead']),
		
		showMsg(from,to) {
			// debugger;
			// console.log("from,to",{from,to});
			this.msgRead({from,to});
			uni.navigateTo({
				url: '../message/message?targetUserId=' + from
			});
		},
		/*
		对chatMsgs按chat_id进行分组, 并得到每个组的lastMsg组成的数组
		1. 找出每个聊天的lastMsg, 并用一个对象容器来保存 {chat_id, lastMsg}
		2. 得到所有lastMsg的数组
		3. 对数组进行排序(按create_time降序)
		 */
		getLastMsgs(chatMsgs, users, userid) {
			// 1. 找出每个聊天的lastMsg, 并用一个对象容器来保存 {chat_id:lastMsg}
			// debugger;
			// console.log(chatMsgs);
			// console.log('userid',userid);
			const lastMsgObjs = {};
			chatMsgs.forEach(msg => {
				// 对msg进行个体的统计
				if (msg.to === userid && !msg.read) {
					msg.unReadCount = 1;
				} else {
					msg.unReadCount = 0;
				}

				// 得到msg的聊天标识id
				const chatId = msg.chat_id;
				// 获取已保存的当前组件的lastMsg
				let lastMsg = lastMsgObjs[chatId];
				// 没有
				if (!lastMsg) {
					// 当前msg就是所在组的lastMsg
					lastMsgObjs[chatId] = msg;
				} else {
					// 有
					// 累加unReadCount=已经统计的 + 当前msg的
					const unReadCount = lastMsg.unReadCount + msg.unReadCount;
					// 如果msg比lastMsg晚, 就将msg保存为lastMsg
					if (msg.create_time > lastMsg.create_time) {
						lastMsgObjs[chatId] = msg;
					}
					//将unReadCount保存在最新的lastMsg上
					lastMsgObjs[chatId].unReadCount = unReadCount;
				}
			});

			// 2. 得到所有lastMsg的数组
			const lastMsgs = Object.values(lastMsgObjs);

			// 3. 对数组进行排序(按create_time降序)
			lastMsgs.sort(function(m1, m2) {
				// 如果结果<0, 将m1放在前面, 如果结果为0, 不变, 如果结果>0, m2前面
				return m2.create_time - m1.create_time;
			});

			// console.log('chatMsgs',chatMsgs);
			// return lastMsgs;
			lastMsgs.map(msg => {
				// 得到目标用户的id
				const targetUserId = msg.to === userid ? msg.from : msg.to;
				// 得到目标用户的信息
				const targetUser = users[targetUserId];
				msg.targetUserId = targetUserId;
				msg.targetUser = targetUser;
				// console.log('msg',msg);
				msg.unReadCount = msg.unReadCount ? msg.unReadCount : '';
				return msg;
			});
			// console.log('lastMsgs',lastMsgs);
			// uni.setStorageSync(CACH_LASTMSG, JSON.stringify(lastMsgs));
			this.lastMsgs = lastMsgs;
		}
	},
	onLoad() {
		// console.log(this.user)
		let user = JSON.parse(uni.getStorageSync('UNIUSER'));
		console.log(user);
		this.getMsgList(user._id);
	}
};
</script>

<style scoped></style>
