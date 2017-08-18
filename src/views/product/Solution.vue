<template>
  <div class="solution">
    <section class="page">
      <div class="page-body">
        <div class="content">
          <div class="eben-card" v-for="item in cards" :key="item">
            <figure :style="item.style"></figure>
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>

    <section class="page pic-banner">
      <div class="page-body">
        <div class="content">
          <figure :style="picBanner.style" @click="onClickItem(picBanner.item)"></figure>
        </div>
      </div>
    </section>

    <info-nav></info-nav>

  </div>
</template>

<script>
  import InfoNav from '../common/InfoNav'
  import { EbenResourceDomain, EbenDomain } from '../../constants/index'

  export default{
    name: 'Solution',

    data () {
      return {
        cards: [
          {
            title: '安全政务',
            link: EbenDomain + '/businessproduct/solutionsdetail/safety',
            linkType: '_blank',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/product_s1.jpg")',
            }
          },
          {
            title: '移动办公',
            link: EbenDomain + '/businessproduct/solutionsdetail/mobile',
            linkType: '_blank',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/product_s2.jpg")',
            }
          },
          {
            title: '智慧教学',
            link: EbenDomain + '/businessproduct/solutionsdetail/wisdom',
            linkType: '_blank',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/product_s3.jpg")',
            }
          },
          {
            title: '移动执法',
            link: EbenDomain + '/businessproduct/solutionsdetail/lawenforcement',
            linkType: '_blank',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/product_s4.jpg")',
            }
          },
          {
            title: '智慧金融',
            link: EbenDomain + '/businessproduct/solutionsdetail/finance',
            linkType: '_blank',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/product_s5.jpg")',
            }
          },
          {
            title: '智慧医疗',
            link: EbenDomain + '/businessproduct/solutionsdetail/medicalcare',
            linkType: '_blank',
            style: {
              backgroundImage: 'url("' + EbenResourceDomain + '/new_images/product_s6.jpg")',
            }
          },
        ],
        picBanner: {
          style: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/k9_pic.jpg")',
          },
          item: {
            path: '/product/eben?mark=K9'
          }
        },
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
      InfoNav
    },

    methods: {

      onClickItem(item) {
        console.log(item);
        this.$router.push(item.path);
      },

    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .solution {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.pic-banner {
      min-height: 200px;

      .page-body {
        height: inherit;
        min-height: inherit;

        .content {
          height: inherit;
          min-height: inherit;

          figure {
            height: inherit;
            min-height: inherit;
            background: center no-repeat;
            background-size: cover;
            cursor: pointer;
            transition: opacity 0.25s linear;
            opacity: 0.9;
          }

          figure:hover {
            opacity: 1;
          }
        }
      }
    }

    section.page {

      .page-body {

        .content {
          display: flex;
          flex-wrap: wrap;

          .eben-card {
            width: 300px;
            min-width: 300px;
            margin: 0 auto;
            height: 200px;
            cursor: pointer;
            opacity: 0.9;
            transition: opacity 0.25s linear;
            padding: 5px;

            figure {
              background: center no-repeat;
              background-size: cover;
            }

            .title {
              width: 100%;
              background: rgba(96, 81, 35, 0.8);
              position: relative;
              bottom: 50px;
              color: #fff;
              height: 40px;
              line-height: 40px;
              padding: 0 15px;
            }
          }

          .eben-card:hover {
            opacity: 1;
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .solution {

      section.pic-banner {
        min-height: 300px;

        .page-body {

          .content {

            figure {

            }
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .solution {

      section {
        width: $common-content-width-small;
      }

    }
  }
</style>
