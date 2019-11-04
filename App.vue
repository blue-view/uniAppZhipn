<script>
import { mapActions } from 'vuex';
import { CACH_USER,CACH_MESSAGE } from './utils/index.js';

export default {
	methods: {
		...mapActions(['initScoket',"getMsgList"])
	},
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
		let userStr = uni.getStorageSync(CACH_USER);
		let messageStr = uni.getStorageSync(CACH_MESSAGE);
		
		if(userStr){
			let user=JSON.parse(userStr);
			this.initScoket(user._id)
			// if(messageStr){
			// 	let message=JSON.parse(messageStr);
			// 	if(message.users.length==0){
			// 		this.getMsgList(user._id)
			// 	}
			// }
		}
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
page {
	position: fixed;
	height: 100%;
	width: 100%;
	background: #f5f5f9;
	
}
</style>
