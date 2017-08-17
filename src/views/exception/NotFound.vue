<template>
  <div class="page-error">
    <div class="box">
      <div class="pic">
        <img src="../../assets/images/404.png" alt=""></div>
      <div class="info">
        <h1>404</h1>
        <h4>返回首页</h4>
        <el-button type="primary" @click.native="back">抱歉，该页面不存在</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'not-found',
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
  @import "../../assets/scss/variables.scss";
  #app .page-error {
    color: $unimportant-char-color;
    text-align: center;
    height: calc(100vh - #{$header-height});
    display: flex;
    flex-direction: column;
    justify-content: center;

    .box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

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
