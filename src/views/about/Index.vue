<template>
  <div class="about-index">
    <section class="page">
      <div class="page-body">
        <div class="content">
          <div class="title">E人E本的品牌缘起</div>
          <p>E人E本的品牌起点，源于创始人杜国楹先生对汉字书写的热爱。</p>
          <p>从学生时代开始，拥有“书写情结”的他就习惯于把每日所见、所想都记在本子上。随着时间的增长，记事的本子越来越多，无法整理也不舍得丢弃。于是，杜国楹萌生了这样的一个念头——能不能做一款“电子记事本”，一人只需一本，永远也写不完，随时能查看。</p>
          <p>2005年，E人E本开始启航，也因此得名。</p>
          <a href="javascript:void(0);" @click="onClickItem(itemEvent)" class="more">大事记 >></a>
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
            <a href="javascript:void(0);" @click="showVideoPlayer();" class="more video" data-ebenaction="视频：了解e本-看看用户怎么说"><icon class="icons" name="player"></icon> 看看用户怎么说 >></a>
            <video-player :id="videoUser.id" :url="videoUser.url" ref="VideoPlayer"></video-player>
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
          <br>
          <p>公司成立于2009年，是清华同方股份（600100）旗下的全资子公司，是北京市科委和中关村管委会颁发认证的高新技术企业、北京市专利示范单位、移动电子政务安全本示范单位。</p>
          <p class="last-child">我们凭借强大的技术和产品实力，致力于为中国高端政商用户、政企及各行业用户提供安全、高效的移动办公解决方案。</p>
          <a href="javascript:void(0);" @click="onClickItem(itemHonor)" class="more">企业荣誉 >></a>
        </div>
      </div>
    </section>

    <section class="page">
      <div class="page-body">
        <div class="title">三大产品线</div>
        <div class="product-lines">
          <div class="content" v-for="item in data.productLines" :key="item">
            <div class="pic">
              <figure :style="item.style"></figure>
            </div>
            <div class="description">
              <div class="name">{{ item.title }}</div>
              <p>{{ item.description }}</p>
              <a v-if="item.pathType == '_blank'" :href="item.path" :target="item.pathType" class="more" >了解更多 >></a>
              <a v-if="item.path && item.pathType != '_blank'" href="javascript:void(0)" @click="onClickItem(item)" class="more" >了解更多 >></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page">
      <div class="page-body">
        <div class="title">三大核心技术</div>
        <div class="core-tech">
          <div class="content" v-for="item in data.coreTech" :key="item">
            <div class="pic">
              <figure :style="item.style"></figure>
            </div>
            <div class="description">
              <div class="name">{{ item.title }}</div>
              <p>{{ item.description }}</p>
              <a v-if="item.pathType == '_blank'" :href="item.path" :target="item.pathType" class="more" >了解更多 >></a>
              <a v-if="item.path && item.pathType != '_blank'" href="javascript:void(0)" @click="onClickItem(item)" class="more" >了解更多 >></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page">
      <div class="page-body">
        <div class="e">
          <figure></figure>
          <div class="content">
            <div class="title">E术家</div>
            <p>一直以来，E人E本无与伦比的原笔迹手写体验深受众多书画爱好者的青睐。利用E人E本，他们在漫画创作、服装设计、建筑规划、3D画创作、舞台剧布景等等艺术领域中实现了数字艺术创作与移动办公的完美结合。</p>
            <p>通过这些作品，您可以品读出E人E本用户通过这支独一无二的手写笔，对爱好、生活、工作进行的深入思考及诠释。而“E术家”也因此成为E人E本与众多新老用户互动交流的品牌活动。</p>
          </div>
        </div>
        <div class="eben-cards">
          <div class="eben-card" v-for="item in data.eArts" :key="item">
            <figure :style="item.style"></figure>
          </div>
        </div>
        <a href="http://www.eben.cn/abouts/eart/eshu" target="_blank" class="more" >了解更多 >></a>
      </div>
    </section>

    <section class="page">
      <div class="page-body">
        <div class="t1">需求为纲、体验为本、品牌为魂</div>
        <div class="t2">E人E本致力于做一家卓越的产品公司</div>
        <div class="content">
          <div class="description">
            <div class="title"><span>热爱</span>是态度</div>
            <p>只有热爱才能拥有追求<br />卓越的无尽动力。</p>
          </div>
          <div class="description">
            <div class="title"><span>专注</span>是精神</div>
            <p>只做一件事<br />把一件事做到极致。</p>
          </div>
          <div class="description">
            <div class="title"><span>细节</span>是方法，是习惯</div>
            <p>有关注细节的习惯<br />也有把握细节的方法。</p>
          </div>
          <div class="description">
            <div class="title"><span>简单</span>是能力</div>
            <p>在庞杂无序的信息洪流中，<br />实践大道至简的朴素本质。</p>
          </div>
        </div>
      </div>
    </section>

    <info-nav></info-nav>

  </div>
