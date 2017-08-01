<template>
  <section class="info-nav">
    <div class="info-nav-content">
      <div class="info-nav-single">
        <a class="icon-pointer">
          <div class="eben-icon eben-icon-service" :style="styles.ebenIconService"></div>
          <p><icon class="icons" name="wrench"></icon><span>客服网点</span></p>
        </a>
      </div>
      <div class="info-nav-single">
      <a class="icon-pointer">
        <div class="eben-icon eben-icon-contact" :style="styles.ebenIconContact"></div>
        <p><icon class="icons" name="telephone"></icon><span>联系我们</span></p>
      </a>
      </div>
      <div class="info-nav-single">
        <a class="icon-pointer">
          <div class="eben-icon eben-icon-business" :style="styles.ebenIconBusiness"></div>
          <p><icon class="icons" name="keys"></icon><span>渠道招商</span></p>
        </a>
      </div>
      <div class="info-nav-single">
        <a class="icon-pointer">
          <div class="eben-icon eben-icon-join" :style="styles.ebenIconJoin"></div>
          <p><icon class="icons" name="email"></icon><span>加入我们</span></p>
        </a>
      </div>
      <div class="info-nav-single">
        <a class="icon-pointer">
          <div class="eben-icon eben-icon-statement" :style="styles.ebenIconStatement"></div>
          <p><icon class="icons" name="message"></icon><span>隐私声明</span></p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'info-nav',

  data () {
    return {
      styles: {
        ebenIconService: {
          background: 'url("http://img1.ereneben.com/new_images/icon.png") no-repeat',
          backgroundPosition: '0 -100px'
        },
        ebenIconContact: {
          background: 'url("http://img1.ereneben.com/new_images/icon.png") no-repeat',
          backgroundPosition: '0 -220px'
        },
        ebenIconBusiness: {
          background: 'url("http://img1.ereneben.com/new_images/icon-business.png") no-repeat',
        },
        ebenIconJoin: {
          background: 'url("http://img1.ereneben.com/new_images/icon.png") no-repeat',
          backgroundPosition: '0 -280px'
        },
        ebenIconStatement: {
          background: 'url("http://img1.ereneben.com/new_images/icon.png") no-repeat',
          backgroundPosition: '0 -340px'
        },
      }
    }
  },

  components: {

  },

  computed: {
  },

  methods: {

  }
}
</script>

<style type="text/css" lang="scss">
@import './../../assets/scss/variables.scss';
@import './../../assets/scss/mixins.scss';

#app .info-nav {
  min-height: 100px;
  max-width: $common-content-width;
  margin: 0 auto;

  .info-nav-content {
    padding: 50px 15px;
    display: -webkit-flex;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .info-nav-single {
      position: relative;

      a {
        width: 80px;
        height: 90px;
        font-size: 15px;
        line-height: 1.5em;
        color: $char-hover-color;
        text-align: center;
        display: block;
        float: left;
        transition: all 0.25s ease-in-out;

        .eben-icon {
          background: url("#{$eben-resource-domain}/new_images/icon.png") 0 -40px no-repeat;
          margin: 0 auto 12px;
          width: 51px;
          height: 51px;
        }

        .icons {
          display: none;
          color: inherit;
        }

        p {

        }
      }

      a:hover {
        color: $char-color;
        cursor: pointer;
      }
    }

  }
}

@media (max-width: #{$responsive-width-small}) {
  #app .info-nav {

    .info-nav-content {
      flex-flow: column;
      padding: 15px 15px 0;

      .info-nav-single {
        padding: 15px;

        a {
          height: auto;
          width: 100%;

          .eben-icon {
            display: none;
          }

          .icons {
            display: inline-block;
          }

          p {
            margin: 0;

            span {
              padding-left: 5px;
            }
          }
        }

      }
    }
  }

}
</style>
