<template>
  <div class="article-list">
    <section class="page">
      <div class="page-body">
        <div class="list-content">
          <div class="list-article" v-for="item in articleList" :key="item">
            <p class="title"><span @click="onClickItem(item)">{{ item.title }}</span></p>
            <p class="description">{{ item.description }}...</p>
          </div>
        </div>
        <div class="list-pages">
          <el-pagination
            small
            layout="prev, pager, next"
            :total="1">
          </el-pagination>
        </div>
      </div>
    </section>

    <not-found v-if="articleList == [] || articleList.length == 0"></not-found>

  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import NotFound from '../exception/NotFound'
  import { $utils } from '@helper'

  export default {
    name: 'ArticleList',

    data () {
      return {
        query: this.$route.query,
        articleList: []
      }
    },

    computed: {},

    created () {

      this.$utils.scrollTop();

      this.initArticleList();
    },

    mounted () {

    },

    props: {

    },

    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'initArticleList'
    },

    components: {
      NotFound,
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

      initArticleList() {
        console.log(this.query);
        if (this.query.type == 'customerService') {
          this.articleList = [
            { id: '1', title: '测试用的链接', path: '/customerService/article', pathType: '', query: { id: '1', type: 'customerService' }, description: '点击前往详情测试页面' },
            { id: '2', title: '测试用的链接-不带作者和时间', path: '/customerService/article', pathType: '', query: { id: '2', type: 'customerService' }, description: '点击前往详情测试页面' },
            { id: '612', title: '预置应用公示', path: EbenDomain + '/about/detail/612/introduction', pathType: '_blank', description: '声明移动智能终端预置应用软件是指由生产企业自行或与互联网信息服务提供者合作在移动智能终端出厂前安装的应用软件。壹人壹本公司现将移动智能终端中预置应用软件进行公示：1、本次公示的为首批发货的量产版本，设' },
            { id: '609', title: '关于对E本商城八大类应用下架通知', path: EbenDomain + '/about/detail/609/introduction', pathType: '_blank', description: '关于对E本商城八大类应用下架通知亲爱的E本用户：大家好，鉴于近期中央网信办和公安部严查各应用商店的内容，网信办提出要求在2017年6月1日新规定出台后上架的应用都要开发者实名认证；公安部提出以下八类应' },
            { id: '603', title: '2016年春节售后服务网点放假安排的通知', path: EbenDomain + '/about/detail/603/introduction', pathType: '_blank', description: '尊敬的E人E本用户：为确保用户服务质量，2016年春节期间全国售后服务机构的放假工作安排如下：2月7号-2月9号全体服务机构休息；2月10-2月14日服务机构值班，保证正常的接单，请用户上门前先致电服' },
            { id: '602', title: '售后服务站点新增通知', path: EbenDomain + '/about/detail/602/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息新增，以下为具体信息：江苏省常熟市新增维修站信息：城市服务站点及地址联系方式常熟市江苏省苏州市常熟市衡山路信一银座3060512-52871860更多售后维修信' },
            { id: '586', title: '售后服务站点电话变更通知', path: EbenDomain + '/about/detail/586/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息变更，以下为具体信息：内蒙古包头电话变更：原信息：城市服务站点及地址联系方式包头包头市青山区文化路时代财富广场E座10080472-3332666现变更为：城市' },
            { id: '584', title: '售后服务站点撤站及地址变更通知', path: EbenDomain + '/about/detail/584/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息变更，以下为具体信息：1、内蒙古呼和浩特撤站信息：城市服务站点及地址联系方式呼和浩特新城区艺术厅北街百灵小区1号楼2单元6号0471-49176002、内蒙古呼' },
            { id: '578', title: '售后服务站点新增通知', path: EbenDomain + '/about/detail/578/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息新增，以下为具体信息：内蒙古呼和浩特市新增维修站信息：城市服务站点及地址联系方式呼和浩特呼和浩特市新城区中山东路8号波士名人国际B座15210471-49347' },
            { id: '576', title: '售后服务站点电话变更通知', path: EbenDomain + '/about/detail/576/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息变更，以下为具体信息：辽宁沈阳电话变更：原信息：城市服务站点及地址联系方式沈阳沈阳市和平区文体西路108号8门024-82562955现变更为：城市服务站点地址' },
            { id: '572', title: '售后服务站点地址变更通知', path: EbenDomain + '/about/detail/572/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息变更，以下为具体信息：地址信息变更：原信息：城市服务站点地址联系方式贵阳贵阳市公园西路西南电脑城D260851-85555320白城吉林省白城市镇赉县镇赉镇华程' },
            { id: '559', title: '售后服务站点变更通知', path: EbenDomain + '/about/detail/559/introduction', pathType: '_blank', description: '尊敬的E人E本用户：E本售后服务站点信息变更，以下为具体信息：1、辽宁沈阳地址变更：原信息：城市服务站点及地址联系方式沈阳沈阳市和平区三好街100号华强电子世界一楼1F-B81024-23960201' },
          ];
        }
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .article-list {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;

      .page-body {

        .list-content {

          .list-article {
            padding: 15px 0;
            border-bottom: 1px dashed;

            p {
              margin: 0;
            }

            .title {
              padding: #{$common-padding} 0;

              span {
                color: $title-color;
                font-size: $font-large;
                font-weight: 600;
                transition: all 0.25s ease-in-out;
              }

              span:hover {
                cursor: pointer;
                color: $title-hover-color;
              }
            }

            .description {
              text-indent: 2em;
              line-height: 24px;
            }
          }

          .list-article:last-of-type {
            border-bottom: none;
          }
        }

        .list-pages {
          display: flex;
          justify-content: center;
          padding: 15px 0;

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

  @media (min-width: #{$responsive-width-xs}) {
    #app .article-list {

      section {

        .page-body {
          padding: $common-padding;

        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .article-list {

      section {
        width: $common-content-width-small;

        .page-body {

        }
      }
    }
  }
</style>
