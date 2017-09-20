<template>
  <div class="customer-service">

    <section class="pic-banner">
      <div class="page-body">
        <article class="">
          <figure :style="picBanner.style"></figure>
        </article>
      </div>
    </section>

    <section class="links-list">
      <div class="page-body">
        <div class="content">
          <div class="link-service hover-action" @click="onClickItem(linksList.knowledge)">
            <figure></figure>
            <div><span>知识库</span></div>
          </div>
          <div class="link-service hover-action" @click="onClickItem(linksList.equestion)">
            <figure></figure>
            <div><span>E问E答</span></div>
          </div>
          <div class="link-service hover-action" @click="onClickItem(linksList.serviceplace)">
            <figure></figure>
            <div><span>售后维修网点</span></div>
          </div>
          <div class="link-service hover-action" @click="onClickItem(linksList.ebb)">
            <figure></figure>
            <div><span>E本社区</span></div>
          </div>
          <div class="link-service pic-service">
            <figure></figure>
            <div><span>微信服务平台</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="search-form">
      <div class="page-body">
        <div class="content">
          <el-select v-model="searchParams.device" placeholder="设备类型">
            <el-option
              v-for="item in deviceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="searchParams.qatype" placeholder="问题类型">
            <el-option
              v-for="item in questionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input class="keyword" placeholder="常见问题搜索" v-model="searchParams.keyword">
            <el-button slot="append" icon="search" @click="search()" :loading="searchLoading"></el-button>
          </el-input>
        </div>
      </div>
    </section>

    <section class="info-list">
      <div class="page-body">
        <div class="list-area list-part">
          <div class="title">
            <icon name="point" class="icon-point"></icon>公告区
          </div>
          <div class="list-content">
            <ul class="">
              <li class="" v-for="item in notices" :key="item">
                <span @click="onClickItem(item)">{{ item.title }}</span>
              </li>
            </ul>
          </div>
          <div class="more">
            <span @click="onClickItem(moreNotices)">更多公告</span>
          </div>
        </div>
        <div class="list-area list-part">
          <div class="title">
            <icon name="point" class="icon-point"></icon>常见热门问题
          </div>
          <div class="list-content">
            <ul class="">
              <li class="" v-for="item in questions" :key="item">
                <span @click="onClickItem(item)">{{ item.title }}</span>
              </li>
            </ul>
          </div>
          <div class="more">
            <span @click="onClickItem(moreQuestions)">更多常见问题</span>
          </div>
        </div>
        <div class="list-collection">
          <div class="list-area">
            <div class="title">
              <icon name="point" class="icon-point"></icon>视频说明书
            </div>
            <div class="list-content">
              <div class="pic-area">
                <figure></figure>
                <figure @click="onClickItem(videoPage)"></figure>
              </div>
            </div>
          </div>
          <div class="list-area">
            <div class="title">
              <div class="">
                <icon name="point" class="icon-point"></icon>资源下载
              </div>
              <div class="">
                <span class="more" @click="onClickItem(videoPage)">更多</span>
              </div>
            </div>
            <div class="list-content">
              <span class="download-link" v-for="item in downloadLinks" :key="item" @click="onClickItem(videoPage)">{{ item.title }}</span>
            </div>
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
    name: 'CustomerService',

    data () {
      return {
        picBanner: {
          style: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/service_pic2.png")',
          },
        },
        deviceOptions: [
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
        questionOptions: [
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
        searchParams: {
          device: '',
          qatype: '',
          keyword: ''
        },
        searchLoading: false,
        notices: [
          { id: '612', title: '预置应用公示', path: EbenDomain + '/about/detail/612', pathType: '_blank' },
          { id: '609', title: '关于对E本商城八大类应用下架通知', path: EbenDomain + '/about/detail/609', pathType: '_blank' },
          { id: '603', title: '2016年春节售后服务网点放假安排的通知', path: EbenDomain + '/about/detail/603', pathType: '_blank' },
          { id: '602', title: '售后服务站点新增通知', path: EbenDomain + '/about/detail/602', pathType: '_blank' },
          { id: '586', title: '售后服务站点电话变更通知', path: EbenDomain + '/about/detail/586', pathType: '_blank' },
          { id: '584', title: '售后服务站点撤站及地址变更通知', path: EbenDomain + '/about/detail/584', pathType: '_blank' },
          { id: '578', title: '售后服务站点新增通知', path: EbenDomain + '/about/detail/578', pathType: '_blank' },
          { id: '576', title: '售后服务站点电话变更通知', path: EbenDomain + '/about/detail/576', pathType: '_blank' },
        ],
        moreNotices: {
          path: '/customerService/announcements',
          query: {
            type: 'customerService',
          }
        },
        questions: [
          { id: '112164', title: '如何打电话？', path: EbenDomain + '/mutual/detail/M1/0/112164', pathType: '_blank' },
          { id: '110005', title: '如何开启蓝牙？', path: EbenDomain + '/mutual/detail/M1/0/110005', pathType: '_blank' },
          { id: '110004', title: '如何查查看4G流量？', path: EbenDomain + '/mutual/detail/M1/0/110004', pathType: '_blank' },
          { id: '110003', title: '如何关闭4G网络？', path: EbenDomain + '/mutual/detail/M1/0/110003', pathType: '_blank' },
          { id: '110002', title: '如何连接4G网络？', path: EbenDomain + '/mutual/detail/M1/0/110002', pathType: '_blank' },
          { id: '110001', title: '如何安装SIM卡？', path: EbenDomain + '/mutual/detail/M1/0/110001', pathType: '_blank' },
          { id: '110000', title: '如何添加WLAN网络？', path: EbenDomain + '/mutual/detail/M1/0/110000', pathType: '_blank' },
          { id: '109999', title: '如何连接WLAN网络？', path: EbenDomain + '/mutual/detail/M1/0/109999', pathType: '_blank' },
        ],
        moreQuestions: {
          path: '/customerService/knowledge',
        },
        videoPage: {
          path: EbenDomain + '/service/video',
          pathType: '_blank'
        },
        downloadLinks: [
          { id: '538', title: 'T9固件', path: EbenDomain + '/about/detail/538', pathType: '_blank' },
          { id: '487', title: 'T7固件', path: EbenDomain + '/about/detail/487', pathType: '_blank' },
          { id: '472', title: 'T5版本', path: EbenDomain + '/about/detail/472/introduction', pathType: '_blank' },
        ],
        moreDownloadLinks: {
          path: EbenDomain + '/mutual/resourcedown',
          pathType: '_blank'
        },
        linksList: {
          knowledge: {
            path: '/customerService/knowledge',
          },
          equestion: {
            path: '/customerService/equestion',
          },
          serviceplace: {
            path: '/customerService/network',
          },
          ebbs: {
            path: 'http://bbs.eben.cn/forum.php',
            pathType: '_blank'
          }
        }
      }
    },

    computed: {},

    created () {

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
        if (item.query) {
          this.$router.push({ path: item.path, query: item.query});
          return;
        }
        this.$router.push(item.path);
      },

      search() {
        this.searchLoading = true;
        console.log(this.searchParams);
        const sthis = this;
        setTimeout(function () {
          sthis.searchLoading = false;
        }, 2000);
        this.$router.push({ path: '/customerService/knowledge', query: this.searchParams });
      },

    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .customer-service {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.pic-banner {

      .page-body {

        article {
          /* 将banner高度设置50%屏幕宽度 */
          height: 50vw;
          min-height: 150px;
          max-height: 500px;

          figure {
            background: top center no-repeat;
            background-size: contain;
          }
        }
      }
    }

    section.links-list {
      padding-top: 30px;

      .page-body {

        .content {
          color: $char-color;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;

          .link-service {
            padding: 10px 0;
            min-width: 105px;
            width: auto;
            text-align: center;
            transition: all 0.25s ease-in-out;

            div {
              padding: 10px;

              span {
                font-size: 14px;
              }
            }
          }

          .link-service.hover-action {

            figure {
              display: block;
              background: url("#{$eben-resource-domain}/new_images/service_nav_icon.png") no-repeat center;
              width: 63px;
              height: 63px;
              margin: 0 auto;
            }

            div {

            }
          }

          .link-service.hover-action:hover {
            cursor: pointer;
            opacity: 0.8;
          }

          .link-service.hover-action:nth-of-type(1) {
            figure {
              background-position: 0 0;
            }
          }
          .link-service.hover-action:nth-of-type(2) {
            figure {
              background-position: -188px 0;
            }
          }
          .link-service.hover-action:nth-of-type(3) {
            figure {
              background-position: -377px 0;
            }
          }
          .link-service.hover-action:nth-of-type(4) {
            figure {
              background-position: -756px 0;
            }
          }

          .pic-service {
            width: auto;
            text-align: center;

            figure {
              background: url("#{$eben-resource-domain}/new_images/ercode.jpg") no-repeat center;
              background-size: contain;
              height: 63px;
            }

            div {
              padding: 10px 0;
            }
          }
        }
      }
    }

    section.search-form {
      padding-top: $section-padding-top;

      .page-body {

        .content {
          display: flex;
          flex-wrap: wrap;

          .el-select:nth-of-type(1) {
            width: 50%;
            padding: 10px 5px 10px 0;
          }

          .el-select:nth-of-type(2) {
            width: 50%;
            padding: 10px 0 10px 5px;
          }

        }
      }
    }

    section.info-list {
      padding-top: $section-padding-top;

      .page-body {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

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

          .list-content {
            border-bottom: 1px solid #{$custom-service-border-color};

            ul {
              margin: 0;
              padding: $inner-content-padding;

              li {

                span {
                  width: auto;
                  max-width: 100%;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  line-height: 28px;
                  color: $char-color;
                  transition: color 0.25s ease-in-out;
                  display: inline-block;
                }

                span:hover {
                  cursor: pointer;
                  color: $char-hover-color;
                }
              }

            }
          }

          .more {
            padding: 15px 10px;

            span {
              color: $char-color;
              transition: color 0.25s ease-in-out;
              display: inline-block;
              line-height: 1em;
            }

            span:hover {
              cursor: pointer;
              color: $char-hover-color;
            }

            span::after {
              content: ' >>';
            }
          }
        }

        .list-area.list-part {

          .list-content {
            height: 270px;
          }
        }

        .list-collection {

          .list-area:nth-of-type(1) {

            .list-content {
              border: none;

              .pic-area {
                padding: 30px 10px;
                position: relative;

                figure {
                  width: 266px;
                  height: 144px;
                  background-repeat: no-repeat;
                  background-size: cover;
                  border-radius: 5px;
                }

                figure:nth-of-type(1) {
                  background: url("#{$eben-resource-domain}/new_images/video_img.jpg");
                }

                figure:nth-of-type(2) {
                  background: url("#{$eben-resource-domain}/new_images/video_bg.png");
                  position: absolute;
                  top: 30px;
                  z-index: 2;
                  transition: all 0.25s ease-in-out;
                  opacity: 0.8;
                }

                figure:hover {
                  cursor: pointer;
                  opacity: 1;
                }
              }
            }
          }

          .list-area:nth-of-type(2) {

            .title {
              display: flex;
              justify-content: space-between;

              .more {
                color: $char-color;
                font-size: $font-normal-size;
                transition: all 0.25s ease-in-out;
              }

              .more::after {
                content: ' >>';
              }

              .more:hover {
                color: $char-hover-color;
                cursor: pointer;
              }
            }

            .list-content {
              border: none;
              padding: 30px 10px;

              .download-link {
                color: $char-color;
                padding: 10px;
                display: inline-block;
                border: 1px solid #{$char-color};
                transition: all 0.25s ease-in-out;
              }

              .download-link:hover {
                cursor: pointer;
                color: $char-hover-color;
                border-color: $char-hover-color;
              }

              .download-link:nth-of-type(1) {
                margin: 5px 5px 5px 0;
              }
              .download-link:nth-of-type(2),
              .download-link:nth-of-type(3) {
                margin: 5px;
              }

            }
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .customer-service {

      section.links-list {
        position: absolute;
        top: 40vw;
        left: 0;
        right: 0;
        padding-top: 0;

        .page-body {

          .content {
            justify-content: space-around;

            .link-service.hover-action {

              figure {

              }

              div {

                svg {
                  display: none;
                }

                span {

                }
              }
            }

            .pic-service {
              width: auto;
            }
          }
        }
      }

      section.info-list {

        .page-body {
          flex-direction: row;
          flex-wrap: wrap;

          .list-area.list-part {
            width: 50%;
          }

          .list-area.list-part:nth-of-type(1) {
            padding-right: 5px;
          }
          .list-area.list-part:nth-of-type(2) {
            padding-left: 5px;
          }

          .list-collection {
            width: 100%;
            display: flex;
            flex-direction: row;

            .list-area {
              width: 50%;
            }

            .list-area:nth-of-type(1) {
              padding-right: 5px;
            }
            .list-area:nth-of-type(2) {
              padding-left: 5px;
            }

          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .customer-service {

      section {
        width: $common-content-width-small;
      }

      section.links-list {
        top: 375px;

        .page-body {

          .content {
            justify-content: space-around;

            .link-service {
              width: auto;
            }

            .pic-service {

              figure {
                height: 63px;
                width: 63px;
                margin: 0 auto;
              }
            }
          }
        }
      }

      section.search-form {

        .page-body {

          .content {

            .el-select:nth-of-type(1) {
              width: 20%;
              padding: 10px 5px 10px 0;
            }

            .el-select:nth-of-type(2) {
              width: 20%;
              padding: 10px 0 10px 5px;
            }

            .keyword {
              width: 60%;
              padding: 10px 0 10px 10px;
            }
          }
        }
      }

      section.info-list {

        .page-body {
          justify-content: space-around;

          .list-area.list-part {
            width: 33.3%;
          }

          .list-area.list-part:nth-of-type(1) {
            padding-right: 20px;
          }

          .list-area.list-part:nth-of-type(2) {
            padding-left: 20px;
            padding-right: 20px;
          }

          .list-collection {
            width: 33.3%;
            padding-left: 20px;
            flex-direction: column;

            .list-area {
              width: 100%;
            }

            .list-area:nth-of-type(1) {
              padding: 0;

              .list-content {
                height: calc(270px - 43px);
              }
            }

            .list-area:nth-of-type(2) {
              padding-left: 0;

              .list-content {
                padding: 10px;
              }
            }

          }
        }
      }
    }
  }
</style>
