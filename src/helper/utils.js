import Vue from 'vue'
import Moment from 'moment'

if (typeof String.prototype.startsWith !== 'function') {
  Window.String.prototype.startsWith = function (prefix) {
    return this.slice(0, prefix.length) === prefix
  }
}

export default {
  resMsg (res) {
    let key = {
      zh: 'Chinese',
      en: 'English'
    }[Vue.config.lang]
    try {
      let obj = JSON.parse(res.Message)
      return obj[key] || obj.Chinese
    } catch (e) {
      return res && res.Message
    }
  },

  serverUrl (apiName) {
    return `app/${apiName}`
  },

  titleLang (zhStr, enStr) {
    return {
      zh: zhStr,
      en: enStr
    }
  },

  query (search) {
    let str = search || window.location.search
    let objURL = {}

    str.replace(
      new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
      ($0, $1, $2, $3) => {
        objURL[$1] = $3
      }
    )
    return objURL
  },

  queryString (url, query) {
    let str = []
    for (let key in query) {
      str.push(key + '=' + query[key])
    }
    return url + '?' + str.join('&')
  },

  /* -----------------------------localStorage------------------------------------ */
  /**
   * 存放一条本地存储记录
   * @param name
   * @param content
   */
  setStorage (name, content) {
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },

  /**
   * 根据名称获取本地存储的值
   * @param name
   */
  getStorage (name) {
    if (!name) return;
    let getContent = window.localStorage.getItem(name);
    if(!getContent) return;
    try {
      // content有可能不是JSON字符串而是纯字符串
      return JSON.parse(getContent);
    } catch (e) {
      return getContent;
    }
  },

  /**
   * 删除指定name的本地存储值
   * @param name
   */
  removeStorage (name) {
    if (!name) return;
    window.localStorage.removeItem(name)
  },

  /**
   * 设置页面标题
   * @param object
   */
  setTitle(object) {
    this.setStorage('page-title', JSON.stringify(object));
  },

  /**
   * 获取页面标题
   * @returns {*}
   */
  getTitle() {
    return this.getStorage('page-title');
  },


  /**
   * auto scroll to top
   */
  scrollTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  },

  /**
   * 获取当前时间
   * @returns {number}
   */
  getCurrentTimeMillis() {
    return (new Date()).getTime();
  },
  getCurrentTimeUTC() {
    return (new Date()).getUTCDate();
  },
  getCurrentTimeString() {
    let time = new Date();
    return time && Moment(time).format('YYYY-MM-DD HH:mm:ss');
  },

  /**
   * 格式化日期时间
   * @param time
   * @returns {*|string}
   */
  dateConvert (time) {
    return time && Moment(time).format('YYYY-MM-DD HH:mm:ss')
  },
  dayConvert (time) {
    return time && Moment(time).format('YYYY-MM-DD')
  },

  /**
   * 正则验证邮箱
   * @param email
   * @returns {boolean}
   */
  checkEmail(email){
    return (/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(email));
  },

  /**
   * 正则验证手机号
   * @param phone
   * @returns {boolean}
   */
  checkPhone(phone){
    return (/^1(3|4|5|7|8)\d{9}$/.test(phone));
  },

}
