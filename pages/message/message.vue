<template>
	<view class="uni-column">
		<view @click="hidebq" class="content" id="content" :style="{ height: style.contentViewHeight + 'px' }">
			<scroll-view id="scrollview" scroll-y="true" :scroll-with-animation="true" :scroll-top="scrollTop">
				<block v-for="msg in msgs" :key="msg._id">
					<view :id="'message' + msg._id" class="m-item m_list_item1 m_list_item" v-if="targetId === msg.from">
						<image v-if="users[targetId]" class="m_cls" :src="'../../static/images/' + users[targetId].header + '.png'" mode=""></image>
						<image v-else class="m_cls" src="../../static/images/header1.png" mode=""></image>
						<view class="m-content-head m_content">
							<view class="m-content-head-home">{{ msg.content }}</view>
						</view>
					</view>
					<view class="m-item m_list_item2 m_list_item" v-else>
						<view class="m-content-head m_content m-content-head-right">
							<view class="m-content-head-customer">{{ msg.content }}</view>
						</view>
						<view class="m_content2">我</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="message_foot">
			<form @submit="sendChat" @reset="formReset" class="message_foot_form">
				<view class="foot-operate">
					<input class="m_input" v-model="msgcontent" value="" name="content" @focus="textChange" type="text" placeholder="请输入发送消息" />
					<view class="m_icons" @click="showGrid">{{ emojis[1].text }}</view>
					<button type="primary" class="m_button" form-type="submit">发送</button>
					<button form-type="reset" ref="resrtBtn" style="display:none;">Reset</button>
				</view>
			</form>
			<view class="v_uni_grid" v-if="isshowgrid">
				<uni-grid :show-border="false" :square="false" :column="8" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in emojis" :key="index">
						<view class="">{{ item.text }}</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
import uniIcons from '../../components/uni-icons/uni-icons.vue';
import uniGrid from '../../components/uni-grid/uni-grid.vue';
import uniGridItem from '../../components/uni-grid-item/uni-grid-item.vue';
import { CACH_USER, CACH_LASTMSG, CACH_MESSAGE, EMOTIONS } from '../../utils/index.js';
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			emojis: [],
			isshowgrid: false,
			targetId: '',
			emoji: {
				text: ''
			},
			msgcontent: '',
			msgs: [],
			users: {},
			option: {},
			scrollTop: 0,
			style: {
				pageHeight: 0,
				contentViewHeight: 0,
				footViewHeight: 90,
				mitemHeight: 0
			}
		};
	},
	watch: {
		messages: {
			handler(newValue, oldValue) {
				this.loadMsg(newValue);
				this.$nextTick(() => {
					this.scrollToBottom();
				});
			},
			deep: true
		}
	},
	onLoad(option) {
		const res = uni.getSystemInfoSync();
		this.style.pageHeight = res.windowHeight;
		this.style.contentViewHeight = res.windowHeight - (uni.getSystemInfoSync().screenWidth / 750) * 100; //像素

		this.targetId = option.targetUserId;
		this.loadMsg(this.messages);
		this.emojis = ['😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁', '😁'];
		this.emojis = this.emojis.map(emoji => ({ text: emoji }));
	},
	mounted() {
		this.scrollToBottom();
	},
	computed: {
		...mapGetters(['messages', 'user']),
		scrollH: function() {
			let sys = uni.getSystemInfoSync();
			let winWidth = sys.windowWidth;
			let winrate = 750 / winWidth;
			let winHeight = parseInt(sys.windowHeight * winrate);
			return winHeight;
		}
	},
	components: {
		uniIcons,
		uniGrid,
		uniGridItem
	},
	methods: {
		...mapActions(['sendMsg']),
		loadMsg(messages) {
			// debugger;
			if (!uni.getStorageSync(CACH_MESSAGE) && messages.chatMsgs.length == 0) return;
			let { users, chatMsgs, unReadCount } = messages.chatMsgs.length > 0 ? messages : JSON.parse(uni.getStorageSync(CACH_MESSAGE));

			let user = this.user.username ? this.user : JSON.parse(uni.getStorageSync(CACH_USER));
			this.users = users;

			if (this.users[this.targetId]) {
				uni.setNavigationBarTitle({
					title: this.users[this.targetId].username
				});
			}
			// debugger
			const meId = user._id;

			if (!users[meId]) {
				return null;
			}
			const chatId = [meId, this.targetId].sort().join('_');
			this.msgs = chatMsgs.filter(msg => msg.chat_id === chatId);
			// console.log('this.msgs',this.msgs)
		},
		sendChat(event) {
			const user = JSON.parse(uni.getStorageSync(CACH_USER));
			const from = this.user._id || user._id;
			const to = this.targetId;
			const { content } = event.detail.value;
			this.content = content;
			if (content) {
				this.sendMsg({ from, to, content: content + this.emoji.text });
				this.$refs.resrtBtn.$dispatch('Form', 'uni-form-reset', {
					type: 'reset'
				});
				this.isshowgrid = false;
				this.emoji = { text: '' };
			} else {
				uni.showToast({
					title: '内容不能为空'
				});
			}
		},
		hidebq(e){
			this.isshowgrid=false;
		},
		showGrid() {
			this.isshowgrid = !this.isshowgrid;
		},
		textChange() {
			this.isshowgrid = false;
		},
		change(e) {
			let _index = e.detail.index;
			this.emoji = this.emojis[_index];
			this.msgcontent = this.msgcontent + this.emoji.text;
		},
		formReset() {},
		scrollToBottom: function() {
			// debugger;
			var that = this;
			var query = uni.createSelectorQuery();
			query.selectAll('.m-item').boundingClientRect();
			query.select('#scrollview').boundingClientRect();

			query.exec(function(res) {
				// debugger;
				that.style.mitemHeight = 0;
				res[0].forEach(function(rect) {
					that.style.mitemHeight = that.style.mitemHeight + rect.height + 20;
				});

				if (that.style.mitemHeight > that.style.contentViewHeight) {
					that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight;
				}
			});
		}
	}
};
</script>

