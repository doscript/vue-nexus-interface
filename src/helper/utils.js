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
  /*
   * set localStorage
   */
  setStorage (name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  },

  /**
   * get localStorage
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
   * delete localStorage
   */
  removeStorage (name) {
    if (!name) return
    window.localStorage.removeItem(name)
  },

  setTitle(object) {
    this.setStorage('page-title', JSON.stringify(object));
  },

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
   * get current time
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
  }

}
