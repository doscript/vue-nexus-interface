<template>
  <div class="page-index">
    <header-component></header-component>
    <scroll-info></scroll-info>
    <div class="frame-content">
      <side-nav></side-nav>
      <main @click="onHideMenuClick">
        <article class="main-carousel">
          <el-carousel trigger="click" indicator-position="" :interval="4000" :autoplay="true">
            <el-carousel-item v-for="item in carouselArray" :key="item">
              <div class="img-title">
                <h2>{{ item.titleSmall }}</h2>
                <h1>{{ item.titleLarge }}</h1>
              </div>
              <figure class="bg-img" :style="item.figureStyle"></figure>
            </el-carousel-item>
          </el-carousel>
        </article>
        <section class="main-card">
          <el-col :xs="24" :sm="8" class="card-part" v-for="item in cardArray" :key="item">
            <div class="card-inner">
              <figure class="card-image" :style="item.figureStyle"></figure>
            </div>
          </el-col>
          <div class="clear"></div>
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
import { EbenResourceDomain } from '../constants/index'

export default{
  name: 'Index',

  props: {
  },

  data () {
    return {
      carouselArray: [
        {
          titleSmall: '这是小标题一',
          titleLarge: '这是大标题一',
          figureStyle: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/focus_1.jpg")'
          }
        },
        {
          titleSmall: '这是小标题二',
          titleLarge: '这是大标题二',
          figureStyle: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/focus_2.jpg")'
          }
        },
        {
          titleSmall: '这是小标题三',
          titleLarge: '这是大标题三',
          figureStyle: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/focus_3.jpg")'
          }
        },
      ],
      cardArray: [
        {
          path: '',
          figureStyle: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/focus_1.jpg")'
          }
        },
        {
          path: '',
          figureStyle: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/focus_2.jpg")'
          }
        },
        {
          path: '',
          figureStyle: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/focus_3.jpg")'
          }
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
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/variables.scss';

#app {
  height: auto;

  .page-index {
    height: 100%;
    width: 100%;
    /*display: flex;*/
    display: block;
    flex-direction: column;
  }

  .frame-content {
    flex: 1;
    display: flex;
    width: 100%;
  }

  main {
    flex: 1;

    .main-carousel {
      height: calc(100vh - #{$header-height});
      max-height: 650px;
    }

    .el-carousel {
      height: 100%;

      .el-carousel__container {
        height: 100%;

        figure {
          background-size: auto 100%;
          background-repeat: no-repeat;
          background-position-x: center;
          position: absolute;
          width: 100%;
          height: 100%;
          /*min-height: 900px;*/
          left: 0;
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
          z-index: 99;
          text-align: center;
        }

      }

    }

    .main-card {
      min-height: 200px;

      .card-part {
        position: relative;

        .card-inner {
          width: 100%;
          min-height: 200px;

          figure {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            border: 1px solid $page-background-color;
            transition: all 0.5s ease-in-out;
          }

          figure:hover {
            cursor: pointer;
            border-color: $info-nav-hover-color;
          }
        }

      }

    }

  }

}

@media (min-width: #{$responsive-width-small}) {
  #app .page-index {


  }
}
</style>
