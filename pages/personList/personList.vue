<template>
	<scroll-view scroll-y="true" :style="{ height: scrollH + 'upx' }">
		<block v-for="(item, index) in userlist" :key="index">
			<uni-card @click="sendChat(item._id)" class="p_card" v-if="item.type == 'laoban'">
				<view class="img_container">
					<image class="p_imgcls" :src="'../../static/images/' + item.header + '.png'" mode=""></image>
					<text>{{ item.username }}</text>
				</view>
				<view class="img_container2">
					<view class="v_personinfo">
						<label>职位：</label>
						<text>{{ item.post }}</text>
					</view>
					<view class="v_personinfo">
						<label>公司：</label>
						<text>{{ item.company }}</text>
					</view>
					<view class="v_personinfo">
						<label>月薪：</label>
						<text>{{ item.salary }}</text>
					</view>
					<view class="v_personinfo">
						<label>描述：</label>
						<text>{{ item.info }}</text>
					</view>
				</view>
			</uni-card>
			<uni-card @click="sendChat(item._id)" class="p_card" v-else>
				<view class="img_container">
					<image class="p_imgcls" :src="'../../static/images/' + item.header + '.png'" mode=""></image>
					<text>{{ item.username }}</text>
				</view>
				<view class="img_container2">
					<view class="v_personinfo">
						<label>职位：</label>
						<text>{{ item.post }}</text>
					</view>
					<view class="v_personinfo">
						<label>描述：</label>
						<text>{{ item.info }}</text>
					</view>
				</view>
			</uni-card>
		</block>
	</scroll-view>
</template>

<script>
import uniCard from '../../components/uni-card/uni-card.vue';
import { mapActions, mapGetters } from 'vuex';
import { CACH_USER } from '../../utils/index.js';
export default {
	data() {
		return {
			usertype: ''
		};
	},
	components: { uniCard },
	computed: {
		...mapGetters(['userlist','messages']),
		scrollH: function() {
			let sys = uni.getSystemInfoSync();
			let winWidth = sys.windowWidth;
			let winrate = 750 / winWidth;
			let winHeight = parseInt(sys.windowHeight * winrate);
			console.log(winHeight);
			return winHeight;
		}
	},
	created() {
		let userStr = uni.getStorageSync(CACH_USER);
		if (userStr) {
			let user = JSON.parse(userStr);
			if (user.type == 'laoban') {
				uni.setTabBarItem({
					index: 0,
					text: '老板',
					iconPath: 'static/images/foot/laoban.png',
					selectedIconPath: 'static/images/foot/laoban-selected.png'
				});
				uni.setNavigationBarTitle({
				    title: '大神列表'
				});
			} else {
				uni.setTabBarItem({
					index: 0,
					text: '大神',
					iconPath: 'static/images/foot/dashen.png',
					selectedIconPath: 'static/images/foot/dashen-selected.png'
				});
				uni.setNavigationBarTitle({
				    title: '老板列表'
				});
			}
			this.usertype = user.type == 'dashen' ? 'laoban' : 'dashen';
			this.getUserList(this.usertype);
		}
	},
	methods: {
		...mapActions(['getUserList',"msgRead"]),
		sendChat(targetUserId){
			console.log('targetUserId=',targetUserId);
			let userStr=uni.getStorageSync(CACH_USER)
			
			if(userStr){
				this.msgRead({from:targetUserId,to:JSON.parse(userStr)._id})
				uni.navigateTo({
					url: '../message/message?targetUserId=' + targetUserId
				});
			}
		
		}
	}
};
</script>

<style scoped>
.p_card {
	margin-top: 18upx;
}
.img_container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 18upx 30upx;
}
.p_imgcls {
	width: 96upx;
	height: 96upx;
}
.v_personinfo {
	color: #888;
	font-size: 15px;
	line-height: 44upx;
	width: auto;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.img_container2 {
	border-top: 4upx solid #f9f9f5;
	padding: 30upx 30upx 12upx;
}
</style>
