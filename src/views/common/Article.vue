<template>
  <div class="article">
    <section class="page">
      <div class="page-body">
        <div class="eben-wrap">
          <div class="title">
            <h3 v-html="article.title">{{ article.title }}</h3>
          </div>
          <div class="remark">
            <p v-if="article.author && article.author != ''">作者：{{ article.author }}</p>
            <p v-if="article.time && article.time != ''">发布时间：{{ article.time }}</p>
          </div>
          <div class="content" v-html="article.content">
            {{ article.content }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils } from '@helper'

  export default {
    name: 'Article',

    data () {
      return {
        query: this.$route.query,
        article: {
          title: '',
          author: '',
          time: '',
          content: '',
        },
      }
    },

    computed: {},

    created () {

      this.$utils.scrollTop();

      this.initArticle();
    },

    mounted () {

    },

    props: {

    },

    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'initArticle'

    },

    components: {

    },

    methods: {

      initArticle() {
        console.log(this.query);
        if (this.query.type == 'customerService') {
          if (this.query.id == '1') {
            this.article = {
              title: '<span style="color: yellow;">测试用的测试用的测试用的</span>',
              content: '<p style="color: #1461ca;"><strong style="color: #ffffff;">一、本站服务条款的确认和接纳</strong><br><br><img src="http://img1.ereneben.com/new_images/focus_2.jpg" style="width: 100%; height: auto;"><br><br>&nbsp;&nbsp;&nbsp;&nbsp;本站的各项电子服务的所有权和运作权归本站。每项电子服务将按照该项服务发布的服务协议条款和操作程序执行，用户可以选择需要的电子服务并按该项服务的要求签署协议，签署本服务协议并不代表已经签署了各项电子服务的协议，同时也并不代表必然享受本站的各项电子服务。用户必须完全同意本服务协议的条款并完成注册程 序，才能成为本站的正式用户。</p><br><table border="0" width="400" cellspacing="0" cellpadding="0" align="center"><tbody><tr> <td align="left">地址：北京市朝阳区建国路91号金地中心A座29层</td></tr><tr><td align="left">邮编：100022</td></tr> <tr><td align="left">电话：010-57575050</td></tr><tr><td align="left">传真：010-57575151</td></tr></tbody></table><br><p><a style="color: #aaa;" href="http://www.test.eben.cn/about/detail_presetApp">点击查看：预置应用列表</a></p>',
              time: '1970-01-01',
              author: '壹人壹本'
            }
          } else {
            this.article = {
              title: '<span style="color: #00847c;">测试不带作者和时间的文章</span>',
              content: '<p>Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。</p><video controls="controls" preload="preload" width="100%" height="100%" style="max-width: 600px;"><source src="http://img1.ereneben.com/video/userfinal.mp4" type="video/mp4"></video>',
            }
          }
        }
        if (this.query.type == 'contact') {
          this.article = {
            title: '联系我们',
            content: '<p><strong>销售支持：010-83189026</strong></p><p><strong>技术支持：010-83189071</strong></p><p><strong>客服支持：400-139-1010</strong></p>',
          }
        }
        if (this.query.type == 'business') {
          this.article = {
            title: '渠道招商',
            content: '<br><br><br><br><br><p style="text-align: center">E人E本全国招商热线：010-83189026</p><br><br><br><br><br>',
          }
        }
        if (this.query.type == 'joinus') {
          this.article = {
            title: '加入我们',
            content: '<p style="text-align: left;" align="center">&nbsp;</p><p style="text-align: left;" align="center"><strong>职位一：大客户销售经理（E人E本）</strong></p> <p style="text-align: left;" align="center">岗位职责：</p><p style="text-align: left;" align="center">1、负责大客户（政府、企业、教育、金融、石油、船舶等）的开发、沟通、维护；</p><p style="text-align: left;" align="center">2、负责行业渠道拓展、销售目标的实现；</p><p style="text-align: left;" align="center">3、负责项目、业务的跟进、实施；</p><p style="text-align: left;" align="center">4、负责行业项目的信息收集、整理。</p><p style="text-align: left;" align="center">任职要求：</p><p style="text-align: left;" align="center">1、本科以上学历，市场营销、软件相关专业；</p><p style="text-align: left;" align="center">2、1年以上IT行业销售经验，倾向于IT行业发展，有一定想法、浓厚兴趣的优先；</p><p style="text-align: left;" align="center">3、善于所在行业客户的拓展、业务关系的维护；</p><p style="text-align: left;" align="center">4、熟悉移动行业，移动终端产品的市场情况、技术指标、价格体系；</p><p style="text-align: left;" align="center">5、勤奋敬业，独立工作能力强，善于合作，仪表大方。</p><p style="text-align: left;" align="center">&nbsp;</p><p style="text-align: left;" align="center"><strong>职位二：大区销售经理（8848</strong><strong>手机）</strong></p><p>岗位职责：</p><p>1、与代理商日常沟通，承担所负责区域的销售任务；</p><p>2、负责区域内终端零售网点的建设及运营，承担品牌在所辖区域的经营工作；</p><p>3、配合代理商就终端的选址、装修以及店面建设等工作；</p><p>4、对终端的销售人员日常工作进行规范管理；</p><p>5、配合或根据需求开展各类营销活动，确保日常的销售最大化；</p><p>6、及时掌握行业信息，关注业内竞品信息、及时向公司反馈。</p><p>任职要求：</p><p>1、具有3年以上手机、IT行业销售、渠道开拓工作经验；</p><p>2、具有通讯手机行业经验者优先；</p><p>3、具备一定的培训能力；</p><p>4、具有较强的沟通表达能力。</p><p>&nbsp;</p><p><strong>职位三：销售培训师（8848</strong><strong>手机）</strong></p><p>岗位职责：</p><p>1、按照培训计划，进行培训需求收集分析、问题整理分析；</p><p>2、定期制作更新各产品、平台等培训所需的课件；</p><p>3、培训实施、门店培训，协助公司相关会议、市场活动中有关产品的讲解培训；</p><p>4、熟练掌握公司产品的性能特点，使用方法和演示要点，及时学习产品最新的功能变化；</p><p>5、培训效果评估，进一步优化培训内容及形式；</p><p>6、开发公司所需的其他课程及交办的其他工作。</p><p>任职要求：</p><p>1、具备奢侈品培训工作经验优先；</p><p>2、开朗大方、形象气质佳、思维敏捷；</p><p>3、具备培训常规知识，熟练操作办公软件；</p><p>4、具备较强的表达能力、沟通能力和亲和力；</p><p>5、工作踏实、认真、有耐心，并具有良好的团队合作精神；</p><p>6、可接受经常出差。</p><p>&nbsp;<p><p><strong>职位四：Android</strong><strong>高级工程师</strong></p><p>岗位职责：</p><p>1、InkSDK的开发改进 (android)</p><p>2、云服务客户端的开发改进</p><p>3、负责Android客户端开发流程的控制及优化</p><p>4、参与产品的系统架构设计，代码开发，单元测试和bug修复工作；</p><p>5、与产品、测试等相关人员配合共同完成产品的研发工作。</p><p>任职要求：</p><p>1、计算机应用等相关专业本科或以上学历,3年以上工作经验;</p><p>2、良好的Java或者C/C++技术功底，熟悉Android系统框架，熟练使用Android开发工具;</p><p>3、可独立快速完成产品原型开发，良好的英文阅读学习能力。</p><p>&nbsp;</p><p>简历发送邮箱：</p><p>zhanglimei@eben.cn</p>',
          }
        }
        if (this.query.type == 'statement') {
          this.article = {
            title: '隐私申明',
            content: '<p><strong><span style="font-size: medium;">&nbsp;</span></strong></p><p>本法律声明适用于所有访问本网站的用户或浏览者。您访问本网站即说明您已同意以下条款，如您不同意以下任何一个条款，请停止使用本网站。</p><br><ul><li>本网站由北京壹人壹本信息科技有限公司（以下简称“壹人壹本”）所有并运营，壹人壹本保留随时修改本法律声明的权利。&nbsp;</li><br><li>本网站所载的所有材料和内容受中华人民共和国和其他国家的版权法及其他法律的保护。所有页面设计、页面内容的版权，除非另有说明，均为壹人壹本所有。未经壹人壹本书面授权或同意，您不得将本网站上的任何内容以任何方式进行复制、经销、翻印、播放、以超级链路连接或传送、以"镜像法"载入其他服务器上、存储于信息检索系统或者进行其他任何商业目的的使用，但您基于非商业的、个人的目的复制、下载或打印（条件为保持版权和其他专有标识的完整性，且须保留该材料中的版权说明或其他所有权说明）的除外。</li><br><li>本网站上使用的商标、标志，除非另有说明，为壹人壹本或其关联公司所有，依法受商标法及其他法律的保护。本网站所载的任何内容不应被视作壹人壹本以明示、暗示、不反对或其他形式授予您使用前述任何商标、标志的许可或权利。未经事先书面许可，任何人不得以任何方式使用壹人壹本的名称及壹人壹本的商标、标记。</li><br><li>本网站所载的材料和信息，包括但不限于文本、图片、数据、观点、建议、网页或链路，壹人壹本并不保证其准确、完整、充分或具有可靠性，并且明确声明不对这些材料和内容的错误或遗漏承担责任。壹人壹本对本网站内容没有作任何明示或默示的保证，包括但不限于：担保、商业或其他特定目的的适用性、不侵权、质量合格、准确、完整、无计算机病毒的保证。壹人壹本不保证本网站不会中断或没有错误。</li><br><li>壹人壹本保留在没有任何通知和提示的情况下对本网站的内容进行修改的权利。为了获得最新的信息，请您随时访问本网站。壹人壹本对本网站上的任何产品、服务或信息未做任何明示的或默认的保证、声明或认可。所有产品、服务的销售价格或其他交易条件最终以您和壹人壹本或经销商的合同约定为准。</li><br><li>本网站可能保留有与第三方网站或网址的链接，您有权自由决定是否访问链接的网站，壹人壹本并不保证这些链接上所提供的信息、数据、观点、图片、陈述或建议的准确性、完整性、充分性和可靠性。壹人壹本提供这些链接的事实，仅为了为您提供方便，并不代表壹人壹本对这些信息的推荐或存在关联。</li><br><li>除非为了登录本网站E本社区中心或其他特定目的，一般情况下，您无需提供任何信息即可以浏览本网站。但我们可能基于安全、统计页面访问数量等考虑跟踪您的IP地址、页面访问数据等。</li><br><li>若您访问了本网站社区，应严格遵守中华人民共和国版权法及其他法律，任何转载或转贴都应注明真实作者和真实出处。您在本网站社区发布任何内容，都视为已经许可壹人壹本在本网站范围内引用、发布、转载。本网站对于您发布的内容所引发的版权、署名权的异议、纠纷不承担任何责任，您的言论纯属个人行为，与本网站立场无关。媒体转载本网站的内容须事先与原作者和本网站联系。</li><br></ul>',
          }
        }
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";
  @import "../../assets/scss/mixins.scss";

  #app .article {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {

        .eben-wrap {
          padding: #{$common-padding} 0;

          .title {
            padding: #{$common-padding} 0;
            text-align: center;
          }

          .remark {
            text-align: center;

            p {
              margin: 0;
              padding: 15px 0;
            }
          }

          .content {
            padding: #{$common-padding} 0;
            font-size: $font-medium;
            line-height: 24px;
            overflow-x: auto;

            p {
              line-height: 24px;
              margin: 0;
            }

            video {
              border: 3px solid #fafafa;
              border-radius: 3px;
              margin: #{$common-margin} auto;
              @include flex();
              @include justify-content();
            }
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .article {

      section.page {

        .page-body {

        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .article {

      section {
        width: $common-content-width-small;
      }

      section.page {

        .page-body {

        }
      }
    }
  }
</style>
