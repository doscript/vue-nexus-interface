<template>
  <div class="article">
    <section class="page">
      <div class="page-body">
        <div class="eben-wrap">
          <div class="title">
            <h3 v-html="article.title">{{ article.title }}</h3>
          </div>
          <div class="remark">
            <p v-if="article.author && article.author != ''">作者：{{ article.author }}</p>
            <p v-if="article.time && article.time != ''">发布时间：{{ article.time }}</p>
          </div>
          <div class="content" v-html="article.content">
            {{ article.content }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils } from '@helper'

  export default {
    name: 'Article',

    data () {
      return {
        query: this.$route.query,
        article: {
          title: '',
          author: '',
          time: '',
          content: '',
        },
      }
    },

    computed: {},

    created () {

      this.$utils.scrollTop();

      this.initArticle();
    },

    mounted () {

    },

    props: {

    },

    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'initArticle'

    },

    components: {

    },

    methods: {

      initArticle() {
        console.log(this.query);
        if (this.query.type == 'customerService') {
          if (this.query.id == '1') {
            this.article = {
              title: '<span style="color: yellow;">测试用的测试用的测试用的</span>',
              content: '<p style="color: #1461ca;"><strong style="color: #ffffff;">一、本站服务条款的确认和接纳</strong><br><br><img src="http://img1.ereneben.com/new_images/focus_2.jpg" style="width: 100%; height: auto;"><br><br>&nbsp;&nbsp;&nbsp;&nbsp;本站的各项电子服务的所有权和运作权归本站。每项电子服务将按照该项服务发布的服务协议条款和操作程序执行，用户可以选择需要的电子服务并按该项服务的要求签署协议，签署本服务协议并不代表已经签署了各项电子服务的协议，同时也并不代表必然享受本站的各项电子服务。用户必须完全同意本服务协议的条款并完成注册程 序，才能成为本站的正式用户。</p><br><table border="0" width="400" cellspacing="0" cellpadding="0" align="center"><tbody><tr> <td align="left">地址：北京市朝阳区建国路91号金地中心A座29层</td></tr><tr><td align="left">邮编：100022</td></tr> <tr><td align="left">电话：010-57575050</td></tr><tr><td align="left">传真：010-57575151</td></tr></tbody></table><br><p><a style="color: #aaa;" href="http://www.test.eben.cn/about/detail_presetApp">点击查看：预置应用列表</a></p>',
              time: '1970-01-01',
              author: '壹人壹本'
            }
          } else {
            this.article = {
              title: '<span style="color: #00847c;">测试不带作者和时间的文章</span>',
              content: '<p>Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。</p><video controls="controls" preload="preload" width="100%" height="100%" style="max-width: 600px;"><source src="http://img1.ereneben.com/video/userfinal.mp4" type="video/mp4"></video>',
            }
          }
        }
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

  #app .article {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {

        .eben-wrap {
          padding: #{$common-padding} 0;

          .title {
            padding: #{$common-padding} 0;
            text-align: center;
          }

          .remark {
            text-align: center;

            p {
              margin: 0;
              padding: 15px 0;
            }
          }

          .content {
            padding: #{$common-padding} 0;
            font-size: $font-medium;
            overflow-x: auto;

            p {
              line-height: 24px;
              margin: 0;
            }

            video {
              border: 3px solid #fafafa;
              border-radius: 3px;
              margin: #{$common-margin} auto;
              @include flex();
              @include justify-content();
            }
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .article {

      section.page {

        .page-body {

        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .article {

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
