<template>
  <div class="knowledge">

    <section class="knowledge-banner">
      <div class="page-body">
        <div class="list-area list-part">
          <div class="title">
            <icon name="point" class="icon-point"></icon>选择机型与类别
          </div>
          <div class="list-content">
            <span class="choose-title">机型：</span>
            <ul class="choose-ul">
              <li class="choose-item-outer" v-for="item in devices" :key="item">
                <span @click="onclickItemDevice(item)" :class="[item.value == deviceChoose.value ? 'active' : '']">{{ item.label }}</span>
              </li>
            </ul>
          </div>
          <div class="list-content">
            <span class="choose-title">类别：</span>
            <ul class="choose-ul">
              <li class="choose-item-outer" v-for="item in qtypes" :key="item">
                <span @click="onclickItemQtype(item)" :class="[item.value == qtypeChoose.value ? 'active' : '']">{{ item.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="knowledge-questions" v-show="triggerQuestions">
      <div class="page-body">
        <div class="list-area list-part">
          <div class="title">
            <icon name="point" class="icon-point"></icon>问题列表
          </div>
          <div class="list-content">
            <ul class="question-ul">
              <li v-for="item in questionList" :key="item" class="question-item">
                <span @click="getQuestionDetail(item)">· {{ item.label }}</span>
              </li>
            </ul>
            <div class="question-pages">
              <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="knowledge-detail" v-show="triggerDetail">
      <div class="page-body">
        <div class="list-area list-part">
          <div class="title">
            <div class="">
              <icon name="point" class="icon-point"></icon>问题详情
            </div>
            <div class="">
              <span class="return" @click="returnToQuestionList()"><< 返回</span>
            </div>
          </div>
          <div class="list-content">
            <span class="choose-title">问题：</span>
            <p >{{ questionDetail.question }}</p>
          </div>
          <div class="list-content">
            <span class="choose-title">答案：</span>
            <p >{{ questionDetail.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '../../constants/index'
  import { $utils } from '@helper'

  export default{
    name: 'Knowledge',

    data () {
      return {
        query: this.$route.query,
        devices: [
          { value: '1', label: 'T1' },
          { value: '2', label: 'T2' },
          { value: '3', label: 'T3' },
          { value: '4', label: 'T4' },
          { value: '5', label: 'T5' },
          { value: '6', label: 'T6' },
          { value: '7', label: 'T7' },
          { value: '8', label: 'T8' },
          { value: 'M1', label: 'M1' },
          { value: 'S1', label: 'S1' },
          { value: 'A1', label: 'A1' },
        ],
        qtypes: [
          { value: '108', label: '电话' },
          { value: '109', label: '联系人' },
          { value: '110', label: '短信' },
          { value: '111', label: '安全' },
          { value: '112', label: '记事' },
          { value: '113', label: '文档' },
          { value: '114', label: '邮件' },
          { value: '115', label: '日程' },
          { value: '118', label: '激活' },
          { value: '122', label: 'E问E答' },
          { value: '123', label: '桌面' },
          { value: '125', label: 'OFFICE' },
          { value: '126', label: '网络类' },
          { value: '127', label: '系统类' },
        ],
        deviceChoose: {
          value: '',
          label: '',
        },
        qtypeChoose: {
          value: '',
          label: '',
        },
        questionList: [
          { id: 1, label: '如何打电话？' },
          { id: 2, label: '如何删除通话记录？' },
          { id: 3, label: '如何查看未接来电？' },
          { id: 4, label: '通话中如何记录内容？' },
          { id: 5, label: '通话中如何录音？' },
          { id: 6, label: '通话中如何添加新的通话？' },
          { id: 7, label: '当前通话如何静音？' },
          { id: 8, label: '如何暂停当前通话？' },
          { id: 9, label: '拒接电话“不在服务区”提示' },
        ],
        questionDetail: {
          question: '如何打电话？',
          answer: '点击电话图片，打开拨号键盘即可。点击电话图片，打开拨号键盘即可。点击电话图片，打开拨号键盘即可。点击电话图片，打开拨号键盘即可。点击电话图片，打开拨号键盘即可。点击电话图片，打开拨号键盘即可。点击电话图片，打开拨号键盘即可。',
        },
        triggerQuestions: true,
        triggerDetail: false,
      }
    },

    computed: {},

    created () {
      console.log(this.query);
      if (this.query == null || this.query == {}) {
        this.query = {
          device: 'M1',
          qatype: '',
          keyword: ''
        }
      }
    },

    mounted () {},

    props: {

    },

    watch: {

    },

    components: {

    },

    methods: {

      onClickItem(item) {
        console.log(item);
        if (item.pathType === '_blank') {
          window.location.href = item.path;
          return;
        }
        this.$router.push(item.path);
      },

      onclickItemDevice(item) {
        this.deviceChoose = item;
        this.qtypes = [
          { value: '111', label: '安全' },
          { value: '112', label: '记事' },
          { value: '113', label: '文档' },
          { value: '114', label: '邮件' },
          { value: '115', label: '日程' },
          { value: '118', label: '激活' },
          { value: '122', label: 'E问E答' },
          { value: '123', label: '桌面' },
          { value: '125', label: 'OFFICE' },
          { value: '126', label: '网络类' },
          { value: '127', label: '系统类' },
        ];
        this.qtypeChoose = this.qtypes[0];
        this.searchQuestions();
      },

      onclickItemQtype(item) {
        this.qtypeChoose = item;
        this.searchQuestions();
      },

      searchQuestions() {
        console.log(this.deviceChoose);
        console.log(this.qtypeChoose);
        this.questionList = [
          { id: 1, label: '如何设置防打扰？' },
          { id: 2, label: '如何设置防丢失功能？' },
          { id: 3, label: '无线安全锁的是使用说明？' },
          { id: 4, label: '如何启用无线安全锁？' },
        ];
        this.triggerDetail = false;
        this.triggerQuestions = true;
      },

      getQuestionDetail(item) {
        console.log(item);
        this.triggerQuestions = false;
        this.triggerDetail = true;
      },

      returnToQuestionList() {
        this.searchQuestions();
      },
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .knowledge {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.knowledge-banner,
    section.knowledge-questions,
    section.knowledge-detail {

      .page-body {
        padding-top: $section-padding-top;

        .list-area {
          padding-bottom: $common-padding;

          .title {
            position: relative;
            padding-left: $inner-content-padding;
            padding-bottom: $common-padding;
            font-size: 18px;
            line-height: 1.5em;
            color: $custom-service-title-color;
            border-bottom: 1px solid #{$custom-service-border-color};
            height: 44px;

            .icon-point {
              margin-right: $common-margin;
              width: 12px;
            }
          }
        }
      }
    }

    section.knowledge-banner {

      .page-body {

        .list-area {

          .list-content {
            display: flex;
            padding: 10px 0 0;

            .choose-title {
              padding: 10px;
              min-width: 72px;
              line-height: 24px;
            }

            .choose-ul {
              display: flex;
              flex-wrap: wrap;
              margin: 0;

              .choose-item-outer {
                padding: 5px;

                span {
                  line-height: 24px;
                  display: block;
                  transition: all 0.25s ease-in-out;
                  padding: 5px;
                  border: 1px solid #{$main-color};
                  border-radius: 3px;
                }

                span:hover {
                  cursor: pointer;
                  color: $char-hover-color;
                }

                span.active {
                  border-color: $char-color;
                  color: $char-color;
                }
              }
            }
          }
        }
      }
    }

    section.knowledge-questions {

      .page-body {

        .list-area {

          .title {}

          .list-content {

            .question-ul {
              display: flex;
              flex-wrap: wrap;
              margin: 0;
              padding: 15px;

              .question-item {
                width: 100%;
                padding: 10px 0;

                span {
                  line-height: 24px;
                  transition: all 0.25s ease-in-out;
                }

                span:hover {
                  cursor: pointer;
                  color: $char-hover-color;
                }
              }
            }

            .question-pages {
              display: flex;
              justify-content: center;

              .el-pagination.el-pagination--small {
                color: $char-color;

                .btn-next,
                .btn-prev {
                  background-color: $main-color;
                  color: $char-color;
                }

                .btn-next.disabled,
                .btn-prev.disabled {
                  color: $unimportant-char-color;
                }

                .el-pager {

                  li {
                    background: $main-color;
                    border: 1px solid #{$main-color};
                    color: $char-color;
                    transition: all 0.25s ease-in-out;
                  }

                  li:hover {
                    color: $char-hover-color;
                  }

                  li.active {
                    border-color: $unimportant-char-color;
                    color: $unimportant-char-color;
                  }
                }
              }
            }
          }
        }
      }
    }

    section.knowledge-detail {

      .page-body {

        .list-area {

          .title {
            display: flex;
            justify-content: space-between;

            .return {
              color: $char-color;
              font-size: 14px;
              transition: all 0.25s ease-in-out;
            }

            .return:hover {
              cursor: pointer;
              color: $char-hover-color;
            }
          }

          .list-content {
            display: flex;
            padding: 10px 0 0;

            .choose-title {
              padding: $common-padding;
              min-width: 72px;
              line-height: 24px;
            }

            p {
              margin: 0;
              padding: $common-padding;
              line-height: 24px;
            }
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .knowledge {

      section.knowledge-questions {

        .page-body {

          .list-area {

            .list-content {

              .question-ul {

                .question-item {
                  width: 50%;
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .knowledge {

      section {
        width: $common-content-width-small;
      }

      section.knowledge-questions {

        .page-body {

          .list-area {

            .list-content {

              .question-ul {

                .question-item {
                  width: 33.3%;
                }
              }
            }
          }
        }
      }

    }
  }
</style>