<style scoped>
page{
	background-color: #f8f8f8;
}
.m_cls {
	width: 44upx;
	height: 44upx;
	vertical-align: middle;
}
.m_list_item {
	position: relative;
	display: flex;
	padding-left: 30upx;
	min-height: 88upx;
	background-color: #fff;
	vertical-align: middle;
	overflow: hidden;
	transition: background-color 200ms;
	align-items: center;
	box-sizing: box-border;
}
.m_list_item1 {
	justify-content: flex-start;
	/* border-bottom: 1px solid #ddd; */
}
.m_list_item2 {
	justify-content: flex-end;
	padding-left: 0px;
	padding-right: 30upx;
	/* border-bottom: 1px solid #ddd; */
}
.m_content {
	margin-left: 30upx;
}
.message_foot {
	bottom: 0;
	position: fixed;
	min-height: 88upx;
	width: 100%;
	background-color: #f8f8f8;
}
.message_foot_form {
	width: 100%;
	padding: 0 0 0 0upx;
	box-sizing: border-box;
	flex: display;
}
.m_input {
	flex: 1;
}
.m_button {
	font-size: 15px;
	background-color: #f8f8f8;
	color: #888888;
	padding-left: 20upx;
	padding-right: 20upx;
}
.m_button:after {
	border: 1px solid #fff;
}
.foot-operate {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 88upx;
	padding: 0 20upx;
	box-sizing: border-box;
}
.m_icons {
	padding-left: 10upx;
}
.m_content2 {
	margin-left: 30upx;
}
.uni-column {
	display: flex;
	flex-direction: column;
}

.content {
	display: flex;
	flex: 1;
	margin-bottom: 100upx;
}
.m-item {
	display: flex;
	flex-direction: row;
	padding-top: 40upx;
}

.m-left {
	display: flex;
	width: 120upx;
	justify-content: center;
	align-items: flex-start;
}

.m-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	word-break: break-all;
}

.m-right {
	display: flex;
	width: 120upx;
	justify-content: center;
	align-items: flex-start;
}

.head_icon {
	width: 80upx;
	height: 80upx;
}

.m-content-head {
	position: relative;
}

.m-content-head-right {
	display: flex;
	justify-content: flex-end;
}

.m-content-head-home {
	text-align: left;
	background: #1482d1;
	border: 1px #1482d1 solid;
	border-radius: 20upx;
	padding: 20upx;
	color: white;
}

.m-content-head-home:before {
	border: 15upx solid transparent;
	border-right: 15upx solid #1482d1;
	left: -26upx;
	width: 0;
	height: 0;
	position: absolute;
	content: ' ';
}

.m-content-head-customer {
	border: 1upx #efc487 solid;
	background: #efc487;
	border-radius: 20upx;
	padding: 20upx;
}

.m-content-head-customer:after {
	border: 15upx solid transparent;
	border-left: 15upx solid #efc487;
	top: 20upx;
	right: -26upx;
	width: 0;
	height: 0;
	position: absolute;
	content: ' ';
}
</style>
