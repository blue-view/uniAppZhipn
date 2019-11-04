<template>
	<scroll-view scroll-y="true" :style="{ height: scrollH + 'upx' }">
		<view style="padding-bottom:88upx;">
			<view class="message_head">
				<block v-for="msg in msgs" :key="msg._id">
					<view class="m_list_item1 m_list_item" v-if="targetId === msg.from">
						<image v-if="users[targetId]" class="m_cls" :src="'../../static/images/' + users[targetId].header + '.png'" mode=""></image>
						<image v-else class="m_cls" src="../../static/images/header1.png" mode=""></image>
						<view class="m_content">{{ msg.content }}</view>
					</view>
					<view class="m_list_item2 m_list_item" v-else>
						<view class="m_content">{{ msg.content }}</view>
						<view class="m_content2">我</view>
					</view>
				</block>
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
	</scroll-view>
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
			option: {}
		};
	},
	watch: {
		messages: {
			handler(newValue, oldValue) {
				this.loadMsg(newValue);
			},
			deep: true
		}
	},
	onLoad(option) {
		this.targetId = option.targetUserId;
		this.loadMsg(this.messages);
		this.emojis = [
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣',
			'😀',
			'😁',
			'🤣'
		];
		this.emojis = this.emojis.map(emoji => ({ text: emoji }));
	},
	computed: {
		...mapGetters(['messages', 'user']),
		scrollH: function() {
			let sys = uni.getSystemInfoSync();
			let winWidth = sys.windowWidth;
			let winrate = 750 / winWidth;
			let winHeight = parseInt(sys.windowHeight * winrate);
			// console.log(winHeight);
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
			// let lastMsg = JSON.parse(uni.getStorageSync(CACH_LASTMSG));
			// debugger;
			if (!uni.getStorageSync(CACH_MESSAGE) && messages.chatMsgs.length == 0) return;
			let { users, chatMsgs, unReadCount } = messages.chatMsgs.length > 0 ? messages : JSON.parse(uni.getStorageSync(CACH_MESSAGE));
			
			let user = this.user.username ? this.user : JSON.parse(uni.getStorageSync(CACH_USER));
			this.users = users;

			// console.log('targetUserId',this.targetId);
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
			// console.log('to=',to);
			const { content } = event.detail.value;
			this.content = content;
			if (content) {
				// console.log(this.emoji.text );
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
			// console.log(this.msgcontent);
		},
		formReset() {}
	}
};
</script>

<style scoped>
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
	border-bottom: 1px solid #ddd;
}
.m_list_item2 {
	justify-content: flex-end;
	padding-left: 0px;
	padding-right: 30upx;
	border-bottom: 1px solid #ddd;
}
.m_content {
	margin-left: 30upx;
}
.message_foot {
	bottom: 0;
	position: fixed;
	min-height: 88upx;
	width: 100%;
	background-color: #fff;
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
	background-color: #ffffff;
	color: #888888;
	padding-left: 20upx;
	padding-right: 0upx;
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
</style>
