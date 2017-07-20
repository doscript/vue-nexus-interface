/*
* 权限验证模块
*/
export default {
  checkSession () {
    return window.localStorage.getItem('isLogin')
  }
}
