<template>
	<scroll-view scroll-y="true" :style="{ height: scrollH + 'upx' }">
		<view class="am-list-header">
			<label>{{ user.header ? '已选择头像' : '请选择头像' }}</label>
			<image :src="'../../static/images/' + user.header + '.png'" mode="" style="width:96upx;height: 96upx;"></image>
		</view>
		<view class="v_uni_grid">
			<uni-grid :show-border="false" :square="false" :column="5" :highlight="true" @change="change">
				<uni-grid-item :class="item.text==selectedIcon?'selectedColor':''" v-for="(item, index) in headerList" :key="index">
					<image :src="item.icon" class="v_image" mode="aspectFill" />
					<text class="grid_text">{{ item.textzw }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<form @submit="formSubmit" class="v_form">
			<view class="v_line v_line_entity">
				<label>招聘职位：</label>
				<input class="v_input " name="post" type="text" :value="user.post" placeholder="请输入招聘职位" />
			</view>
			<view class="v_line v_line_entity">
				<label>公司名称：</label>
				<input class="v_input" name="company" :value="user.company" placeholder="请输入公司名称" />
			</view>
			<view class="v_line v_line_entity">
				<label>职位薪资：</label>
				<input class="v_input" name="salary" :value="user.salary" placeholder="请输入职位薪资" />
			</view>
			<view class="v_line v_line_entity" style="border: none;">
				<label>职位要求：</label>
				<textarea class="v_input" style="height: 150upx;" name="info" :value="user.info" placeholder="请输入职位要求"></textarea>
			</view>
			<button class="v_line v_button" type="primary" form-type="submit">保存</button>
		</form>
	</scroll-view>
</template>

<script>
import uniGrid from '../../components/uni-grid/uni-grid.vue';
import uniGridItem from '../../components/uni-grid-item/uni-grid-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			selectedIcon:"",
			headerList: []
		};
	},
	components: {
		uniGrid,
		uniGridItem
	},
	computed: {
		...mapGetters(['user']),
		scrollH: function() {
			let sys = uni.getSystemInfoSync();
			let winWidth = sys.windowWidth;
			let winrate = 750 / winWidth;
			let winHeight = parseInt(sys.windowHeight * winrate);
			console.log(winHeight);
			return winHeight;
		}
	},
	watch:{
		user(newvauel,oldvalue){
			this.selectedIcon=newvauel.header;
		}
	},
	onLoad(option) {
		for (let i = 0; i < 20; i++) {
			this.headerList.push({
				textzw: '头像' + (i + 1),
				text: 'header' + (i + 1),
				icon: `../../static/images/header${i + 1}.png` // 不能使用import
			});
		}
		this.getUser();
	},
	methods: {
		...mapActions(['updateUser', 'getUser', 'getHeader']),
		change(e) {
			let _index = e.detail.index;
			this.selectedIcon=this.headerList[_index].text;
			this.getHeader(this.headerList[_index].text);
		},
		formSubmit(e) {
			let newUser = { ...this.user, ...e.detail.value };
			this.updateUser(newUser);
		}
	}
};
</script>

<style scoped>
.selectedColor {
	background-color: rgb(0, 122, 255, 0.2);
}
.v_image {
	width: 40upx;
	height: 40upx;
}
.grid_text {
	margin-top: 9px;
	font-size: 12px;
	color: #000;
	text-align: center;
}
.v_uni_grid {
	width: 100%;
	text-align: center;
}
.am-list-header {
	padding: 30upx 30upx 18upx 30upx;
	font-size: 14px;
	color: #888;
	width: 100%;
	box-sizing: border-box;
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
	/* margin-top: 20upx; */
	margin:0 30upx 30upx 30upx;
	box-sizing: border-box;
}
</style>
