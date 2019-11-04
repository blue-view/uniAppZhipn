<template>
	<scroll-view scroll-y="true" :style="{ height: scrollH + 'upx' }">
		<view class="am-list-header">
			<label>{{ user.header ? '已选择头像' : '请选择头像' }}</label>
			<image :src="'../../static/images/' + user.header + '.png'" mode="" style="width:96upx;height: 96upx;"></image>
		</view>
		<view class="v_uni_grid">
			<uni-grid :hor="35" :ver="-45" :show-border="false" :square="false" :column="5" :highlight="true" @change="change">
				<uni-grid-item :class="item.text == selectedIcon ? 'selectedColor' : ''" v-for="(item, index) in headerList" :key="index">
					<image :src="item.icon" class="v_image" mode="aspectFill" />
					<text class="grid_text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<form @submit="formSubmit" class="v_form">
			<view class="v_line v_line_entity">
				<label>求职岗位：</label>
				<input class="v_input " name="post" type="text" :value="user.post" placeholder="请输入求职岗位" />
			</view>
			<view class="v_line v_line_entity" style="border: none;">
				<label>个人介绍：</label>
				<textarea class="v_input" style="height: 150upx;" name="info" :value="user.info" placeholder="请输入个人介绍"></textarea>
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
			selectedIcon: '',
			headerList: [],
			path: ''
		};
	},
	components: {
		uniGrid,
		uniGridItem
	},
	onLoad(option) {
		this.path = option.path;
		for (let i = 0; i < 20; i++) {
			this.headerList.push({
				text: '头像' + (i + 1),
				icon: `../../static/images/头像${i + 1}.png` // 不能使用import
			});
		}
		this.getUser();
	},
	computed: {
		...mapGetters(['user']),
		scrollH: function() {
			let sys = uni.getSystemInfoSync();
			let winWidth = sys.windowWidth;
			let winrate = 750 / winWidth;
			let winHeight = parseInt(sys.windowHeight * winrate);
			console.log('winHeight:'+winHeight);
			return winHeight;
		}
	},
	watch: {
		user(newvauel, oldvalue) {
			this.selectedIcon = newvauel.header;
		}
	},
	methods: {
		...mapActions(['updateUser', 'getUser', 'getHeader']),
		change(e) {
			let _index = e.detail.index;
			this.selectedIcon = this.headerList[_index].text;
			this.getHeader(this.headerList[_index].text);
		},
		formSubmit(e) {
			let newUser = { ...this.user, ...e.detail.value, path: this.path };
			console.log(newUser);
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
}
</style>
