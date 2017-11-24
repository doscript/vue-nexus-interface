<template>
  <section class="history-devices">
    <div class="page-body">
      <div class="history-devices-content">
        <span class="history-title">历史型号</span>
        <div class="history-device" v-for="item in historyDevices" :key="item">
          <a v-if="item.pathType == '_blank'" :href="item.path" :target="item.pathType" class="device-link">{{ item.title }}</a>
          <a v-else href="javascript:void(0);" @click="onClickItem(item)" class="device-link">{{ item.title }}</a>
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
            title: 'T9',
            path: '/product/eben?mark=T9',
            pathType: '',
          },
          {
            title: 'T8',
            path: 'http://www.eben.cn/product/t8',
            pathType: '_blank',
          },
          {
            title: 'A2',
            path: 'http://www.eben.cn/product/seriesa',
            pathType: '_blank',
          },
          {
            title: 'T7',
            path: 'http://www.eben.cn/productt7',
            pathType: '_blank',
          },
          {
            title: 'T6',
            path: 'http://www.eben.cn/productt6',
            pathType: '_blank',
          },
          {
            title: 'T5',
            path: 'http://www.eben.cn/productt5',
            pathType: '_blank',
          },
          {
            title: 'T4',
            path: 'http://www1.eben.cn/product',
            pathType: '_blank',
          },
          {
            title: 'T3',
            path: 'http://www1.eben.cn/product/t3',
            pathType: '_blank',
          },
          {
            title: 'T2',
            path: 'http://www1.eben.cn/product/t2',
            pathType: '_blank',
          },
          {
            title: 'T1',
            path: 'http://www1.eben.cn/product/t1',
            pathType: '_blank',
          },
        ]
      }
    },

    components: {

    },

    computed: {
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
    }
  }
</script>

<style type="text/css" lang="scss">
  @import './../../assets/scss/variables.scss';
  @import './../../assets/scss/mixins.scss';

  #app .history-devices {

    .page-body {
      max-width: $common-content-width-xxs;
      margin: 0 auto;
      padding: 30px 0 0;

      .history-devices-content {
        margin: 0;
        max-width: 320px;
        @include flex();
        @include flex-direction();
        @include justify-content(space-between);

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
