<template>
  <div class="login">
    <section class="page">
      <div class="login-form">
        <h4>E本账户登录</h4>
        <el-form ref="form" :model="form" label-width="0px" class="form-content">
          <el-form-item label="">
            <el-input v-model="form.username" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.password" placeholder="请输入密码" type="password">
            </el-input>
          </el-form-item>
          <div class="function-button">
            <a class="" href="javascript:void(0);" @click="resetPassword">忘记密码 >></a>
            <el-button type="primary" class="submit-btn" @click="onSubmit" :loading="buttonSubmit.loading">登 录</el-button>
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
  import { $utils } from '@helper'

  export default{
    name: 'Login',

    data () {
      return {
        form: {
          username: '',
          password: '',
        },
        buttonSubmit:{
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

      onSubmit() {
        console.log('submit!');
        this.buttonSubmit.loading = true;
        const othis = this;
        setTimeout(function() {
          othis.buttonSubmit.loading = false;
        }, 2000);
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

      .login-form {
        height: 300px;
        max-width: 400px;
        text-align: center;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
          padding: 20px 0;
          text-align: left;
        }

        .form-content {

          .function-button {
            display: flex;
            justify-content: space-between;

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
        display: flex;
        flex-direction: column;
        justify-content: center;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      section.page {
        display: flex;

        .login-form {
          height: 240px;
          width: 50%;
          padding: 0 20px 0 0;
        }

        hr {
          height: 240px;
          border-left: 1px solid #{$char-color};
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

        .login-form {
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
