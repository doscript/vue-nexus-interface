<template>
  <div class="product">
    <section class="page">
      <div class="page-body">

      </div>
    </section>

  </div>
</template>

<script>
  import { EbenResourceDomain, EbenDomain } from '@constants/index'

  export default{
    name: 'Product',

    data () {
      return {
        data: {
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

  #app .about-index {

    section.page {
      width: 100%;
      min-height: $product-section-height;
      overflow: hidden;

      .page-body {

      }
    }

  }

  @media (min-width: #{$responsive-width-xs}) {
    #app .about-index {

    }
  }

  @media (min-width: #{$responsive-width-small}) {
    #app .about-index {

    }
  }
</style>
