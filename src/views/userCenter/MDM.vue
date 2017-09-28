<template>
  <div class="mdm">
    <bread-title></bread-title>
    <h5>您当前共激活了 1台 E人E本</h5>
    <section class="page" v-for="item in devices" :key="item">
      <div class="page-body">
        <div class="device-info">
          <p>型号：{{ item.deviceType }}</p>
          <p>序列号：{{ item.deviceSN }}</p>
          <p>激活日期：{{ item.activeTime }}</p>
        </div>
        <div class="mdm-security">
          
        </div>
        <div class="mdm-self">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils, $auth } from '@helper'
  import BreadTitle from './BreadTitle'

  export default {
    name: 'MDM',

    data () {
      return {
        loginInfo: $auth.getLoginInfo(),
        devices: [
          { deviceSN: '123123', deviceType: 'EBEN80008', activeTime: '2017-09-01', support: true, },
        ],
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

    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .mdm {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {
        padding: 5px 0;

        p {
          line-height: $common-line-height;
          margin: 0;
          padding: 5px 0;
        }

      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .mdm {

      section.page {

        .page-body {

        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .mdm {

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
