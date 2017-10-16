<template>
  <div class="login">
    <section class="page">
      <div class="logout-form" v-if="isLogin == true && loginInfo">
        <h4>已登录账户</h4>
        <p>当前用户：{{ loginInfo.username }}</p>
        <p>登录时间：{{ loginInfo.loginTime }}</p>
        <el-button type="primary" class="logout-btn" @click="logout()">注  销</el-button>
      </div>
      <div class="login-form" v-else>
        <h4>E本账户登录</h4>
        <el-form :rules="rules" ref="form" :model="form" label-width="0px" class="form-content">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" required>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" type="password">
            </el-input>
          </el-form-item>
          <div class="function-button">
            <a class="" href="javascript:void(0);" @click="resetPassword">忘记密码 >></a>
            <el-button type="primary" class="submit-btn" @click="login('form')" :loading="buttonSubmit.loading">登 录</el-button>
          </div>
        </el-form>
      </div>
      <hr>
      <div class="login-info">
        <h5>尊敬的E人E本用户：</h5>
        <p>欢迎您使用E本社区，登录社区前请先激活E人E本“个人中心”。成功激活后，使用激活手机号，即可在本页面登录。</p>
        <a class="" href="javascript:void(0);" @click="validateInfo">验证设备信息 >></a>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils, $auth } from '@helper'

  export default{
    name: 'Login',

    data () {
      return {
        isLogin: $auth.checkLogin(),
        loginInfo: $auth.getLoginInfo(),
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'change' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
          ],
        },
        buttonSubmit: {
          loading: false,
        }
      }
    },

    computed: {},

    created () {

      this.$utils.scrollTop();

    },

    mounted () {

    },

    props: {

    },

    watch: {

    },

    components: {

    },

    methods: {

      login(formName) {
        const othis = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('login!');
            this.buttonSubmit.loading = true;
            setTimeout(function() {
              // 向远程服务器发送登录请求，服务器返回用户基本信息
              let loginInfo = {
                loginSN: 'cfbb50130344e9564e6a415f64be9054',
                nickname: '沐圣',
              };
              $utils.setStorage('is-login', 'true');
              $utils.setStorage('login-sn', loginInfo.loginSN);
              $utils.setStorage('login-info', {
                username: othis.form.username,
                nickname: loginInfo.nickname,
                loginTime: $utils.getCurrentTimeString(),
              });
              othis.buttonSubmit.loading = false;
              let pageTo = $utils.getStorage('page-to');
              if (pageTo && pageTo != null) {
                othis.$router.push(pageTo.path);
                $utils.removeStorage('page-to');
              } else {
                othis.loginInfo = $auth.getLoginInfo();
                othis.isLogin = true;
              }
              othis.resetForm(formName);
            }, 2000);
          } else {
            console.log('error login!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      logout() {
        console.log('logout');
        $utils.setStorage('is-login', 'false');
        $utils.removeStorage('login-sn');
        $utils.removeStorage('login-info');
        this.isLogin = false;
      },

      resetPassword() {
        console.log('resetPassword');
      },

      validateInfo() {
        console.log('validateInfo');
      },
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

  #app .login {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    a {
      color: $char-color;
      line-height: 36px;
    }

    a:hover {
      color: $char-hover-color;
    }

    section.page {

      .logout-form {
        height: 240px;
        max-width: 400px;
        margin: 0 auto;
        @include flex();
        @include flex-direction(column);
        @include justify-content();

        h4 {
          padding: 20px 0;
          text-align: left;
        }
      }

      .login-form {
        height: 300px;
        max-width: 400px;
        text-align: center;
        margin: 0 auto;
        @include flex();
        @include flex-direction(column);
        @include justify-content();

        h4 {
          padding: 20px 0;
          text-align: left;
        }

        .form-content {

          .function-button {
            @include flex();
            @include flex-direction();
            @include justify-content(space-between);

            .submit-btn {
              height: 36px;
              width: 90px;
            }
          }
        }
      }

      hr {
        margin: 0;
        border-top: 1px solid #{$char-color};
      }

      .login-info {
        height: 200px;
        @include flex();
        @include flex-direction(column);
        @include justify-content();
        max-width: 400px;
        margin: 0 auto;

        h5 {
          padding: 20px 0;
          color: $title-color;
        }

        p {
          line-height: $common-line-height;
        }

        a {
          width: 110px;
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .login {
      @include flex();
      @include flex-direction(column);
      @include justify-content();
      height: 100%;

      section.page {
        @include flex();

        .logout-form {
          padding: 0 20px 0 0;

          .logout-btn {
            max-width: 200px;
          }
        }

        .login-form {
          height: 240px;
          width: 50%;
          padding: 0 20px 0 0;
        }

        hr {
          height: 240px;
          border-left: 1px solid #{$unimportant-char-color};
        }

        .login-info {
          height: 240px;
          width: 50%;
          padding: 0 0 0 20px;
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .login {

      section {
        width: $common-content-width-small;
      }

      section.page {

        .login-form, .logout-form {
          padding: 0 70px;
        }

        hr {

        }

        .login-info {
          padding: 0 70px;
        }
      }
    }
  }
</style>
