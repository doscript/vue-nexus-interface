<template>
  <div class="page-error">
    <div class="box">
      <div class="pic">
        <img src="../../assets/images/404.png" alt=""></div>
      <div class="info">
        <h1>404</h1>
        <h4>抱歉，该页面不存在</h4>
        <el-button type="primary" @click.native="back">返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'not-found',
  methods: {
    back () {
      this.$router.push('/index')
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

  #app .page-error {
    color: $unimportant-char-color;
    text-align: center;
    height: calc(100vh - #{$header-height});
    @include flex();
    @include flex-direction(column);
    @include justify-content();

    .box {
      @include flex(wrap);
      @include flex-direction();
      @include justify-content();

      .pic {
        padding: $common-padding;

        img {
          width: 157px;
        }
      }

      .info{
        padding: $common-padding;

        h1 {
          font-size: 64px;
        }
        h4 {
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
    }

  }
</style>
