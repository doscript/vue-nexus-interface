<template>
  <div class="user-info">
    <bread-title></bread-title>
    <section class="page">
      <div class="page-body">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="eben-tabs">
          <el-tab-pane label="首页" name="first" class="first">
            <div class="avatar">
              <figure></figure>
            </div>
            <div class="login-info">
              <p><strong>{{ loginInfo.nickname }}</strong>，您好</p>
              <p>您的E本账号为：{{ loginInfo.username }}</p>
              <p>您上次登录的时间是：{{ loginInfo.loginTime }}</p>
              <el-button type="primary" class="logout-btn" @click="logout('form')">注  销</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="个人资料" name="second" class="second">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="活动时间" required>
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="我的头像" name="third" class="third">

          </el-tab-pane>
          <el-tab-pane label="修改密码" name="fourth" class="fourth">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils, $auth } from '@helper'
  import BreadTitle from './BreadTitle'

  export default {
    name: 'UserInfo',

    data () {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginInfo: $auth.getLoginInfo(),
        activeName: 'first',
        ruleForm: {
          name: '',
          date1: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
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
      BreadTitle: BreadTitle
    },

    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      logout() {
        console.log('logout');
        $utils.setStorage('is-login', 'false');
        $utils.removeStorage('login-sn');
        $utils.removeStorage('login-info');
        this.$router.push('user-center/login');
      },
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .user-info {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {
        padding: #{$common-padding} 0;

        .eben-tabs {

          .el-tabs__header {
            border-bottom: 1px solid #{$char-color};

            .el-tabs__nav-wrap {

              .el-tabs__nav-next, .el-tabs__nav-prev {
                color: $char-color;
              }

              .el-tabs__nav-scroll {

                .el-tabs__nav {

                  .el-tabs__item {
                    color: $char-color;
                  }

                  .el-tabs__item:hover {
                    color: $char-hover-color;
                  }

                  .el-tabs__item.is-active {
                    border-bottom-color: $main-color;
                    color: $char-hover-color;
                  }
                }
              }
            }
          }

          .el-tabs__content {

            .first {
              display: flex;
              flex-direction: column;

              .avatar {
                height: 200px;
                padding: 20px;

                figure {
                  background: url("#{$eben-user-domain}/avatar/index/248653/b") no-repeat center;
                  background-size: contain;
                  border: 5px solid #{$divider-color};
                  border-radius: 5px;
                  width: 160px;
                  margin: 0 auto;
                }
              }

              .login-info {
                height: 200px;
                max-width: 320px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;

                p {
                  strong {
                    font-size: 18px;
                  }
                }
              }

            }

            .second {

            }

            .third {

            }

            .fourth {

            }
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .user-info {

      section.page {

        .page-body {

          .eben-tabs {

            .el-tabs__content {

              .first {
                flex-direction: row;

                .login-info {
                  margin: 0;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .user-info {

      section {
        width: $common-content-width-small;
      }

      section.page {

        .page-body {

          .eben-tabs {

            .el-tabs__content {

              .first {

              }
            }
          }
        }
      }
    }
  }
</style>
