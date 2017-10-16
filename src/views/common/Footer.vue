<template>
  <footer class="footer">
    <div class="footer-content">
      <hr class="eben-divider">
      <div class="copyright">
        <p><span>版权所有：2009-2017© 北京壹人壹本信息科技有限公司</span></p>
        <p><span>京ICP证120259号</span></p>
        <p><span>京ICP备09102141号</span></p>
        <p><span>公安备案号：1101050193</span></p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footer',

  data () {
    return {

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
  @import './../../assets/scss/mixins.scss';

  #app .footer {
    min-height: $footer-height;

    .footer-content {
      padding: 15px 0;
      max-width: $common-content-width-xxs;
      margin: 0 auto;

      .eben-divider {
        border-top: 1px solid #{$divider-color};
        margin: 0;

      }

      .copyright {
        padding-top: 15px;
        @include flex();
        @include flex-direction(column);

        p {
          margin: 0;

          span {
            color: $unimportant-char-color;
            font-size: 12px;
            @include transition-common();
            line-height: $common-line-height;
          }

          span:hover {
            color: $unimportant-char-color-hover;
            cursor: default;
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .footer {

      .footer-content {

        .copyright {
          @include flex(wrap);
          @include flex-direction(row);

          p {
            text-align: center;
          }

          p:nth-of-type(1) {
            width: 100%;
          }

          p:nth-of-type(2) {
            width: 50%;
            text-align: right;
            padding-right: 5px;
          }

          p:nth-of-type(3) {
            width: 50%;
            text-align: left;
            padding-left: 5px;
          }

          p:nth-of-type(4) {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .footer {

      .footer-content {
        max-width: $common-content-width-small;
      }
    }

  }
</style>
