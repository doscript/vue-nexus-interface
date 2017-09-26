<template>
  <section class="bread-title">
    <div class="page-body">
      <h5 class="page-title">{{ pageTitle }}</h5>
      <h5 class="nickname">{{ loginInfo.nickname }}</h5>
    </div>
  </section>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils, $auth } from '@helper'

  export default {
    name: 'BreadTitle',

    data () {
      return {
        loginInfo: $auth.getLoginInfo(),
        pageTitle: '个人中心'
      }
    },

    computed: {},

    created () {

      this.getPageTitle();
    },

    mounted () {

    },

    props: {

    },

    watch: {

    },

    components: {

    },

    methods: {

      getPageTitle () {
        let title = $utils.getStorage('page-title');
        if (title.zh) {
          let titleArr = String(title.zh).split('-');
          this.pageTitle = titleArr[0].replace(' ', '');
        } else {
          this.pageTitle = title;
        }
      },

    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .bread-title {

    .page-body {
      border-bottom: 1px solid #{$divider-color};
      padding: 15px 0;
      display: flex;
      justify-content: space-between;

      .nickname {
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }


  @media (min-width: #{$responsive-width-xs}) {
    #app .bread-title {

      .page-body {

      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .bread-title {
      width: $common-content-width-small;

      .page-body {

      }
    }
  }
</style>
