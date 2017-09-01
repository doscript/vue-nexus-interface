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
            <div class="recent-name">{{ recentChoose.name }}</div>
          </div>
        </div>
        <div class="province-list">
          <div class="content">
            <div class="address" v-for="item in provinces" :key="item" @click="changeRecentChoose(item)"><span>{{ item.name }}</span></div>
          </div>
        </div>
        <div class="address-list">
          <div class="content" v-if="addresses && addresses.length > 0">
            <div class="address-item" v-for="item in addresses" :key="item">
              <figure></figure>
              <div class="words"><span>地址：</span>北京市顺义区南法信旭辉空港中心C座3号楼710</div>
              <div class="words"><span>电话：010-56257831</span></div>
              <div class="words"><span>营业时间：</span>9:00-18:00 六日10:00-17:00</div>
            </div>
          </div>
          <div class="null-content" v-else>
            <span>未获取到服务网点信息</span>
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
        provinces: [
          { id: '1', name: '安徽' },
          { id: '2', name: '北京' },
          { id: '3', name: '福建' },
          { id: '4', name: '甘肃' },
          { id: '5', name: '广东' },
          { id: '6', name: '广西' },
          { id: '7', name: '贵州' },
          { id: '8', name: '海南' },
          { id: '9', name: '河北' },
          { id: '10', name: '河南' },
          { id: '11', name: '黑龙江' },
          { id: '12', name: '湖北' },
          { id: '13', name: '湖南' },
          { id: '14', name: '吉林' },
          { id: '15', name: '江苏' },
          { id: '16', name: '江西' },
          { id: '17', name: '辽宁' },
          { id: '18', name: '内蒙古' },
          { id: '19', name: '宁夏' },
          { id: '20', name: '青海' },
          { id: '21', name: '山东' },
          { id: '22', name: '山西' },
          { id: '23', name: '陕西' },
          { id: '24', name: '上海' },
          { id: '25', name: '四川' },
          { id: '26', name: '天津' },
          { id: '27', name: '新疆' },
          { id: '28', name: '云南' },
          { id: '29', name: '浙江' },
          { id: '30', name: '重庆' },
        ],
        recentChoose: {
          id: '',
          name: ''
        },
        addresses: [],
      }
    },

    computed: {},

    created () {
      this.recentChoose = { id: '2', name: '北京' };
      this.queryAddresses();
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

      changeRecentChoose(item) {

        this.recentChoose = item;

        this.queryAddresses();
      },

      queryAddresses() {
        console.log(this.recentChoose);
        if (this.recentChoose.id != '') {
          switch (this.recentChoose.id) {
            case '1':
              this.addresses = [
                { address: '合肥市庐阳区寿春路356号徽商国际大厦2807室', tel: '0551-65358775', opentime: '9:00-17:30' },
              ];
              break;
            case '2':
              this.addresses = [
                { address: '北京市顺义区南法信旭辉空港中心C座3号楼710', tel: '010-56257831', opentime: '9:00-18:00 六日10:00-17:00' },
                { address: '北京市房山区良乡太平庄东里39号楼底商101', tel: '010-61350907', opentime: '9:00-18:00' },
                { address: '北京市海淀区苏州街55号名商大厦701A室', tel: '010-60606861 / 010-60606564', opentime: '9:00-18:00' },
              ];
              break;
            case '3':
              this.addresses = [
                { address: '福州市台江区南园路56号苍霞新城嘉兴园2#3#楼连接体1层4店面', tel: '0591-83752792', opentime: '9:00-18:00' },
                { address: '福州市台江区南园路56号苍霞新城嘉兴园2#3#楼连接体1层4店面', tel: '0591-83752792', opentime: '9:00-18:00' },
              ];
              break;
            case '4':
              this.addresses = [];
              break;
            case '5':
              this.addresses = [];
              break;
            case '6':
              this.addresses = [];
              break;
            default:
              break;
          }
        } else {
          // 默认显示北京
          this.recentChoose = { id: '2', name: '北京' };
          this.addresses = [
            { address: '北京市顺义区南法信旭辉空港中心C座3号楼710', tel: '010-56257831', opentime: '9:00-18:00 六日10:00-17:00' },
            { address: '北京市房山区良乡太平庄东里39号楼底商101', tel: '010-61350907', opentime: '9:00-18:00' },
            { address: '北京市海淀区苏州街55号名商大厦701A室', tel: '010-60606861 / 010-60606564', opentime: '9:00-18:00' },
          ];
        }
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
            flex-wrap: wrap;

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

          .null-content {
            display: flex;
            justify-content: center;
            height: 100px;
            padding: 50px 0;
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
