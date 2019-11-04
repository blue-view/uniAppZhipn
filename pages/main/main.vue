<template>
	<view>
		<PersonList></PersonList>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { CACH_USER } from '../../utils/index.js';
import PersonList from '../personList/personList.vue';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {};
	},
	components: {
		PersonList
	},
	computed:{
		...mapGetters(['userlist','messages']),
	},
	onLoad() {
		// let pages = getCurrentPages();
		let userString = uni.getStorageSync(CACH_USER);
		if (userString) {
			let user = JSON.parse(userString);
			if (!user) {
				uni.reLaunch({
					url: '../login/login'
				});
			} else {
			}
		} else {
			uni.reLaunch({
				url: '../login/login'
			});
		}
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
	}
};
</script>

<style scoped></style>
