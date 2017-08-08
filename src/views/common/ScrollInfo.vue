<template>
  <div class="scroll-info">
    <div class="scroll-info-content">
      <marquee behavior="scroll" scrollamount="3" hspace="0" >
        <!--<i class="fa fa-bell-o"></i>-->
        <icon class="icons" name="audio"></icon>
        &nbsp;声明：我公司从未与任何第三方公司合作生产过手机产品及其他电子产品，如您接到有关与E人E本合作推出手机产品或其他电子产品的销售电话，均为不实信息，请警惕上当！E人E本所有产品信息请以我公司官方网站发布为准！
      </marquee>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scrollInfo',

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

  #app .scroll-info {
    position: absolute;
    top: $header-height;
    background-color: rgba(0,0,0,0.4);
    color: $char-color;
    height: 30px;
    width: 100%;
    overflow: hidden;
    z-index: 5;

    .scroll-info-content {
      height: 100%;
      width: $common-content-width-xxs;
      margin: 0 auto;
      white-space: nowrap;
      overflow: hidden;

      marquee {
        line-height: 30px;
        font-size: 13px;

        .icon {
          color: $char-color;
          width: 14px;
          height: 14px;
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-small}) {
    #app .scroll-info {

      .scroll-info-content {
        max-width: $common-content-width-small;
      }
    }

  }
</style>
