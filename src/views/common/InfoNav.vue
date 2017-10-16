<template>
  <section class="info-nav">
    <div class="info-nav-content">
      <div class="info-nav-single" v-for="item in infoList" :key="item">
        <a class="icon-pointer" @click="onClickItem(item)">
          <div class="eben-icon eben-icon-statement" :style="item.style"></div>
          <p><icon class="icons" :name="item.icon"></icon><span>{{ item.title }}</span></p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { EbenResourceDomain, EbenDomain } from '../../constants/index'

export default {
  name: 'info-nav',

  data () {
    return {
      infoList: [
        {
          icon: 'wrench',
          title: '客服网点',
          path: '/customer-service/network',
          pathType: '',
          style: {
            background: 'url("' + EbenResourceDomain + '/new_images/icon.png") no-repeat',
            backgroundPosition: '0 -100px'
          }
        },
        {
          icon: 'telephone',
          title: '联系我们',
          path: '',
          pathType: '',
          style: {
            background: 'url("' + EbenResourceDomain + '/new_images/icon.png") no-repeat',
            backgroundPosition: '0 -220px'
          }
        },
        {
          icon: 'keys',
          title: '渠道招商',
          path: '',
          pathType: '',
          style: {
            background: 'url("' + EbenResourceDomain + '/new_images/icon-business.png") no-repeat',
          }
        },
        {
          icon: 'email',
          title: '加入我们',
          path: '',
          pathType: '',
          style: {
            background: 'url("' + EbenResourceDomain + '/new_images/icon.png") no-repeat',
            backgroundPosition: '0 -280px'
          }
        },
        {
          icon: 'message',
          title: '隐私声明',
          path: '',
          pathType: '',
          style: {
            background: 'url("' + EbenResourceDomain + '/new_images/icon.png") no-repeat',
            backgroundPosition: '0 -340px'
          }
        },
      ],
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

  #app .info-nav {
    min-height: 100px;
    max-width: $common-content-width-xxs;
    margin: 0 auto;

    .info-nav-content {
      @include flex();
      @include flex-direction(column);
      @include justify-content(space-between);
      padding: 15px 15px 0;

      .info-nav-single {
        position: relative;
        padding: 15px;

        a {
          height: auto;
          width: 100%;
          font-size: 15px;
          line-height: 1.5em;
          color: $char-hover-color;
          text-align: center;
          display: block;
          float: left;
          @include transition-common();

          .eben-icon {
            display: none;
          }

          .icons {
            display: inline-block;
          }

          p {
            margin: 0;

            span {
              padding-left: 5px;
            }
          }
        }

        a:hover {
          color: $char-color;
          cursor: pointer;
        }
      }

    }
  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .info-nav {

      .info-nav-content {
        padding: 30px 15px;
        @include flex(nowrap);
        @include flex-direction(row);

        .info-nav-single {

          a {
            width: 80px;
            height: 90px;

            .eben-icon {
              display: block;
              @include background-image-common("#{$eben-resource-domain}/new_images/icon.png", contain, 0 -40px);
              margin: 0 auto 12px;
              width: 51px;
              height: 51px;
            }

            .icons {
              display: none;
              color: inherit;
            }

          }

        }
      }
    }

  }

  @media (min-width: #{$responsive-width-small}) {
    #app .info-nav {
      max-width: $common-content-width-small;
    }

  }
</style>
