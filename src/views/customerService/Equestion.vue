<template>
  <div class="e-question">
    <section class="page" v-for="item in sections" :key="item">
      <div class="page-body">
        <figure :style="item.style"></figure>
      </div>
    </section>

    <not-found v-if="sections == [] || sections.length == 0"></not-found>

  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import NotFound from '../exception/NotFound'
  import { $utils } from '@helper'

  export default{
    name: 'EQuestion',

    data () {
      return {
        sections: [],
      }
    },

    computed: {},

    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.initSections();

      this.$utils.scrollTop();
    },

    mounted () {

    },

    props: {

    },

    watch: {
      // 如果路由有变化，会再次执行该方法 '$route': 'initSections'
    },

    components: {
      NotFound
    },

    methods: {

      initSections() {
        this.sections = [
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/question_pic.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q1.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q2.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q3.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q4.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q5.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q6.png")', } },
          { style: { backgroundImage: 'url("' + EbenResourceDomain + '/new_images/q7.png")', } },
        ];
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .e-question {

    section.page {
      width: 100%;
      height: 50vw;
      max-height: 440px;
      overflow: hidden;
      margin: 0 auto;

      .page-body {
        height: 100%;

        figure {
          width: 100%;
          height: inherit;
          background: center no-repeat;
          background-size: cover;
        }
      }
    }

    section.page:nth-of-type(8) {
      height: 28vw;
      max-height: 260px;
    }
  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .e-question {

      section.page {
        width: $common-content-width-xxs;

        .page-body {

          figure {

          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .e-question {

      section.page {
        width: $common-content-width-small;

        .page-body {

          figure {

          }
        }
      }
    }
  }
</style>
