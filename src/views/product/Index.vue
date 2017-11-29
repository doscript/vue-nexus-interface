<template>
  <div class="product">
    <section class="series-devices" v-if="seriesDevices.length > 0" id="series-devices">
      <div class="series-devices-body">
        <span>系列产品：</span>
        <a href="javascript:void(0);" v-for="item in seriesDevices" :key="item" @click="onClickItem(item)">{{ item.name }}</a>
      </div>
    </section>
    <section class="page" v-for="item in sections" :key="item">
      <div class="page-body">
        <figure :style="item.style"></figure>
      </div>
    </section>

    <not-found v-if="sections == [] || sections.length == 0"></not-found>

    <history-devices></history-devices>

  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import HistoryDevices from '../common/HistoryDevices'
  import NotFound from '../exception/NotFound'
  import { $utils } from '@helper'

  export default{
    name: 'Product',

    data () {
      return {
        sections: [],
        seriesDevices: [],
      }
    },

    computed: {},

    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.initSections();
    },

    mounted () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
      })

    },

    props: {

    },

    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'initSections'
    },

    components: {
      HistoryDevices,
      NotFound
    },

    methods: {

      onScroll() {

        let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        let sdItem = document.getElementById('series-devices');

        if (!sdItem || sdItem == null) return;

        if (scrolled > 0) {
          this.$utils.addClass(sdItem, 'fixed-top');
        } else {
          this.$utils.removeClass(sdItem, 'fixed-top');
        }
      },

      onClickItem(item) {

        if (item.pathType === '_blank') {
          window.location.href = item.path;
          return;
        }
        this.$router.push(item.path);
      },

      initSections() {

        this.seriesDevices = [];

        this.$utils.scrollTop();

        // console.log('The mark of this page is: ' + this.$route.query.mark);

        let t9series = [
          { name: 'T9', pathType: '', path: '/product/eben?mark=T9' },
          { name: 'T9+', pathType: '', path: '/product/eben?mark=T9honor' },
          { name: 'T9学习中国', pathType: '', path: '/product/eben?mark=T9Study' },
        ];

        switch (this.$route.query.mark) {
          case 'T10':
            document.title = 'T10 - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_01.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_02.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_03.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_04.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_05.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_06.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_07.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_08.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_09.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_10.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t10/t10_bg_11.png")', } },
            ];
            break;
          case 'T9S':
            document.title = 'T9S - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_01.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_02.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_03.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_04.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_05.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_06.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_07.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_08.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9s/t9s_bg_09.png")', } },
            ];
            break;
          case 'T9':
            document.title = 'T9 - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_01.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_02.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_03.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_04.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_05.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_06.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_07.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_08.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_09.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_10.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_11.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_12.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_13.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_14.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_15.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_16.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_17.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9/t9_bg_18.jpg")', } },
            ];
            this.seriesDevices = t9series;
            break;
          case 'T9honor':
            document.title = 'T9尊享版 - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_01.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_02.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_03.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_04.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_05.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_06.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_07.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_08.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_09.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_10.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_11.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_12.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_13.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_14.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_15.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_16.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_17.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9honor/t9_honor_bg_18.jpg")', } },
            ];
            this.seriesDevices = t9series;
            break;
          case 'T9Study':
            document.title = 'T9学习中国 - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_01.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_02.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_03.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_04.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_05.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_06.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_07.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_08.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_09.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_10.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t9study/t9study_bg_11.jpg")', } },
            ];
            this.seriesDevices = t9series;
            break;
          case 'T8S':
            document.title = 'T8S - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_01.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_02.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_03.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_04.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_05.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_06.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_07.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_08.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_09.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_10.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_11.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_12.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_13.jpg")', } },
            ];
            break;
          case 'T7S':
            document.title = 'T7S - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_01.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_02.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_03.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_04.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_05.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_06.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_07.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_08.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_09.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_10.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_11.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_12.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/t8s/t8s_bg_13.jpg")', } },
            ];
            break;
          case 'K9':
            document.title = 'K9 - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_01.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_02.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_03.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_04.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_05.png")', } },
//              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_06.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k9/k9_bg_07.png")', } },
            ];
            break;
          case 'L2':
            document.title = 'L2 - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_01.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_02.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_03.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_04.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_05.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_06.png")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/l2/l2_bg_07.png")', } },
            ];
            break;
          case 'K8S':
            document.title = 'K8S - 壹人壹本';
            this.sections = [
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_01.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_02.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_03.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_04.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_05.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_06.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_07.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_08.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_09.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_10.jpg")', } },
              { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/products/k8s/k8s_bg_1.jpg")', } },
            ];
            break;
          default:
            document.title = '壹本产品 - 壹人壹本';
            this.sections = [];
            break;
        }
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

  #app .product {

    section.series-devices {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: rgba(56, 56, 56, 0.7);
      @include transition-common(top, 0.5s);
      position: fixed;
      top: $header-height;

      .series-devices-body {
        padding: 0 $common-padding;
        margin: 0 auto;

        span {

        }

        a {
          color: $char-color;
          margin: 0 8px;
        }

        a:hover {
          color: $char-hover-color;
        }
      }
    }

    section.series-devices.fixed-top {
      top: 0;
    }

    section.page {
      width: 100%;
      height: 60vw;
      max-height: 650px;
      overflow: hidden;

      .page-body {
        height: inherit;
        max-height: inherit;

        figure {
          width: 100%;
          height: inherit;
          max-height: inherit;
          @include background-image-common("", cover);
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .product {

      section.series-devices {

        .series-devices-body {
          width: $common-content-width-small;
        }
      }

      section.page {

        .page-body {

          figure {

          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .product {

      section.page {
        height: $product-section-height;

        .page-body {

          figure {
            background-size: cover;
          }
        }
      }
    }
  }
</style>
