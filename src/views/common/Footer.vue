<template>
  <footer class="footer">
    <div class="footer-content">
      <hr class="eben-divider">
      <div class="copyright">
        <p>版权所有：2009-2015© 北京壹人壹本信息科技有限公司</p>
        <p>京ICP证120259号</p>
        <p>京ICP备09102141号</p>
        <p>公安备案号：1101050193</p>
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
        border-top: 1px solid $unimportant-char-color;
        margin: 0;

      }

      .copyright {
        padding-top: 15px;

        p {
          color: $unimportant-char-color;
          font-size: 12px;
          transition: all 0.25s ease-in-out;
        }

        p:hover {
          color: $unimportant-char-color-hover;
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
