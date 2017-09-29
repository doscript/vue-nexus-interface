<template>
  <div class="account">
    <bread-title></bread-title>
    <section class="page">
      <div class="page-body">
        <el-tabs v-model="activeNameTab" type="card" @tab-click="handleClick" class="eben-tabs">
          <el-tab-pane label="账户余额" name="first" class="first">
            <el-collapse v-model="activeNamesFirst" @change="handleCollapseChange">
              <el-collapse-item title="E本账户" name="1">
                <p>账户余额：<i>您尚未充值</i></p>
              </el-collapse-item>
              <el-collapse-item title="其他余额" name="2">
                <p>尚无其他余额信息</p>
              </el-collapse-item>
            </el-collapse>
            <div class="buttons">
              <el-button type="primary" class="logout-btn" @click="recharge">立即充值</el-button>
            </div>
            <div class="info">
              <h5>提示信息</h5>
              <ul>
                <li>· E本帐户余额是您在E人E本充值的现金。您可以通过该余额购买E本支持的所有付费内容。</li>
                <li>· 在购买或付费成功后，系统将自动使用您的账户余额或其他金额。</li>
                <li>· 如果当前的支付方式无法满足您的需求，您可登录E本官网www.eben.cn进行充值。</li>
                <li>· 充值过程中可以索取发票，充值成功后您填写的发票信息才视为有效。</li>
                <li>· 其他金额无法充值，可以通过参加书城、应用商城等促销活动获得，请关注消息中心的活动通知。</li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="充值记录" name="second" class="second">
            <el-collapse v-model="activeNamesSecond" @change="">
              <el-collapse-item title="支付宝充值记录" name="1">
                <p>暂无充值记录</p>
              </el-collapse-item>
              <el-collapse-item title="网银在线充值记录" name="2">
                <p>暂无充值记录</p>
              </el-collapse-item>
            </el-collapse>
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
    name: 'Account',

    data () {
      return {
        loginInfo: $auth.getLoginInfo(),
        activeNameTab: 'first',
        activeNamesFirst: ['1'],
        activeNamesSecond: ['1'],
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

      handleCollapseChange(activeNames) {
        console.log(activeNames);
      },

      recharge() {
        console.log('立即充值');
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .account {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {
        padding: 15px 0;

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

            .first,
            .second {
              display: flex;
              flex-direction: column;

              .buttons {
                text-align: center;
                padding: 15px 0;
              }

              .info {

                h5 {
                  padding: 15px 0;
                }

                ul {

                  li {
                    text-indent: -18px;
                    margin-left: 18px;
                    line-height: $common-line-height;
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
    #app .account {

      section.page {

        .page-body {

        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .account {

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
