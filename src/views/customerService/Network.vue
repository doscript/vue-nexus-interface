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
            <div class="address" v-for="item in provinces" :key="item"><span @click="changeRecentChoose(item)">{{ item.name }}</span></div>
          </div>
        </div>
        <div class="address-list">
          <div class="content" v-if="addresses && addresses.length > 0">
            <div class="address-item" v-for="item in addresses" :key="item">
              <figure></figure>
              <div class="words"><span>地址：</span>{{ item.address }}</div>
              <div class="words"><span>电话：{{ item.tel }}</span></div>
              <div class="words"><span>营业时间：</span>{{ item.opentime }}</div>
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
                { address: '厦门市思明区天湖苑1座24C', tel: '0592-2380521', opentime: '9:00-17:30' },
              ];
              break;
            case '4':
              this.addresses = [
                { address: '甘肃省兰州市城关区东岗西路230号兰州电脑城4楼421室', tel: '0931-8507639；7809001', opentime: '8:00-18:00' },
              ];
              break;
            case '5':
              this.addresses = [
                { address: '广州市天河区五山路135号天河科技街TL10室', tel: '020-23359142', opentime: '9:00-18:00' },
                { address: '深圳市南山区桃园街道光前工业区20栋3楼', tel: '0755-86926665', opentime: '9:00-18:00' },
                { address: '深圳市福田区华强北路群星广场A座2501', tel: '0755-25842323', opentime: '9:00-18:00' },
                { address: '惠州市惠城区麦科特大道69号达利大厦20楼D座', tel: '0752-2166096', opentime: '9:00-18:00' },
                { address: '广东阳江市二环路195号计3', tel: '0662-3212138 3289190', opentime: '9:00-18:00' },
                { address: '珠海市香洲区湾仔沙电脑城3楼306室', tel: '0756-8875088', opentime: '9:00-18:00' },
              ];
              break;
            case '6':
              this.addresses = [
                { address: '南宁市星湖路南二里3号星湖综合楼七楼705号', tel: '0771-2286823', opentime: '9:30-18:30' },
              ];
              break;
            case '7':
              this.addresses = [
                { address: '贵州省贵阳市公园北路凯迪大厦13楼36号', tel: '0851-85555320', opentime: '9:00-18:00' },
              ];
              break;
            case '13':
              this.addresses = [
                { address: '湖南省长沙市芙蓉区车站中路科佳电脑城B座1901房', tel: '0731-84124805 89792353', opentime: '9:00-18:00' },
                { address: '湖南省郴州市协作路郴州电脑城二期七楼701号', tel: '0735-2276768 2276769', opentime: '8：30-17：30' },
              ];
              break;
            case '8':
              this.addresses = [
                { address: '海南省海口市龙华区大同路25号华发大厦A座2811室', tel: '0898-66747007 0898-66752211', opentime: '9:00-18:00' },
                { address: '海口市海秀大道10号DC商业城内第三层3223号铺面', tel: '0898-66258245', opentime: '8：30-17：30' },
              ];
              break;
            case '9':
              this.addresses = [
                { address: '石家庄市和平东路与平安北大街交叉口紫晶苑3A东侧104', tel: '0311-86670404', opentime: '8:30-17:30' },
                { address: '唐山唐山市开发区龙泉北里新景楼底商东2号', tel: '0315-3205814 3205784', opentime: '8：30-17：30' },
                { address: '张家口市桥东区胜利路察哈尔世纪广场北区商贸城东街6139号', tel: '0313-2029798', opentime: '8:00-18:00' },
                { address: '河北省沧州市新华区新华东路21号荷花池对面鼓楼上城8号楼1811室', tel: '0317-2046342', opentime: '9:00-18:00' },
                { address: '河北衡水市桃城区和平西路爱特购物中心对面升平小区5号院5号楼2单元101室', tel: '0318-2872861', opentime: '9:00-18:00' },
                { address: '河北省邯郸市丛台区沁河路177号门市', tel: '0310-5300834', opentime: '9:00-18:00' },
              ];
              break;
            case '10':
              this.addresses = [
                { address: '郑州市金水区东风路18号太平洋安防市场907', tel: '0371-56001713，56001712', opentime: '9:00-18:00' },
                { address: '思故台商业街南区2楼541号', tel: '0374-8388116', opentime: '9：00-18：00' },
                { address: '南阳市七一路655号', tel: '13603779267', opentime: '8：00-18：00' },
                { address: '河南洛阳市涧西区珠江路16号', tel: '0379-64911999', opentime: '8：30-12：00 14：00-18：00' },
                { address: '河南省信阳市申城大道55号', tel: '0376-6268587', opentime: '8：30-12：00 14：00-17：30' },
              ];
              break;
            case '11':
              this.addresses = [
                { address: '南岗区一曼街3号49所电子大厦468室', tel: '0451-87523160 13613652650', opentime: '8:30-17:30' },
              ];
              break;
            case '12':
              this.addresses = [
                { address: '十堰市朝阳北路8号六堰广场泰弘电脑城四楼A410-1号', tel: '0719-8698436', opentime: '9:00-17:00' },
                { address: '襄阳市大庆西路豪门新天地2区1206室', tel: '0710-3426721', opentime: '9:00-17:00' },
                { address: '湖北省武汉市洪山区雄楚大道175号丽岛2046小区4栋2单元101室', tel: '18062580047', opentime: '9:00-18:00' },
              ];
              break;
            case '15':
              this.addresses = [
                { address: '江苏省南京市鼓楼区中央北路美景雅苑3号门面房（清华同方）', tel: '025-58735895', opentime: '9:00-18:00' },
                { address: '徐州市泉山区中山南路116-7号', tel: '0516-66673977', opentime: '9:00-17:30' },
                { address: '江苏省苏州市吴中区吴中西路96号', tel: '0512-65266491', opentime: '9:00-17:30' },
                { address: '常州市劳动中路百脑汇15-1幢1407室', tel: '0519-86909559', opentime: '9:00-17:30' },
                { address: '泰州市东进路118#锦泰购物广场158#', tel: '0523-80633775', opentime: '9:00-17:30' },
                { address: '江苏省扬州市邗江区四望亭路紫薇苑10栋3单元1号', tel: '0514-87951333', opentime: '9:00-17:30' },
                { address: '江苏省苏州市常熟市衡山路信一银座306', tel: '0512-52871860', opentime: '9:00-17:00' },
                { address: '江苏省淮安市清江浦区财富广场1楼C1017', tel: '0517-86229139', opentime: '9:00-18:00' },
                { address: '南京市中央北路141号-3-105', tel: '025-58842345', opentime: '9:00-18:00' },
              ];
              break;
            case '16':
              this.addresses = [
                { address: '南昌东湖区南京西路金阳光大厦A座1202室', tel: '0791-86166124、86661845', opentime: '9:00-18:00' },
                { address: '江西省南昌市八一大道99号洪城数码广场一楼B区02B号', tel: '0791-86661353', opentime: '9:00-17:30' },
                { address: '赣州市八一四大道2号新大地4楼S10', tel: '0797-8137008', opentime: '9:00-18:00' },
                { address: '江西省鹰潭市月湖区解放路241-4号', tel: '0701-6269581', opentime: '9:00-18:00' },
              ];
              break;
            case '14':
              this.addresses = [
                { address: '吉林市船营区北大二区3号楼1层3号', tel: '0432-62496631', opentime: '8:00-17:00' },
                { address: '吉林省白城市镇赉县新华书店北20米路东', tel: '0436-7238223', opentime: '8：30-17：30' },
                { address: '长春市宽城区人民大街280号长江路科技城3C-23号', tel: '0431-88015271', opentime: '9:00-17:00' },
                { address: '松原市松江大街609号', tel: '0438-5070105', opentime: '8:00-17:00' },
                { address: '延吉市光明街53号', tel: '0433-2550281', opentime: '8:00-17:00' },
              ];
              break;
            case '17':
              this.addresses = [
                { address: '沈阳市和平区文体路2-1号五里河城C1座901室', tel: '024-23960201', opentime: '9:00-17:00' },
                { address: '大连市沙河口区中长东四街53-6号长兴购物中心电子元器件K107号', tel: '0411-84522671', opentime: '9:00-17:00' },
                { address: '盘锦市兴隆台区兴隆大街富祥酒店南侧', tel: '0427-2812060', opentime: '9:00-18:00' },
              ];
              break;
            case '18':
              this.addresses = [
                { address: '内蒙古包头市青山区九星SOHO公寓220室', tel: '13204723300', opentime: '9:00-18:00' },
                { address: '内蒙古呼和浩特乌兰察布东路与丰州路交叉口南50米东汉鼎时代', tel: '0471-4934771', opentime: '9:00-17:30' },
                { address: '内蒙古自治区鄂尔多斯市东胜区天骄路金辉大厦A座908室', tel: '0477-8326190', opentime: '9:00-18:00' },
              ];
              break;
            case '19':
              this.addresses = [
                { address: '宁夏银川市文化东街219号', tel: '0951-6024008', opentime: '9:00-18:00' },
              ];
              break;
            case '20':
              this.addresses = [
                { address: '青海省西宁市城西区胜利路53号青旅大厦508室', tel: '0971-6128712', opentime: '9:00-18:00' },
              ];
              break;
            case '21':
              this.addresses = [
                { address: '济南市历下区花园庄东路37号黄金花园1号楼10层1002室', tel: '0531-66661770', opentime: '9:00-18:00' },
                { address: '山东省临沂市兰山区八一路81-3号', tel: '0539-2069480', opentime: '9:00-18:00' },
                { address: '青岛市市北区黄台路8号都市华庭3号楼1单元803室', tel: '0532-82721567', opentime: '9:00-18:00' },
              ];
              break;
            case '22':
              this.addresses = [
                { address: '山西省太原市小店区平阳路14号赛格商务楼8层B03', tel: '0351-5241654', opentime: '9:00-18:00' },
                { address: '山西省太原市万柏林区和平南路80号', tel: '0351-5257309', opentime: '9:00-18:00' },
                { address: '长治市西大街商业街', tel: '0355-2063511', opentime: '8:50-18:00' },
                { address: '晋城市红星街163号红星电脑城二楼西7-9号', tel: '0356-2025468', opentime: '9:00-18:00' },
                { address: '山西省临汾市尧都区鼓楼南皮店门巷107号门店清华同方售后', tel: '0357-2580251', opentime: '9:00-17:30' },
              ];
              break;
            case '23':
              this.addresses = [
                { address: '西安市南二环东段208号西北新闻大厦B12B室', tel: '029-85229199', opentime: '9:00-18:00' },
                { address: '陕西省西安市雁塔路中段1号佰腾电脑城1楼1F102-103', tel: '029-62990181', opentime: '9:00-18:00' },
                { address: '咸阳市秦都区统一路七里铺移民安置小区（沣水园二号院）18号楼7单元2楼南户', tel: '029-33699572', opentime: '9:00-18:00' },
              ];
              break;
            case '24':
              this.addresses = [
                { address: '上海市浦东新区东方路1369弄（富海花园）6号5G室', tel: '021-58889883 021-20246950', opentime: '9:00-18:00' },
              ];
              break;
            case '25':
              this.addresses = [
                { address: '武侯区新南路118号百脑汇805', tel: '028-85575529、85575539', opentime: '9:00-18:00' },
              ];
              break;
            case '26':
              this.addresses = [
                { address: '天津市南开区白堤路218号馨达园2号楼3单元502室', tel: '022-27420085', opentime: '9:00-17:30' },
              ];
              break;
            case '27':
              this.addresses = [
                { address: '乌鲁木齐市喀什东路688号准噶尔星馨苑一栋一楼门面房（康尔家超市楼下）汉鼎时代IT服务中心', tel: '0991-2317298', opentime: '10:00-19:00' },
              ];
              break;
            case '28':
              this.addresses = [
                { address: '昆明市五华区121数码城613室', tel: '0871-65712717', opentime: '8:00-18:00' },
              ];
              break;
            case '29':
              this.addresses = [
                { address: '杭州市文三路253号联强大厦B座801室', tel: '0571-56779721', opentime: '9:00-18：00' },
                { address: '杭州市西湖区学院路216号雅戈尔隐寓轩2幢1号商铺(在商苑西路上)', tel: '0571-88259331', opentime: '9:00-17:30' },
              ];
              break;
            case '30':
              this.addresses = [
                { address: '重庆市九龙坡区石桥铺高创锦业大厦17楼16号（赛博B馆楼上）', tel: '023-68629378', opentime: '9:00-18:00' },
              ];
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
  @import "../../assets/scss/mixins.scss";

  #app .network {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.pic-banner {

      .page-body {

        article {
          /* 将banner高度设置50%屏幕宽度 */
          height: 40vw;
          min-height: 150px;
          max-height: 400px;

          figure {
            @include background-image-common("", contain, top center);
          }
        }
      }
    }

    section.address-content {

      .page-body {

        .recent-choose {
          padding: 15px 0;

          .content {
            @include flex();
            @include align-items(center);

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
            @include flex(wrap);

            .address {
              padding: 10px;

              span {
                @include transition-common(color);
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
            @include flex(wrap);

            .address-item {
              padding: 10px;

              figure {
                @include background-image-common("#{$eben-resource-domain}/new_images/icon.png", auto, -120px 0);
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
            @include flex();
            @include justify-content();
            height: 100px;
            padding: 50px 0;
          }
        }
      }

    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .network {

      section.address-content {

        .page-body {

          .address-list {

            .content {

              .address-item {
                width: 50%;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .network {

      section {
        width: $common-content-width-small;
      }

      section.address-content {

        .page-body {

          .address-list {

            .content {
              @include justify-content(space-between);

              .address-item {
                padding: 15px 50px;
              }
            }
          }
        }
      }
    }
  }
</style>
