<template>
	<view class="container">
		<view class="v_imagecls"><image class="logo-img " src="../../static/logo.png" mode=""></image></view>
		<form @submit="formSubmit" class="v_form">
			<view class="error-msg" v-if="user.msg">{{ user.msg }}</view>
			<view class="v_line v_line_entity">
				<label>用户名：</label>
				<input class="v_input " name="username" type="text" value="" placeholder="请输入用户名" />
			</view>
			<view class="v_line v_line_entity">
				<label>密 码：</label>
				<input class="v_input" name="password" value="" password="true" placeholder="请输入密码" />
			</view>
			<button class="v_line v_button" type="primary" form-type="submit">登录</button>
			<view class=" v_text"><navigator open-type="reLaunch" url="../register/register">还没有账户</navigator></view>
		</form>
	</view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'login',
	computed: {
		...mapGetters(['user'])
	},
	data() {
		return {};
	},
	onLoad() {
		this.errorMsg('');
	},
	onHide() {
		this.user.msg = '';
	},
	methods: {
		...mapActions(['login', 'errorMsg', 'getMsgList']),
		formSubmit(e) {
			const { username, password } = e.detail.value;
			if (!username) {
				this.errorMsg('用户名不能为空');
			} else if (!password) {
				this.errorMsg('密码不能为空');
			} else {
				this.login({ username, password }).then((res)=>{
					console.log('res',res);
					this.getMsgList(res)
				});
			}
		}
	}
};
</script>

<style scoped>
.error-msg {
	color: red;
	text-align: center;
	font-size: 18px;
	padding-top: 20upx;
}
.container {
	padding: 0 40upx;
	box-sizing: border-box;
}
.v_imagecls {
	width: 100%;
	height: 480upx;
	display: flex;
	justify-content: center;
	margin: 30upx 0;
}
.logo-img {
	width: 480upx;
	height: 480upx;
}
.v_line {
	margin-bottom: 30upx;
}

.v_text {
	text-align: center;
	padding-bottom: 30upx;
}
.v_input {
	height: 60upx;
	line-height: 60upx;
	flex: 1;
}
.v_form {
	background: #fff;
	width: 100%;
	display: block;
}
.v_line_entity {
	display: flex;
	padding: 16upx;
	margin: 16upx;
	box-sizing: border-box;
	border-bottom: 1px solid #dddddd;
}
.v_button {
	margin-top: 30upx;
}
</style>
