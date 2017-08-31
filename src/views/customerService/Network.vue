<template>
  <div class="network">

    <section class="pic-banner">
      <div class="page-body">
        <article class="">
          <figure :style="picBanner.style"></figure>
        </article>
      </div>
    </section>

    <section class="address-content">
      <div class="page-body">
        <div class="recent-choose">
          <div class="content">
            <div class="recent-title">当前地区</div>
            <div class="recent-name">北京</div>
          </div>
        </div>
        <div class="province-list">
          <div class="content">
            <div class="address"><span>安徽</span></div>
            <div class="address"><span>北京</span></div>
          </div>
        </div>
        <div class="address-list">
          <div class="content">
            <div class="address-item">
              <figure></figure>
              <div class="words"><span>地址：</span>北京市顺义区南法信旭辉空港中心C座3号楼710</div>
              <div class="words"><span>电话：010-56257831</span></div>
              <div class="words"><span>营业时间：</span>9:00-18:00 六日10:00-17:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '../../constants/index'
  import { $utils } from '@helper'

  export default{
    name: 'Network',

    data () {
      return {
        picBanner: {
          style: {
            backgroundImage: 'url("' + EbenResourceDomain + '/new_images/service_network.png")',
          },
        },
      }
    },

    computed: {},

    created () {

    },

    mounted () {},

    props: {

    },

    watch: {

    },

    components: {

    },

    methods: {

      onClickItem(item) {
        console.log(item);
        if (item.pathType === '_blank') {
          window.location.href = item.path;
          return;
        }
        this.$router.push(item.path);
      },

    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .network {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.pic-banner {

      .page-body {

        article {
          /* 将banner高度设置50%屏幕宽度 */
          height: 50vw;
          min-height: 150px;
          max-height: 500px;

          figure {
            background: top center no-repeat;
            background-size: contain;
          }
        }
      }
    }

    section.address-content {

      .page-body {

        .recent-choose {
          padding: 15px 0;

          .content {
            display: flex;
            align-items: center;

            .recent-title {
              padding: 5px 15px 5px 0;
            }

            .recent-name {
              padding: 5px 15px;
              border: 1px solid #{$char-color};
            }
          }
        }

        .province-list {
          padding: 15px 0;
          border-top: 1px solid #{$char-color};
          border-bottom: 1px solid #{$char-color};

          .content {
            display: flex;

            .address {
              padding: 10px;

              span {
                transition: color 0.25s ease-in-out;
              }

              span:hover {
                color: $char-hover-color;
                cursor: pointer;
              }
            }
          }
        }

        .address-list {
          padding: 15px 0;

          .content {

            .address-item {

              figure {
                background: url("#{$eben-resource-domain}/new_images/icon.png") -120px 0 no-repeat;
                width: 30px;
                height: 40px;
                margin: 5px 0;
              }

              .words {
                padding: 5px 0;
              }
            }
          }
        }
      }

    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .network {

    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .network {

      section {
        width: $common-content-width-small;
      }

    }
  }
</style>
