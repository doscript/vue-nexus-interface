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
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
              <el-form-item label="昵称" prop="nickname">
                <el-input v-model="ruleForm.nickname" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入您的姓名" required></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" placeholder="请输入您的邮箱" required></el-input>
              </el-form-item>
              <el-form-item label="生日">
                <el-form-item prop="birthday">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="身份" prop="identity">
                <el-select v-model="ruleForm.identity" placeholder="请选择身份">
                  <el-option v-for="item in identities" :key="item" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="地区" prop="province">
                <el-select v-model="ruleForm.province" placeholder="请选择所在地区">
                  <el-option v-for="item in provinces" :key="item" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="手机" prop="phone">
                <el-input v-model="ruleForm.phone" placeholder="请输入您的手机号" required></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保 存</el-button>
                <el-button @click="resetForm('ruleForm')">重 置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="我的头像" name="third" class="third">

          </el-tab-pane>
          <el-tab-pane label="修改密码" name="fourth" class="fourth">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="旧密码" prop="oldPass">
                <el-input type="password" v-model="ruleForm2.oldPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提 交</el-button>
                <el-button @click="resetForm('ruleForm2')">重 置</el-button>
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
      // 旧密码验证
      let validateOldPass = (rule, value, callback) => {
        if (this.ruleForm2.oldPass !== '123qwe') {
          callback(new Error('旧密码输入错误，示例：123qwe'));
        }
        callback();
      };
      // 密码输入验证
      let validatePass = (rule, value, callback) => {
        if (this.ruleForm2.checkPass !== '' && value !== this.ruleForm2.checkPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 再次输入密码验证
      let validatePass2 = (rule, value, callback) => {
        if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 邮箱验证，是对原有验证的补充，可在规则属性中先写原有验证（如非空等），再写自定义验证
      let validateEmail = (rule, value, callback) => {
        if (!$utils.checkEmail(value)) {
          callback(new Error('请输入正确的邮箱'));
        } else {
          callback();
        }
      };
      // 手机号验证
      let validatePhone = (rule, value, callback) => {
        if (!$utils.checkPhone(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }
      };
      return {
        loginInfo: $auth.getLoginInfo(),
        activeName: 'first',
        ruleForm: {
          nickname: '',
          name: '',
          email: '',
          birthday: '',
          sex: '',
          identity: '',
          province: '',
          phone: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入您的姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'change' },
          ],
          email: [
            { required: true, message: '请输入您的邮箱', trigger: 'blur' },
            { validator: validateEmail, trigger: 'change' },
          ],
          phone: [
            { required: true, message: '请输入您的手机号', trigger: 'blur' },
            { validator: validatePhone, trigger: 'change' }
          ],
        },
        ruleForm2: {
          oldPass: '',
          pass: '',
          checkPass: '',
        },
        rules2: {
          oldPass: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { validator: validateOldPass, trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'change' },
          ],
          checkPass: [
            { required: true, message: '请输入确认密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'change' },
          ],
        },
        identities: [
          { label: '党政军', value: '1' },
          { label: '企事业', value: '2' },
          { label: '教科文', value: '3' },
        ],
        provinces: [
          { id: '1', name: '北京市' },
          { id: '20', name: '天津市' },
          { id: '39', name: '上海市' },
          { id: '59', name: '重庆市' },
          { id: '100', name: '河北省' },
          { id: '284', name: '山西省' },
          { id: '414', name: '河南省' },
          { id: '588', name: '辽宁省' },
          { id: '702', name: '吉林省' },
          { id: '772', name: '黑龙江' },
          { id: '916', name: '内蒙古自治区' },
          { id: '1027', name: '江苏省' },
          { id: '1138', name: '山东省' },
          { id: '1296', name: '安徽省' },
          { id: '1414', name: '浙江省' },
          { id: '1515', name: '福建省' },
          { id: '1610', name: '湖北省' },
          { id: '1726', name: '湖南省' },
          { id: '1863', name: '广东省' },
          { id: '2006', name: '广西自治区' },
          { id: '2129', name: '江西省' },
          { id: '2239', name: '四川省' },
          { id: '2440', name: '贵州省' },
          { id: '2538', name: '云南省' },
          { id: '2684', name: '西藏自治区' },
          { id: '2765', name: '海南省' },
          { id: '2791', name: '陕西省' },
          { id: '2907', name: '甘肃省' },
          { id: '3007', name: '宁夏自治区' },
          { id: '3024', name: '青海省' },
          { id: '3076', name: '新疆自治区' },
        ],
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
        if (tab.index == 1) {
          this.initUserInfoForm();
        }
      },

      initUserInfoForm() {
        this.ruleForm = {
          nickname: 'liuchao1xcv1234',
          name: '沐圣',
          email: '425893642@qq.com',
          birthday: '1900-10-01',
          sex: '男',
          identity: '1',
          province: '1',
          phone: '18611111111',
        };
      },

      submitForm(formName) {
        this.ruleForm.birthday = this.$utils.dayConvert(this.ruleForm.birthday);
        console.log(this.ruleForm);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('验证成功，提交!');
          } else {
            console.log('验证失败!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
        console.log(formName + ' 重置');
      },

      logout() {
        console.log('logout');
        $utils.setStorage('is-login', 'false');
        $utils.removeStorage('login-sn');
        $utils.removeStorage('login-info');
        this.$router.push('/user-center/login');
      },
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

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
              @include flex();
              @include flex-direction(column);
              @include justify-content();
              @include align-items();
              min-height: 360px;

              .avatar {
                height: 200px;
                padding: 20px;

                figure {
                  @include background-image-common("#{$eben-user-domain}/avatar/index/248653/b", contain);
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
                @include flex();
                @include flex-direction(column);
                @include justify-content();

                p {
                  strong {
                    font-size: 18px;
                  }
                }
              }

            }

            .second {
              padding-top: 30px;

              form {
                max-width: 400px;
                margin: 0 auto;
              }
            }

            .third {

            }

            .fourth {
              padding-top: 30px;

              form {
                max-width: 400px;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }

    .el-radio {
      margin-bottom: 0;
    }

    .el-select {
      display: block;
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .user-info {

      section.page {

        .page-body {

          .eben-tabs {

            .el-tabs__content {

              .first {
                @include flex-direction(row);

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