</template>

<script>
  import InfoNav from '../common/InfoNav'
  import VideoPlayer from '../common/VideoPlayer'
  import { EbenResourceDomain, EbenDomain } from '../../constants/index'

  export default{
    name: 'AboutIndex',

    data () {
      return {
        itemEvent: {
          path: '/customer-service/article',
          pathType: '',
          query: { id: '', type: 'event' },
        },
        itemHonor: {
          path: '/customer-service/article',
          pathType: '',
          query: { id: '', type: 'honor' },
        },
        videoUser: {
          url: EbenResourceDomain + '/video/userfinal.mp4',
          id: 'userfinal'
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
          ],
          productLines: [
            {
              title: '商务平板',
              description: '公司自2010年1月发布第一代支持手写办公的商务平板电脑至今，已陆续推出十余款商务平板电脑系列产品，是中国商务平板电脑领域的领军品牌。',
              path: '/product/eben?mark=T9',
              pathType: '',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_p1.jpg")',
              }
            },
            {
              title: '安全手机',
              description: '2014年6月，公司首次推出“安全手机”产品线，率先提出了硬件+系统+软件“三位一体”的移动终端信息安全理念，为高安全级别的用户提供自主可控的手机信息安全解决方案。',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_p2.jpg")',
              }
            },
            {
              title: '行业应用',
              description: 'E人E本提供高度可定制化服务，为集团客户提供安全、高效的移动办公解决方案。覆盖安全政务、移动办公、移动执法、智慧教学、智慧医疗共六大领域。',
              path: '/product/solution',
              pathType: '',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_p3.jpg")',
              }
            },
          ],
          coreTech: [
            {
              title: '原笔迹数字书写',
              description: '“原笔迹数字书写技术”（MindMark）是由壹人壹本公司自主研发并具有独立知识产权。 融合了全球领先的电磁压感技术和智能识别技术……',
              path: EbenDomain + '/abouts/corey',
              pathType: '_blank',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_p4.jpg")',
              }
            },
            {
              title: '手写办公系统',
              description: '公司自主设计开发的“手写办公系统”核心应用，使得E人E本的原笔迹手写不仅仅停留在“电子记事本”上，而是完整融入办公生态。横向打通各种办公设备，如……',
              path: EbenDomain + '/abouts/cores',
              pathType: '_blank',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_p5.jpg")',
              }
            },
            {
              title: 'SEA安全增强架构',
              description: 'E人E本SEA安全增强架构（Security Enhanced Architecture）是基于Android操作系统的安全操作系统解决方案，采用国密算法安全模块，为用户提供以安全启动……',
              path: EbenDomain + '/abouts/corea',
              pathType: '_blank',
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/about/about_p6.jpg")',
              }
            },
          ],
          eArts: [
            {
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/page6_p1.jpg")',
              }
            },
            {
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/page6_p2.jpg")',
              }
            },
            {
              style: {
                backgroundImage: 'url("' + EbenResourceDomain + '/new_images/page6_p3.jpg")',
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

    components: {
      InfoNav,
      VideoPlayer
    },

    methods: {

      onClickItem(item) {
        console.log(item);
        if (item.pathType === '_blank') {
          window.location.href = item.path;
          return;
        }
        if (item.query) {
          this.$router.push({ path: item.path, query: item.query});
          return;
        }
        this.$router.push(item.path);
      },

      showVideoPlayer() {
        this.$refs.VideoPlayer.openVideoPlayer();
      },

//      setTrigger(trigger) {
//        // 这是用于子组件传值给父组件的方法，子组件调用$emit('transferTrigger', trigger)可触发
//        this.videoUser.trigger = trigger;
//      },

    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

  #app .about-index {

    section.page {
      width: 100%;
      min-height: $common-section-height;
      overflow: hidden;

      .page-body {
        width: 100%;
        max-width: $common-content-width-xxs;
        margin: 0 auto;
      }
    }

    section.page:nth-of-type(2n) {
      background: #fff;
      color: #000;
    }

    section.page:nth-of-type(2n+1) {
      background: #000;
      color: #fff;
    }

    section.page:nth-of-type(1) {
      @include background-image-common("#{$eben-resource-domain}/new_images/about/about_bg_1.jpg", cover);
      @include flex();
      @include justify-content();
      @include flex-direction(column);

      .page-body {
        @include flex();
        @include justify-content();

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
          @include flex(wrap);
          @include justify-content();
          padding: $common-padding;

          .top-pic {
            min-height: $responsive-width-xxs;
            min-width: $common-content-width-xxs;
            padding: 0;

            figure {
              @include background-image-common("");
            }
          }

          .content {
            @include flex();
            @include flex-direction(column);
            @include justify-content();
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

            .video {

              .icon {
                color: inherit;
                width: 16px;
                height: 16px;
              }
            }
          }
        }

        .products {
          @include flex(wrap);
          @include justify-content();

          li {
            padding: 5px;

            .pic {
              width: 100px;
              height: 68px;

              figure {
                @include background-image-common();
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
      @include background-image-common("#{$eben-resource-domain}/new_images/about/about_bg_3.jpg", cover);

      .page-body {
        height: $common-section-height;
        max-width: 100vw;

        .content {
          margin: 0;
          width: 100%;
          height: 100%;
          max-width: none;
          @include flex();
          @include flex-direction(column);
          @include justify-content(center);
          padding: 25px 10%;
          background: $opacity-white-bg-color;
          color: $char-color-dark;

          .title {
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

    section.page:nth-of-type(4),
    section.page:nth-of-type(5) {

      .page-body {

        .title {
          margin-top: 60px;
          font-size: 28px;
          line-height: 1.5em;
          text-align: center;
        }

        .product-lines,
        .core-tech {
          @include flex();
          @include flex-direction(column);

          .content {
            max-width: 400px;
            margin: 0 auto;
            padding: #{$common-padding} 0;

            .pic {
              min-width: 50%;

              figure {
                min-height: 200px;
                @include background-image-common();
                background-color: #000;
              }
            }

            .description {
              padding: $common-padding;

              .name {
                font-size: 21px;
                line-height: 1.5em;
                text-align: center;
                padding: 0 0 #{$common-padding};
              }

              p {
                font-size: 14px;
                text-indent: 2em;
                line-height: 1.5em;
              }

              a {
                width: 100px;
                overflow: hidden;
              }
            }
          }
        }
      }
    }

    section.page:nth-of-type(5) {
      background-color: #141414;
      color: #FFFFFF;
    }

    section.page:nth-of-type(6) {

      .page-body {
        padding: 30px 0;

        .e {

          figure {
            @include background-image-common("#{$eben-resource-domain}/new_images/page6_e.png");
            min-height: 200px;
            padding: $common-padding;
          }

          .content {
            padding: $common-padding;

            .title {
              font-size: 28px;
              line-height: 1.5em;
            }

            p {
              margin-top: 30px;
              font-size: 14px;
              line-height: 1.8em;
            }
          }
        }

        .eben-cards {

          .eben-card {
            padding: 5px;

            figure {
              @include background-image-common("", cover);
              height: 190px;
              width: 255px;
              margin: 0 auto;
              border: 3px solid #fdfdfd;
              box-shadow: 3px 3px 10px #777;
            }
          }
        }

        .more {
          margin: 15px;
          display: inline-block;
          float: right;
        }
      }
    }

    section.page:nth-of-type(7) {
      @include background-image-common("#{$eben-resource-domain}/new_images/page7_bg.jpg", cover);

      .page-body {
        @include flex();
        @include flex-direction(column);
        @include justify-content();
        min-height: $common-section-height;

        .t1 {
          font-size: 21px;
          line-height: 1.5em;
          text-align: center;
          padding: 30px 0 15px 0;
        }

        .t2 {
          font-size: 36px;
          line-height: 1.5em;
          text-align: center;
          padding: 0 0 30px 0;
        }

        .content {
          @include flex(wrap);
          @include flex-direction(column);
          @include justify-content();

          .description {
            padding: 15px 10px;
            text-align: center;

            .title {
              font-size: 14px;
              line-height: 1.5em;

              span {
                font-size: 36px;
                padding-right: 10px;
              }
            }

            p {
              margin-top: 20px;
              font-size: 12px;
              line-height: 1.5em;
            }
          }
        }

      }
    }
  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .about-index {

      section.page:nth-of-type(4),
      section.page:nth-of-type(5) {

        .page-body {

          .product-lines,
          .core-tech {

            .content {
              @include flex();
              max-width: 100%;

              .pic {
                padding: $common-padding;
              }

              .description {
                @include flex(wrap);
                @include flex-direction(column);
                @include justify-content(space-around);
                padding: $common-padding;

                .name {
                  text-align: left;
                }

                p {
                  text-indent: 0;
                }
              }
            }
          }
        }
      }

      section.page:nth-of-type(7) {

        .page-body {

          .content {
            @include flex-direction(row);

            .description {
              min-width: 34%;
              text-align: left;
            }
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .about-index {

      section.page {

        .page-body {
          max-width: $common-content-width-small;
        }

      }

      section.page:nth-of-type(1) {

        .page-body {
          @include justify-content(flex-end);
        }
      }

      section.page:nth-of-type(2) {
        @include flex();
        @include flex-direction(column);
        @include justify-content();

        .page-body {

          .top-device {

            .top-pic {
              min-width: 50%;
            }

            .content {

            }
          }
        }
      }

      section.page:nth-of-type(3) {

        .page-body {
          @include flex();
          @include flex-direction(column);
          @include justify-content();

          .content {
            max-width: 520px;
            padding: 25px;
            margin: 0 auto;
            height: auto;
          }
        }
      }

      section.page:nth-of-type(4),
      section.page:nth-of-type(5) {

        .page-body {

          .product-lines,
          .core-tech {
            @include flex-direction(row);

            .content {
              @include flex-direction(column);
              min-width: 33%;

              .pic {
                padding: 3px;
              }

              .description {

                .name {
                  text-align: center;
                }

                p {
                  text-indent: 2em;
                }
              }
            }
          }
        }
      }

      section.page:nth-of-type(7) {

        .page-body {

          .content {
            @include flex-direction(row);

            .description {
              max-width: 25%;
              min-width: 20%;
            }
          }
        }
      }

      section.page:nth-of-type(6) {
        .page-body {

          .e {
            @include flex();

            figure {
              min-height: 300px;
            }

            .content {

              .title {

              }

              p {

              }
            }
          }

          .eben-cards {
            @include flex();
            @include justify-content(flex-end);

            .eben-card {

              figure {

              }
            }
          }
        }
      }
    }
  }
</style>
