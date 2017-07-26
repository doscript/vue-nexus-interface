<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="copyright">
        <p>版权所有：2009-2015© 北京壹人壹本信息科技有限公司</p>
        <p>京ICP证120259号</p>
        <p>京ICP备09102141号</p>
        <p>公安备案号：1101050193</p>
      </div>
    </div>
  </footer>
</template>
<script type='text/javascript'>(function(){document.getElementById('___szfw_logo___').oncontextmenu = function(){return false;}})();</script>

<script language="javascript">
  var pspdomain	=	'<{$passportdomain}>';
</script>
<script>
import Vue from 'vue'

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

  padding: 15px;
  max-width: $common-content-width;
  margin: 0 auto;

  .footer-content {
    border-top: 1px solid #aaa;
    padding-top: 15px;

    .copyright {

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

@media (max-width: #{$responsive-width-small}) {
  #app .footer {

  }

}
</style>
