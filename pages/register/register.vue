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
			<view class="v_line v_line_entity">
				<label>确认密码：</label>
				<input class="v_input" name="password2" value="" password="true" placeholder="请再次输入密码" />
			</view>
			<view class="v_line v_line_entity">
				<label>用户类型：</label>
				<view>
					<radio-group @change="radioChange" name="type">
						<label class="radio">
							<radio value="dashen"  />
							大神
						</label>
						<label class="radio v_radio">
							<radio value="laoban" checked="true"/>
							老板
						</label>
					</radio-group>
				</view>
			</view>
			<button class="v_line v_button" type="primary" form-type="submit">注册</button>
			<view class=" v_text"><navigator open-type="reLaunch" url="../login/login">已有账户</navigator></view>
		</form>
	</view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'register',
	data() {
		return {};
	},
	onLoad(){
		this.errorMsg('')
	},
	computed: {
		...mapGetters(['user'])
	},
	methods: {
		...mapActions(['register', 'errorMsg']),
		formSubmit(e) {
			console.log(e);
			const { username, password, password2, type } = e.detail.value;
			if (!username) {
				this.errorMsg('用户名不能为空');
			} else if (!password) {
				this.errorMsg('密码不能为空');
			} else if (password !== password2) {
				this.errorMsg('两次密码不一致');
			} else {
				this.register(e.detail.value);
			}
		},
		radioChange() {}
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
.v_line {
	margin-bottom: 30upx;
}
.logo-img {
	width: 480upx;
	height: 480upx;
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
.v_radio {
	margin-left: 40upx;
}
</style>
