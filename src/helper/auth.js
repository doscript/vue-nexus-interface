/*
* 权限验证模块
*/
import { $utils } from '@helper'

export default {

  checkSession () {
    return window.localStorage.getItem('is-login')
  },

  checkLogin () {
    // 首先确认本地是否已登录过，若未登录则直接返回
    let isLogin = window.localStorage.getItem('is-login');
    if (isLogin) {
      // 取出上次登录时服务器返回的序列号
      let loginSN = window.localStorage.getItem('login-sn');
      // 远程验证登录序列号是否有效，无效则表示已有其他端登录，此方法是为了保证唯一终端登录
      let isAvailable = false;
      /*
        调用验证接口...
       */
      isAvailable = true;
      return isAvailable;
    } else {
      return false;
    }
  },

  getLoginInfo() {
    return JSON.parse($utils.getStorage('login-info'));
  }
}
