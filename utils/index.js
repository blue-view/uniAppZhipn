/*
包含n个工具函数的模块
 */
/*
用户主界面路由
  dashen: /dashen
  laoban: /laoban
用户信息完善界面路由
  dashen: /dasheninfo
  laoban: /laobaninfo
判断是否已经完善信息? user.header是否有值
判断用户类型: user.type
 */
/*
返回对应的路由路径
 */
export function getRedirectTo(type, header) {
	let path
	// type
	if (type === 'laoban') {
		path = '/laoban'
	} else {
		path = '/dashen'
	}
	// header
	if (!header) { // 没有值, 返回信息完善界面的path
		path += 'info'
	}

	return path
}

export const URL_BASE = '/uniAppZhipinApi';
export const URL_BASE_SERVER = '49.233.86.85:4000';
export const CACH_USER = 'UNIUSER';
export const CACH_LASTMSG = 'CACH_LASTMSG';
export const CACH_MESSAGE = "CACH_MESSAGE"
export const CACH_SOCKET = "CACH_SOCKET"
export const EMOTIONS = [{
	code: '/::)',
	text: '[微笑]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif'
}, {
	code: '/::~',
	text: '[伤心]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/1.gif'
}, {
	code: '/::B',
	text: '[美女]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/2.gif'
}, {
	code: '/::|',
	text: '[发呆]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/3.gif'
}, {
	code: '/:8-)',
	text: '[墨镜]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/4.gif'
}, {
	code: '/::<',
	text: '[哭]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif'
}, {
	code: '/::$',
	text: '[羞]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/6.gif'
}, {
	code: '/::X',
	text: '[哑]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/7.gif'
}, {
	code: '/::Z',
	text: '[睡]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/8.gif'
}, {
	code: '/::\'(',
	text: '[哭]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/9.gif'
}, {
	code: '/::-|',
	text: '[囧]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/10.gif'
}, {
	code: '/::@',
	text: '[怒]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/11.gif'
}, {
	code: '/::P',
	text: '[调皮]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/12.gif'
}, {
	code: '/::D',
	text: '[笑]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/13.gif'
}, {
	code: '/::O',
	text: '[惊讶]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/14.gif'
}, {
	code: '/::(',
	text: '[难过]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/15.gif'
}, {
	code: '/::+',
	text: '[酷]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/16.gif'
}, {
	code: '/:--b',
	text: '[汗]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/17.gif'
}, {
	code: '/::Q',
	text: '[抓狂]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/18.gif'
}, {
	code: '/::T',
	text: '[吐]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/19.gif'
}, {
	code: '/:,@P',
	text: '[笑]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/20.gif'
}, {
	code: '/:,@-D',
	text: '[快乐]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/21.gif'
}, {
	code: '/::d',
	text: '[奇]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/22.gif'
}, {
	code: '/:,@o',
	text: '[傲]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/23.gif'
}, {
	code: '/::g',
	text: '[饿]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/24.gif'
}, {
	code: '/:|-)',
	text: '[累]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/25.gif'
}, {
	code: '/::!',
	text: '[吓]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/26.gif'
}, {
	code: '/::L',
	text: '[汗]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/27.gif'
}, {
	code: '/::>',
	text: '[高兴]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/28.gif'
}, {
	code: '/::,@',
	text: '[闲]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/29.gif'
}, {
	code: '/:,@f',
	text: '[努力]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/30.gif'
}, {
	code: '/::-S',
	text: '[骂]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/31.gif'
}, {
	code: '/:?',
	text: '[疑问]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/32.gif'
}, {
	code: '/:,@x',
	text: '[秘密]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/33.gif'
}, {
	code: '/:,@@',
	text: '[乱]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/34.gif'
}, {
	code: '/::8',
	text: '[疯]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/35.gif'
}, {
	code: '/:,@!',
	text: '[哀]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/36.gif'
}, {
	code: '/:!!!',
	text: '[鬼]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/37.gif'
}, {
	code: '/:xx',
	text: '[打击]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/38.gif'
}, {
	code: '/:bye',
	text: '[bye]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/39.gif'
}, {
	code: '/:wipe',
	text: '[汗]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/40.gif'
}, {
	code: '/:dig',
	text: '[抠]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/41.gif'
}, {
	code: '/:handclap',
	text: '[鼓掌]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/42.gif'
}, {
	code: '/:&-(',
	text: '[糟糕]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/43.gif'
}, {
	code: '/:B-)',
	text: '[坏笑]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/44.gif'
}, {
	code: '/:<@',
	text: '[左哼哼]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/45.gif'
}, {
	code: '/:@>',
	text: '[右哼哼]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/46.gif'
}, {
	code: '/::-O',
	text: '[委屈]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/47.gif'
}, {
	code: '/:>-|',
	text: '[鄙视]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/48.gif'
}, {
	code: '/:P-(',
	text: '[委屈]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/49.gif'
}, {
	code: '/::\'|',
	text: '[快哭了]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/50.gif'
}, {
	code: '/:X-)',
	text: '[阴险]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/51.gif'
}, {
	code: '/::*',
	text: '[亲亲]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/52.gif'
}, {
	code: '/:@x',
	text: '[吓]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/53.gif'
}, {
	code: '/:8*',
	text: '[可怜]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/54.gif'
}, {
	code: '/:pd',
	text: '[菜刀]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/55.gif'
}, {
	code: '/:<W>',
	text: '[西瓜]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/56.gif'
}, {
	code: '/:beer',
	text: '[啤酒]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/57.gif'
}, {
	code: '/:basketb',
	text: '[篮球]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/58.gif'
}, {
	code: '/:oo',
	text: '[乒乓]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/59.gif'
}, {
	code: '/:coffee',
	text: '[咖啡]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/60.gif'
}, {
	code: '/:eat',
	text: '[饭]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/61.gif'
}, {
	code: '/:pig',
	text: '[猪头]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/62.gif'
}, {
	code: '/:rose',
	text: '[玫瑰]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/63.gif'
}, {
	code: '/:fade',
	text: '[凋谢]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/64.gif'
}, {
	code: '/:showlove',
	text: '[献吻]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/65.gif'
}, {
	code: '/:heart',
	text: '[爱心]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif'
}, {
	code: '/:break',
	text: '[心碎]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/67.gif'
}, {
	code: '/:cake',
	text: '[蛋糕]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/68.gif'
}, {
	code: '/:li',
	text: '[闪电]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/69.gif'
}, {
	code: '/:bome',
	text: '[炸弹]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/70.gif'
}, {
	code: '/:kn',
	text: '[刀]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/71.gif'
}, {
	code: '/:footb',
	text: '[足球]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/72.gif'
}, {
	code: '/:ladybug',
	text: '[瓢虫]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/73.gif'
}, {
	code: '/:shit',
	text: '[便便]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/74.gif'
}, {
	code: '/:moon',
	text: '[月亮]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/75.gif'
}, {
	code: '/:sun',
	text: '[太阳]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/76.gif'
}, {
	code: '/:gift',
	text: '[礼物]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/77.gif'
}, {
	code: '/:hug',
	text: '[拥抱]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/78.gif'
}, {
	code: '/:strong',
	text: '[强]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/79.gif'
}, {
	code: '/:weak',
	text: '[弱]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/80.gif'
}, {
	code: '/:share',
	text: '[握手]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/81.gif'
}, {
	code: '/:v',
	text: '[胜利]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/82.gif'
}, {
	code: '/:@)',
	text: '[抱拳]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/83.gif'
}, {
	code: '/:jj',
	text: '[勾引]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/84.gif'
}, {
	code: '/:@@',
	text: '[拳头]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/85.gif'
}, {
	code: '/:bad',
	text: '[差劲]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/86.gif'
}, {
	code: '/:lvu',
	text: '[爱你]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/87.gif'
}, {
	code: '/:no',
	text: '[NO]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/88.gif'
}, {
	code: '/:ok',
	text: '[OK]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/89.gif'
}, {
	code: '/:love',
	text: '[爱情]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/90.gif'
}, {
	code: '/:<L>',
	text: '[飞吻]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/91.gif'
}, {
	code: '/:jump',
	text: '[跳跳]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/92.gif'
}, {
	code: '/:shake',
	text: '[发抖]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/93.gif'
}, {
	code: '/:<O>',
	text: '[怄火]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/94.gif'
}, {
	code: '/:circle',
	text: '[转圈]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/95.gif'
}, {
	code: '/:kotow',
	text: '[磕头]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/96.gif'
}, {
	code: '/:turn',
	text: '[回头]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif'
}, {
	code: '/:skip',
	text: '[跳绳]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/98.gif'
}, {
	code: '/:oY',
	text: '[投降]',
	img: 'https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif'
}]
