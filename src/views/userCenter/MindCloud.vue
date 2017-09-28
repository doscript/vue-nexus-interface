<template>
  <div class="mind-cloud">
    <bread-title></bread-title>
    <section class="page">
      <div class="page-body">
        <p>开通时间：2014-07-23 14:49</p>
        <p>当前已开通： 2G基础版</p>
        <div class="chart-content">
          <div id="charts"></div>
        </div>
        <p>提示：如果您要进行更多操作，请使用E本登陆。</p>
      </div>
    </section>
  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'
  import { $utils, $auth } from '@helper'
  import BreadTitle from './BreadTitle'
  import eCharts from 'echarts'
  require('echarts/theme/macarons');

  export default {
    name: 'MindCloud',

    data () {
      return {
        loginInfo: $auth.getLoginInfo(),
        options: {
          title : {
            text: '空间使用情况',
            subtext: '总空间：2GB(2048MB) 可用空间：2031MB',
            x:'left'
          },
          color:['#b86c2a', '#4484d4','#d5422d','#E5AC35','#900088','#e35385','#6fad06','#e1ded7'],
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}MB ({d}%)"
          },
          toolbox: {
            show : false,
            feature : {
              dataView : {show: false, readOnly: true},
              restore : {show: false},
              saveAsImage : {show: false}
            }
          },
          calculable : false,
          series : [
            {
              name:'使用空间',
              type:'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:0.01, name:'记事本 0.01MB'},
                {value:9.38, name:'文稿 9.38MB'},
                {value:1.88, name:'手绘 1.88MB'},
                {value:0.01, name:'网摘 0.01MB'},
                {value:5.88, name:'文档 5.88MB'},
                {value:0.01, name:'照片 0.01MB'},
                {value:0.01, name:'网址 0.01MB'},
                {value:2031, name:'可用 2031MB'}
              ]
            }
          ]
        },

      }
    },

    computed: {},

    created () {

      this.$utils.scrollTop();
    },

    mounted () {

      this.initECharts();
    },

    props: {

    },

    watch: {

    },

    components: {
      BreadTitle: BreadTitle
    },

    methods: {

      initECharts() {
        let myChart = eCharts.init(document.getElementById('charts'), 'macarons');

        myChart.setOption(this.options);
      }
    },

  }
</script>

<style type="text/css" lang="scss">
  @import "../../assets/scss/variables.scss";

  #app .mind-cloud {

    section {
      width: $common-content-width-xxs;
      margin: 0 auto;
    }

    section.page {

      .page-body {
        padding: 5px 0;

        p {
          line-height: $common-line-height;
          margin: 0;
          padding: 5px 0;
        }

        .chart-content {
          width: 100%;
          background: #2b2b2b;
          border-radius: 10px;
          padding: 5px;
          border: 2px solid #{$divider-color};

          #charts {
            width: 100%;
            margin: 0 auto;
            height: 100vw;
            max-height: 400px;
            min-height: 290px;
          }
        }
      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .mind-cloud {

      section.page {

        .page-body {

        }
      }
    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .mind-cloud {

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
