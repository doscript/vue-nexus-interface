<template>
  <div class="page-index">
    <header-component></header-component>
    <div class="frame-content">
      <side-nav></side-nav>
      <main @click="onHideMenuClick">
        <scroll-info></scroll-info>
        <article class="main-carousel">
          <el-carousel trigger="click" indicator-position="" :interval="5000" :autoplay="true" arrow="always">
            <el-carousel-item v-for="item in carouselArray" :key="item">
              <div class="img-title">
                <h2>{{ item.titleSmall }}</h2>
                <h1>{{ item.titleLarge }}</h1>
              </div>
              <figure class="bg-img" :style="item.figureStyle" @click="onClickItem(item)"></figure>
            </el-carousel-item>
          </el-carousel>
        </article>
        <section class="main-card">
          <div class="page-body">
            <div class="card-part" v-for="item in cardArray" :key="item">
              <div class="card-inner">
                <figure class="card-image" :style="item.figureStyle" @click="onClickItem(item)"></figure>
              </div>
            </div>
          </div>
        </section>

        <info-nav></info-nav>

      </main>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
import SideNav from './common/SideNav'
import InfoNav from './common/InfoNav'
import HeaderComponent from './common/Header'
import FooterComponent from './common/Footer'
import ScrollInfo from './common/ScrollInfo'

export default{
  name: 'Index',

  props: {
  },

  data () {
    return {
      carouselArray: [
        {
          titleSmall: '',
          titleLarge: '',
          figureStyle: {
            backgroundImage: 'url("http://img1.ereneben.com/new_images/focus_1.jpg")'
          },
          path: '/product/eben?mark=T10',
        },
        {
          titleSmall: '',
          titleLarge: '',
          figureStyle: {
            backgroundImage: 'url("http://img1.ereneben.com/new_images/focus_2.jpg")'
          },
          path: '/product/eben?mark=T9S',
        },
        {
          titleSmall: '',
          titleLarge: '',
          figureStyle: {
            backgroundImage: 'url("http://img1.ereneben.com/new_images/focus_3.jpg")'
          },
          path: '/product/eben?mark=K9',
        },
      ],
      cardArray: [
        {
          titleSmall: '',
          titleLarge: '',
          figureStyle: {
            backgroundImage: 'url("http://img1.ereneben.com/new_images/p1.jpg")'
          },
          path: '/product/eben?mark=T9S',
        },
        {
          titleSmall: '',
          titleLarge: '',
          figureStyle: {
            backgroundImage: 'url("http://img1.ereneben.com/new_images/p2.jpg")'
          },
          path: '/product/eben?mark=T10',
        },
        {
          titleSmall: '',
          titleLarge: '',
          figureStyle: {
            backgroundImage: 'url("http://img1.ereneben.com/new_images/p3.jpg")'
          },
          path: '/product/solution',
        },
      ],
    }
  },

  created () {
  },

  components: {
    SideNav,
    HeaderComponent,
    FooterComponent,
    InfoNav,
    ScrollInfo
  },

  methods: {
    onHideMenuClick () {
      document.getElementById('app').className = ''
    },

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

<style lang="scss">
@import './../assets/scss/variables.scss';
@import './../assets/scss/mixins.scss';
#app {
  height: auto;

  .page-index {
    height: 100%;
    width: 100%;
    @include flex();
    @include flex-direction(column);
  }

  .frame-content {
    flex: 1;
    @include flex();
    width: 100%;
    /*margin-top: $header-height;*/
  }

  main {
    flex: 1;

    .main-carousel {
      height: 45vw;
      max-height: calc(100vh - #{$header-height});
    }

    .el-carousel {
      height: 100%;

      .el-carousel__container {
        height: 100%;

        figure {
          @include background-image-common("", auto 100%);
          width: 100%;
          height: 100%;
          /*left: 0;*/
          /*position: absolute;*/
          /*min-height: 900px;*/
        }

        figure:hover {
          cursor: pointer;
        }

        /*div:nth-of-type(1) figure{*/
          /*background-image: url("https://images.apple.com/v/home/dj/images/enhanced-gallery-heroes/iphone/iphone_7_large_2x.jpg");*/
        /*}*/
        /*div:nth-of-type(2) figure{*/
          /*background-image: url("https://images.apple.com/v/home/dj/images/enhanced-gallery-heroes/siri/siri_large_2x.jpg");*/
        /*}*/
        /*div:nth-of-type(3) figure{*/
          /*background-image: url("https://images.apple.com/v/home/dj/images/enhanced-gallery-heroes/iphone/iphone_7_large_2x.jpg");*/
        /*}*/
        /*div:nth-of-type(4) figure{*/
          /*background-image: url("https://images.apple.com/v/home/dj/images/enhanced-gallery-heroes/siri/siri_large_2x.jpg");*/
        /*}*/

        .img-title {
          position: absolute;
          width: 100%;
          top: 20%;
          color: #fff;
          /*z-index: 99;*/
          text-align: center;
        }

      }

    }

    section.main-card {
      width: 100vw;
      padding-top: $section-padding-top;
      margin: 0 auto;

      .page-body {
        @include flex();
        @include flex-direction(column);

        .card-part {
          position: relative;
          padding: 5px 0;

          .card-inner {
            width: 100%;
            height: 55vw;
            max-height: 300px;

            figure {
              @include background-image-common("", cover);
              width: 100%;
              /*max-width: 500px;*/
              margin: 0 auto;
              height: 100%;
              /*border: 1px solid #555;*/
              opacity: 1;
              @include transition-common();
            }

            figure:hover {
              /*border-color: $opacity-white-bg-color;*/
              opacity: 0.7;
              cursor: pointer;
            }

          }

        }

        /*div:nth-of-type(1) .card-inner figure {*/
          /*background-image: url("https://images.apple.com/cn/home/images/row-promos/apple_pay_small_2x.jpg");*/
        /*}*/

        /*div:nth-of-type(2) .card-inner figure {*/
          /*background-image: url("https://images.apple.com/v/home/dj/images/row-promos/imac_small_2x.jpg");*/
        /*}*/

        /*div:nth-of-type(3) .card-inner figure {*/
          /*background-image: url("https://images.apple.com/v/home/dj/images/row-promos/summer_casual_small_2x.jpg");*/
        /*}*/

      }
    }

  }

}

@media (min-width: #{$responsive-width-xs}) {
  #app {

    .page-index {

      main {

        section.main-card {

          .page-body {
            @include flex-direction(row);

            .card-part {
              width: 33.3%;
              padding: 3px;

              .card-inner {
                height: 20vw;
                max-height: 200px;

                figure {
                  max-width: 500px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: #{$responsive-width-small}) {
  #app {

    .page-index {

      main {

        section.main-card {
          width: $common-content-width-small;

          .page-body {

          }
        }
      }
    }
  }
}
</style>
