import io from 'socket.io-client'
import {
	AUTH_SUCCESS,
	ERROR_MSG,
	RECEIVE_USER,
	RESET_USER,
	RESET_USER_LIST,
	RECEIVE_USER_LIST,
	RECEIVE_HEADER,
	RECEIVE_MSG_LIST,
	RECEIVE_MSG,
	MSG_READ,
	MSG_SEND,
	SOCKET_OPEN,
	INIT_SCOKET
} from '../common/mutation-type.js'
import {
	getRedirectTo,
	URL_BASE,
	CACH_USER,
	CACH_MESSAGE,
	CACH_SOCKET,
	URL_BASE_SERVER
} from '../utils/index.js'
import fetchApi from '../api/index.js'

function initIO(userid, commit) {
	// console.log('userid', userid);
	// 1. 创建对象之前: 判断对象是否已经存在, 只有不存在才去创建
	if (!io.socket) {
		// 连接服务器, 得到与服务器的连接对象
		io.socket = io(`ws://${URL_BASE_SERVER}`) // 2. 创建对象之后: 保存对象
		// 绑定监听, 接收服务器发送的消息
		io.socket.on('receiveMsg', function(chatMsg) {
			console.log('客户端接收服务器发送的消息', chatMsg)
			// debugger;
			userid=userid||JSON.parse(uni.getStorageSync(CACH_USER))._id;
			// console.log("userid",userid);
			if (userid === chatMsg.from || userid === chatMsg.to) {
				commit(RECEIVE_MSG, {
					chatMsg,
					userid
				});
			}
		})
		io.socket.on('disconnect', function() {
			console.log('失去连接');
			initIO(userid, commit);
		});
	}
}

