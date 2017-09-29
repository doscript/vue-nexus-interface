<template>
  <div class="mdm">
    <bread-title></bread-title>
    <section class="page">
      <div class="page-body">
        <h5 class="active-title">您当前共激活了 1台 E人E本</h5>
      </div>
    </section>
    <section class="page" v-for="item in devices" :key="item">
      <div class="page-body">
        <div class="device-info">
          <p>型号：{{ item.deviceType }}</p>
          <p>序列号：{{ item.deviceSN }}</p>
          <p>激活日期：{{ item.activeTime }}</p>
        </div>
        <el-collapse>
          <el-collapse-item title="安全设置" name="1">
            <div class="mdm-security">
              <div class="title">

              </div>
              <div class="content">
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'suo ping mi ma')">锁屏密码</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 当E本丢失后，可以为该E本设置或修改开机密码，则其他人无法继续使用该E本。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'qing chu mi ma')">清除密码</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 如果忘记了E本的密码，可以清除E本的开机密码。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'ding wei Eben')">定位E本</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 可以定位E本的当前位置，方便找回遗失的E本。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'pai zhao shang chuan')">拍照上传</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 可以在锁屏状态下秘密拍照并将照片传到您的激活邮箱。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'shan chu shu ju')">删除数据</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 找不到E本的情况下，可远程删除E本上的数据，将隐私性质数据销毁，把损失降到最低。</p>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item title="个性设置" name="2">
            <div class="mdm-self">
              <div class="title">

              </div>
              <div class="content">
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'kai ji dong hua')">开机动画</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 可以更改E本的开机动画。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'bi zhi geng gai')">壁纸更改</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 可以更改E本的桌面壁纸，支持上传图片。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'ying yong an zhuang')">应用安装</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 电脑上下载的应用，不需要连接USB就可以直接安装到E本上。</p>
                  </div>
                </div>
                <div class="command">
                  <div class="button-area">
                    <el-button type="primary" class="send-btn" @click="sendCommand(item, 'tui song wen jian')">推送文件</el-button>
                  </div>
                  <div class="notice-area">
                    <p>* 电脑上的文件（文件不超过20M），不连接USB就可以推送到E本上“我的文档”中。</p>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils, $auth } from '@helper'
  import BreadTitle from './BreadTitle'

  export default {
    name: 'MDM',

    data () {
      return {
        loginInfo: $auth.getLoginInfo(),
        devices: [
          { deviceSN: '123123', deviceType: 'EBEN80008', activeTime: '2017-09-01', support: true, },
          { deviceSN: 'T8J622SCSA000258', deviceType: 'EBEN80001', activeTime: '2016-10-10', support: true, },
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

      sendCommand(item, command) {
        console.log('发送指令');
        console.log(item);
        console.log(command);
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .mdm {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {
        padding: 5px 0;

        .active-title {
          padding: 15px 0;
        }

        p {
          line-height: $common-line-height;
          margin: 0;
          padding: 5px 0;
        }

        .device-info {
          background: #222;
          padding: 15px;
        }

        .mdm-security,
        .mdm-self {

          .title  {

          }

          .content {

            .command {
              padding: 10px 0;

              .button-area {

              }

              .notice-area {

              }
            }
          }
        }

        .mdm-self {

        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .mdm {

      section.page {

        .page-body {

          .mdm-security,
          .mdm-self {

            .content {

              .command {
                display: flex;
                align-items: center;

                .notice-area {
                  padding: 0 0 0 10px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .mdm {

      section {
        width: $common-content-width-small;
      }

      section.page {

        .page-body {

        }
      }
    }
  }
</style>
