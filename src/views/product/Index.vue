<template>
  <div class="product">
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
      }
    },

    computed: {},

    created () {

      this.$utils.scrollTop();

      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      // document.title = this.$route.query.mark + ' - 壹人壹本';
      this.initSections();
    },

    mounted () {

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

      initSections() {
        // console.log('The mark of this page is: ' + this.$route.query.mark);
        document.title = this.$route.query.mark + ' - 壹人壹本';
        switch (this.$route.query.mark) {
          case 'T10':
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
            break;
          case 'T9honor':
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
            break;
          case 'T9Study':
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
            break;
          case 'T8S':
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
