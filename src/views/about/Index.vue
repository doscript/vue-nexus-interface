<template>
  <div class="about-index">
    <section class="page">
      <div class="page-body">
        <div class="content">
          <div class="title">E人E本的品牌缘起</div>
          <p>E人E本的品牌起点，源于创始人杜国楹先生对汉字书写的热爱。</p>
          <p>从学生时代开始，拥有“书写情结”的他就习惯于把每日所见、所想都记在本子上。随着时间的增长，记事的本子越来越多，无法整理也不舍得丢弃。于是，杜国楹萌生了这样的一个念头——能不能做一款“电子记事本”，一人只需一本，永远也写不完，随时能查看。</p>
          <p>2005年，E人E本开始启航，也因此得名。</p>
          <a href="javascript:void(0);" class="more">大事记 >></a>
        </div>
      </div>
    </section>

    <section class="page">
      <div class="page-body">
        <div class="top-device">
          <div class="top-pic">
            <figure :style="data.productTopPic.style"></figure>
          </div>
          <div class="content">
            <div class="title">产品沿革</div>
            <p>自2010年1月至今，<br />E人E本已陆续推出十余款商务平板电脑系列产品，<br />成为中国商务平板领域当之无愧的领军品牌。<br />2014年6月首次推出安全手机M1，涉足手机行业。</p>
            <a href="javascript:void(0);" class="more video" data-ebenaction="视频：了解e本-看看用户怎么说">看看用户怎么说 >><span class="icon-gray-video"></span></a>
          </div>
        </div>

        <ul class="products">
          <li v-for="item in data.productHistory" :key="item">
            <div class="pic">
              <figure :style="item.style"></figure>
            </div>
            <div class="title">{{ item.title }}</div>
          </li>
        </ul>
      </div>
    </section>

    <section class="page">
      <div class="page-body">
        <div class="content">
          <div class="title">
            北京壹人壹本信息科技有限公司
            <span class="en">Beijing ERENEBEN Information Technology Ltd.,co</span>
          </div>
          <p>公司成立于2009年，是清华同方股份（600100）旗下的全资子公司，是北京市科委和中关村管委会颁发认证的高新技术企业、北京市专利示范单位、移动电子政务安全本示范单位。</p>
          <p class="last-child">我们凭借强大的技术和产品实力，致力于为中国高端政商用户、政企及各行业用户提供安全、高效的移动办公解决方案。</p>
          <a href="javascript:void(0);" class="more">企业荣誉 >></a>
        </div>
      </div>
    </section>

    <section class="page">
      <div class="page-body">

      </div>
    </section>

    <section class="page">
      <div class="page-body">

      </div>
    </section>

    <section class="page">
      <div class="page-body">

      </div>
    </section>

    <section class="page">
      <div class="page-body">

      </div>
    </section>

    <info-nav></info-nav>

  </div>
</template>

<script>
  import InfoNav from '../common/InfoNav'
  import { EbenResourceDomain } from '../../constants/index'

  export default{
    name: 'AboutIndex',

    data () {
      return {
        itemEvent: {
          path: '/about/events'
        },
        data: {
          productTopPic: {
            title: 'T9',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t9.png")',
            }
          },
          productHistory: [
            {
              title: 'T1',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t1.png")',
              }
            },
            {
              title: 'T2',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t2.png")',
              }
            },
            {
              title: 'T3',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t3.png")',
              }
            },
            {
              title: 'T4',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t4.png")',
              }
            },
            {
              title: 'T5',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t5.png")',
              }
            },
            {
              title: 'T6',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t6.png")',
              }
            },
            {
              title: 'T7',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t7.png")',
              }
            },
            {
              title: 'T8',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_t8.png")',
              }
            },
          ]
        }
      }
    },

    computed: {},

    created () {},

    mounted () {},

    props: {

    },

    watch: {

    },

    methods: {

      onClickItem(item) {
        console.log(item);
        this.$router.push(item.path);
      }
    },

    components: {
      InfoNav
    },
  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .about-index {

    section.page {
      width: 100%;
      min-height: $common-section-height;
      overflow: hidden;

      .page-body {
        max-width: $common-content-width;
        margin: 0 auto;
      }
    }

    section.page:nth-of-type(2n) {
      background: #fff;
    }

    section.page:nth-of-type(2n+1) {
      background: #000;
    }

    section.page:nth-of-type(1) {
      background: url("#{$eben-resource-domain}/new_images/about/about_bg_1.jpg") no-repeat center;
      background-size: cover;

      .page-body {
        display: flex;
        justify-content: flex-end;
        padding: 150px 15px;

        .content {
          background: $opacity-white-bg-color;
          max-width: 520px;
          padding: 25px;
          color: $char-color-dark;

          .title {
            margin-bottom: 30px;
            font-size: 28px;
            text-indent: 28px;
            line-height: 1.5em;
          }

          p {
            font-size: 14px;
            line-height: 1.8em;
            text-indent: 28px;
          }

          p:nth-last-of-type(1) {
            display: inline-block;
          }
        }

      }
    }

    section.page:nth-of-type(2) {
      .page-body {

        .top-device {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: $common-padding;

          .top-pic {
            min-width: $responsive-width-xs;
            min-height: $responsive-width-xs;
            padding: $common-padding;

            figure {
              background-size: cover;
            }
          }

          .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: $common-padding;

            .title {
              margin-bottom: 30px;
              font-size: 28px;
              line-height: 1.5em;
            }

            p {
              font-size: 14px;
              line-height: 2.5em;
            }
          }
        }

        .products {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          li {
            padding: 5px;

            .pic {
              width: 100px;
              height: 68px;

              figure {
                background-repeat: no-repeat;
              }
            }

            .title {
              text-align: center;
              padding: 15px 0;
              font-weight: 500;
            }
          }
        }
      }
    }

    section.page:nth-of-type(3) {
      background: url("#{$eben-resource-domain}/new_images/about/about_bg_3.jpg") no-repeat center;
      background-size: cover;

      .page-body {

        .content {
          background: $opacity-white-bg-color;
          max-width: 520px;
          padding: 25px;
          color: $char-color-dark;
          margin: 100px auto 0;

          .title {
            margin-bottom: 30px;
            font-size: 28px;
            line-height: 1.5em;
            text-align: center;

            .en {
              font-size: 16px;
              line-height: 1.5em;
              display: block;
            }
          }

          p {
            font-size: 14px;
            line-height: 1.8em;
            text-indent: 28px;
          }

          p:nth-last-of-type(1) {
            display: inline-block;
          }
        }
      }
    }

    section.page:nth-of-type(4) {

    }

    section.page:nth-of-type(5) {
      background-color: #141414;
      color: #FFFFFF;
    }

    section.page:nth-of-type(6) {

    }

    section.page:nth-of-type(7) {
      background: url("#{$eben-resource-domain}/new_images/page7_bg.jpg") no-repeat center;
      background-size: cover;
    }
  }

  @media (max-width: #{$responsive-width-small}) {
    #app .about-index {

      section.page:nth-of-type(3) {

        .page-body {
          height: $common-section-height;

          .content {
            margin: 0;
            width: 100%;
            height: 100%;
            max-width: none;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

          }
        }
      }

    }
  }
</style>
