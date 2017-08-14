<template>
  <section class="history-devices">
    <div class="page-body">
      <div class="history-devices-content">
        <span class="history-title">历史型号</span>
        <div class="history-device" v-for="item in historyDevices" :key="item">
          <a :href="item.path" target="_blank" class="device-link">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { EbenResourceDomain } from '../../constants/index'

  export default {
    name: 'history-devices',

    data () {
      return {
        historyDevices: [
          {
            title: 'T8',
            path: 'http://www.eben.cn/product/t8'
          },
          {
            title: 'A2',
            path: 'http://www.eben.cn/product/seriesa'
          },
          {
            title: 'T7',
            path: 'http://www.eben.cn/productt7'
          },
          {
            title: 'T6',
            path: 'http://www.eben.cn/productt6'
          },
          {
            title: 'T5',
            path: 'http://www.eben.cn/productt5'
          },
          {
            title: 'T4',
            path: 'http://www1.eben.cn/product'
          },
          {
            title: 'T3',
            path: 'http://www1.eben.cn/product/t3'
          },
          {
            title: 'T2',
            path: 'http://www1.eben.cn/product/t2'
          },
          {
            title: 'T1',
            path: 'http://www1.eben.cn/product/t1'
          },
        ]
      }
    },

    components: {

    },

    computed: {
    },

    methods: {

    }
  }
</script>

<style type="text/css" lang="scss">
  @import './../../assets/scss/variables.scss';

  #app .history-devices {

    .page-body {
      max-width: $common-content-width-xxs;
      margin: 0 auto;
      padding: 30px 0 0;

      .history-devices-content {
        margin: 0;
        display: flex;
        max-width: 320px;
        justify-content: space-between;

        .history-device {

          .device-link {
            color: $char-color;
          }

          .device-link:hover {
            color: $char-hover-color;
          }
        }

        .history-title {
          color: $unimportant-char-color;
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .history-devices {

    }

  }

  @media (min-width: #{$responsive-width-small}) {
    #app .history-devices {

      .page-body {
        max-width: $common-content-width-small;
      }
    }

  }
</style>
