<template>
	<scroll-view scroll-y="true" :style="{ height: scrollH + 'upx' }">
		<uni-card mode="basic">
			<view class="p_container_user">
				<image class="p_user" :src="'../../static/images/' + user.header + '.png'" mode=""></image>
				<label class="p_text">{{ user.username }}</label>
			</view>
		</uni-card>
		<view class="uni-card__header2">相关信息</view>
		<uni-card mode="basic">
			<view class="v_pos_tainer">
				<view class="v_personinfo">
					<label>职位：</label>
					<text>{{ user.post }}</text>
				</view>
				<view class="v_personinfo">
					<label>简介：</label>
					<text>{{ user.info }}</text>
				</view>
				<view class="v_personinfo" v-if="user.type == 'laoban'">
					<label>薪酬：</label>
					<text>{{ user.salary }}</text>
				</view>
			</view>
		</uni-card>
		<view class="v_button"><button type="primary" @click="updateInfo">更新信息</button></view>
		<view class="v_button"><button type="warn" @click="louginOut">退出登录</button></view>
	</scroll-view>
</template>

<script>
import uniCard from '../../components/uni-card/uni-card.vue';
import { CACH_USER } from '../../utils/index.js';
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(['user', 'messages']),
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
		uniCard
	},
	methods: {
		...mapActions(['resetUser', 'getUser', 'resetUserList']),
		updateInfo() {
			if (this.user.type == 'laoban') {
				uni.navigateTo({
					url: '../laoban/laoban?path=update'
				});
			} else {
				uni.navigateTo({
					url: '../dashen/dashen?path=update'
				});
			}
		},
		louginOut() {
			var self = this;
			uni.showModal({
				title: '退出',
				content: '确定退出登录吗',
				success: function(res) {
					if (res.confirm) {
						// console.log('用户点击确定');
						uni.clearStorage();
						let user = {};
						let userlist = [];
						self.resetUser(user);
						self.resetUserList(user);
						uni.reLaunch({
							url: '../login/login'
						});
					} else if (res.cancel) {
						// console.log('用户点击取消');
					}
				}
			});
		}
	},
	onLoad() {
		this.getUser();
	},
	watch: {
		messages: {
			handler(newValue, oldValue) {
				// console.log('newValue', newValue);
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
	onShow() {
		if (parseInt(this.messages.unReadCount) > 0) {
			uni.setTabBarBadge({
				index: 1,
				text: this.messages.unReadCount + ''
			});
		} else {
			uni.removeTabBarBadge({
				index:1
			})
		}
	}
};
</script>

<style scoped>
.p_container_user {
	margin-top: 100upx;
	margin-bottom: 100upx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.p_user {
	width: 100upx;
	height: 100upx;
}
.p_text {
	margin-top: 40upx;
}
.uni-card {
	margin-left: 0upx;
	margin-right: 0upx;
}
.uni-card__header2 {
	padding: 30upx 30upx 18upx 30upx;
	font-size: 14px;
	color: #888;
	width: 100%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	background: #f5f5f9;
}
.v_personinfo {
	color: #888;
	font-size: 15px;
	line-height: 44upx;
	margin-top: 12upx;
	width: auto;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.v_pos_tainer {
	padding: 25upx 30upx 25upx 0;
}
.v_button {
	margin-top: 18upx;
	padding:0 30upx;
	box-sizing: border-box;
}
</style>
