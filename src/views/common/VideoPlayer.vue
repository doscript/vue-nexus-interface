<template>
  <div class="video-player" id="video-player">
    <div class="close-btn">
      <el-button type="text" @click="closeVideoPlayer();"><icon class="icons" name="close"></icon></el-button>
    </div>
    <div class="content">
      <video controls preload width="100%" height="100%" :id="id">
        <source :src="url" type="video/mp4">
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: 'videoPlayer',
  props: ['id','url'],
  data () {
    return {

    }
  },

  components: {

  },

  computed: {

  },

  methods: {

    openVideoPlayer() {

      document.getElementsByClassName('video-player')[0].style.width = '100vw';
      document.getElementsByClassName('video-player')[0].style.height = '100vh';

      document.getElementById(this.id).play();
    },

    closeVideoPlayer() {

      document.getElementsByClassName('video-player')[0].style.width = '0';
      document.getElementsByClassName('video-player')[0].style.height = '0';

      document.getElementById(this.id).pause();

      // 传值给父组件
      // this.$emit('transferTrigger', 'off');
    },
  }
}
</script>

<style type="text/css" lang="scss" scope>
  @import './../../assets/scss/variables.scss';
  @import './../../assets/scss/mixins.scss';

  #app #video-player {
    width: 0;
    height: 0;
    overflow: hidden;
    @include transition-common(all, 0.5s, ease-in-out);
    background: $main-color;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include flex();
    @include flex-direction(column);
    @include justify-content();

    .content {
      padding: 0;
    }

    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      height: 50px;
      width: 50px;
      padding: 10px;

      button {
        width: 100%;
        height: 100%;
        padding: 0;
      }

      button:hover {
        opacity: 0.8;
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app #video-player {

    }
  }
</style>