export default {
	state: {
		user: {
			header: '',
			username: '', // 用户名
			type: '', // 用户类型 dashen/laoban
			msg: '', // 错误提示信息
			redirectTo: '' // 需要自动重定向的路由路径
		},
		userlist: [],
		messages: {
			users: {}, // 所有用户信息的对象  属性名: userid, 属性值是: {username, header}
			chatMsgs: [], // 当前用户所有相关msg的数组
			unReadCount: 0 // 总的未读数量
		},
		message: {
			from: "",
			to: "",
			cotent: ""
		}
	},
	getters: { //（可以认为是 store 的计算属性）
		user: state => state.user,
		userlist: state => state.userlist,
		messages: state => state.messages,
		message: state => state.message
	},
	mutations: {
		[INIT_SCOKET](state,user){
			state.user={...state.user,...user}
		},
		[AUTH_SUCCESS](state, playload) {
			const {
				type,
				header
			} = state.user
			state.user = { ...state.user,
				...playload,
				redirectTo: getRedirectTo(type, header)
			}

			uni.setStorageSync(CACH_USER, JSON.stringify(state.user))
		},
		[ERROR_MSG](state, playload) {
			state.user = { ...state.user,
				msg: playload
			}
		},
		[RESET_USER](state, user) {
			state.user = user;
		},
		[RESET_USER_LIST](state, userlist) {
			state.userlist = userlist;
		},
		[RECEIVE_USER_LIST](state, userlist) {
			state.userlist = [...state.userlist, ...userlist]
		},
		[RECEIVE_USER](state, user) {
			state.user = { ...state.user,
				...user
			}
			uni.setStorageSync(CACH_USER, JSON.stringify(state.user))
		},
		[RECEIVE_HEADER](state, header) {
			state.user = { ...state.user,
				header
			}
		},
		[RECEIVE_MSG_LIST](state, messages) {
			const {
				chatMsgs,
				userid
			} = messages;

			let unReadCount = chatMsgs.reduce((preTotal, msg) => preTotal + (!msg.read && msg.to === userid ? 1 : 0), 0)

			state.messages = { ...state.messages,
				...messages,
				unReadCount
			}

			uni.setStorageSync(CACH_MESSAGE, JSON.stringify(state.messages))
		},
		[RECEIVE_MSG](state, {
			chatMsg,
			userid
		}) {
			// debugger;
			let chatMsgs = [...state.messages.chatMsgs, chatMsg];
			let unReadCount = state.messages.unReadCount + (!chatMsg.read && chatMsg.to === userid ? 1 : 0)

			state.messages = {
				...state.messages,
				chatMsgs,
				unReadCount
			}

			uni.setStorageSync(CACH_MESSAGE, JSON.stringify(state.messages))
		},
		[MSG_READ](state, {
			from,
			to,
			count
		}) {
			// debugger;
			state.messages.chatMsgs.forEach(msg => {
				if (msg.from === from && msg.to === to && !msg.read) {
					msg.read = true
				}
			})
			let chatMsgs = state.messages.chatMsgs.map(msg => {
				if (msg.from === from && msg.to === to && !msg.read) { // 需要更新
					return { ...msg,
						read: true
					}
				} else { // 不需要
					return msg
				}
			})
			let unReadCount = state.messages.unReadCount - count
			state.messages = {
				...state.messages,
				chatMsgs,
				unReadCount
			}

			uni.setStorageSync(CACH_MESSAGE, JSON.stringify(state.messages))
		},
		[MSG_SEND](state, {
			from,
			to,
			content
		}) {
			state.message = { ...state.message,
				from,
				to,
				content
			}

		}
	},
	actions: {
		/**
		 *用户登录
		 */
		login({
			commit,
			state
		}, user) {
			return new Promise((resolve, reject) => {
				fetchApi({
					url: "/login",
					params: user,
					method: 'POST'
				}).then((res) => {
					let {
						data
					} = res;
					if (data.code) {
						commit(ERROR_MSG, data.msg)
					} else {
						// debugger;
						try {
							uni.setStorageSync(CACH_USER, JSON.stringify(data.data));
							commit(AUTH_SUCCESS, data.data)
							resolve(data.data._id)
							uni.switchTab({
								url: '../main/main'
							});

						} catch (e) {
							// error
							console.log(e);
						}
					}
				})
			})
		},
		errorMsg({
			commit,
			state
		}, msg) {
			commit(ERROR_MSG, msg)
		},
		/**
		 *注册用户
		 */
		register({
			state,
			commit
		}, user) {
			return new Promise((resolve, reject) => {
				fetchApi({
					url: "/register",
					params: user,
					method: 'POST'
				}).then((res) => {
					let {
						data
					} = res;
					if (data.code) {
						commit(ERROR_MSG, data.msg)
					} else {
						try {
							// debugger;
							uni.setStorageSync(CACH_USER, JSON.stringify(data.data));
							commit(AUTH_SUCCESS, data.data)
							resolve(data.data._id)

							if (data.data.type == "laoban") {
								uni.reLaunch({
									url: '../laoban/laoban?path=reg'
								})
							} else if (data.data.type == 'dashen') {
								uni.reLaunch({
									url: '../dashen/dashen?path=reg'
								})
							}

						} catch (e) {
							console.log(e);
						}
					}

				})
			});
		},
		/**
		 *更新用户 
		 */
		updateUser({
			state,
			commit
		}, user) {
			fetchApi({
				url: "/update",
				params: user,
				method: 'POST'
			}).then((res) => {
				let {
					data
				} = res;
				// console.log("res",res)
				if (data.code) {
					commit(ERROR_MSG, data.msg)
					uni.showToast({
						title:data.msg
					})
					uni.reLaunch({
						url:'../login/login'
					})
				} else {
					try {
						commit(AUTH_SUCCESS, data.data)
						// console.log('更新用户', data);
						uni.setStorageSync(CACH_USER, JSON.stringify(data.data));
						if (user.path == 'reg') {
							uni.switchTab({
								url: '../main/main'
							});
						} else {
							uni.reLaunch({
								url: '../person/person'
							})
						}

					} catch (e) {
						// error
					}
				}
			})
		},
		/**
		 * 用户信息列表
		 */
		getUserList({
			state,
			commit
		}, type) {
			commit(RESET_USER_LIST, [])
			fetchApi({
				url: "/userlist",
				params: {
					type
				},
				method: 'GET'
			}).then((res) => {
				let {
					data
				} = res;
				if (data.code) {
					commit(ERROR_MSG, data.msg)
				} else {
					try {
						commit(RECEIVE_USER_LIST, data.data)
					} catch (e) {
						// error
					}
				}
			})
		},
		/**
		 *清空用户信息 
		 */
		resetUser({
			state,
			commit
		}, user) {
			commit(RESET_USER, user)
		},
		/**
		 * 获取用户信息列表
		 */
		resetUserList({
			state,
			commit
		}, userlist) {
			commit(RESET_USER_LIST, userlist)
		},
		/**
		 * 获取用户信息
		 */
		getUser({
			state,
			commit
		}) {
			fetchApi({
				url: "/user",
				method: 'GET'
			}).then((res) => {
				let {
					data
				} = res;
				if (data.code) {
					commit(ERROR_MSG, data.msg)
					uni.showToast({
						title:data.msg
					})
					uni.reLaunch({
						url:'../login/login'
					})
				} else {
					try {
						// console.log("user:", data.data);
						commit(RECEIVE_USER, data.data)
					} catch (e) {
						// error
					}
				}
			})
		},
		/**
		 * 更新头像
		 */
		getHeader({
			state,
			commit
		}, header) {
			commit(RECEIVE_HEADER, header);
		},
		/**
		 * 消息列表
		 */
		getMsgList({
			state,
			commit
		}, userid) {
			initIO(userid, commit)
			fetchApi({
				url: "/msglist",
				method: 'GET'
			}).then((res) => {
				let {
					data
				} = res;
				if (data.code) {
					commit(ERROR_MSG, data.msg)
				} else {
					try {
						// debugger;
						commit(RECEIVE_MSG_LIST, { ...data.data,
							userid
						})
					} catch (e) {
						// error
					}
				}
			})
		},

		receiveMsg({
			state,
			commit
		}, {
			chatMsg,
			userid
		}) {
			commit(RECEIVE_MSG, {
				chatMsg,
				userid
			})
		},
		/**
		 * 发送信息
		 */
		sendMsg({
			state,
			commit
		}, {
			from,
			to,
			content
		}) {
			// console.log('from,to,',{from,to});
			if (from != to) {
				// console.log('客户端发消息给服务端', chatMsg)
				io.socket.emit('sendMsg', {
					from,
					to,
					content
				})

				commit(MSG_SEND, {
					from,
					to,
					content
				})
			}

		},
		msgRead({
			state,
			commit
		}, {
			from,
			to
		}) {
			fetchApi({
				url: "/readmsg",
				method: 'POST',
				params: {
					from
				}
			}).then((res) => {
				try {
					// debugger;
					const result = res.data
					if (result.code === 0) {
						const count = result.data
						commit(MSG_READ, {
							count,
							from,
							to
						})
					}
				} catch (e) {
					// error
					console.log("e", e);
				}
			})
		}
		,
		initScoket({state,commit},data){
			initIO(data._id,commit)
			// commit(INIT_SCOKET,data)
		}
	}
}
