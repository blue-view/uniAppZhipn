/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */
// const baseUrl = ''
// const baseUrl = 'http://localhost:4000'
import {URL_BASE} from '../utils/index.js'

export default function fetchApi({
	url,
	type,
	params,
	method,
	complete
}) {
	url = URL_BASE + url
	type = type || ''
	method = method || 'GET'
	
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${url}/${type}`,
			data: params || {},
			method: method,
			success: resolve,
			fail: (e)=>{
				console.log('e:'+e);
				reject(e)
			},
			complete: () => {
				complete && complete();
			}
		})
	})
}
