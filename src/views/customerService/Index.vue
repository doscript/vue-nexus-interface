<template>
  <div class="customer-service">

    <section class="pic-banner">
      <div class="page-body">
        <article class="">
          <figure :style="picBanner.style"></figure>
        </article>
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
            <span class="icon-point"></span>公告区
          </div>
          <div class="list-content">

          </div>
          <div class="more">

          </div>
        </div>
        <div class="list-area list-part">
          <div class="title">
            <span class="icon-point"></span>常见热门问题
          </div>
          <div class="list-content">

          </div>
          <div class="more">

          </div>
        </div>
        <div class="list-part">
          <div class="list-area">
            <div class="title">
              <span class="icon-point"></span>视频说明书
            </div>
            <div class="list-content">

            </div>
          </div>
          <div class="list-area">
            <div class="title">
              <span class="icon-point"></span>资源下载
            </div>
            <div class="list-content">

            </div>
            <div class="more">

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
        this.$router.push(item.path);
      },

      search() {
        this.searchLoading = true;
        console.log(this.searchParams);
        const sthis = this;
        setTimeout(function () {
          sthis.searchLoading = false;
        }, 2000);
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

        .list-area {

          .title {
            position: relative;
            padding-left: 10px;
            padding-bottom: 15px;
            font-size: 18px;
            line-height: 1.5em;
            color: #AE8646;
            border-bottom: 1px solid #444040;

            .icon-point {
              background: url("#{$eben-resource-domain}/new_images/icon.png") -120px -120px no-repeat;
              margin-right: 15px;
              width: 12px;
              height: 12px;
              display: inline-block;
            }
          }

          .list-content {
            height: 270px;
          }
        }

        .list-part {

        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .customer-service {

    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .customer-service {

      section {
        width: $common-content-width-small;
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

          .list-part {
            width: 33.3%;
            padding: 40px;
          }

          .list-part:nth-of-type(1) {
            padding-left: 0;
          }

          .list-part:nth-of-type(3) {
            padding-right: 0;
          }
        }
      }
    }
  }
</style>
