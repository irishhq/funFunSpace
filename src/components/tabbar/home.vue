<template>
    <div class="app-home">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="img in swiperImgs" :key="img.id">
                <img :src="img.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 主选项区 -->
        <section class="tab">
            <router-link class="tab-item active" to="/home">
                <span class="icon icon-home"></span>
                <span class="tab-label">积分</span>
            </router-link>
            <router-link class="tab-item" to="/purchase">
                <span class="icon icon-purchase"></span>
                <span class="tab-label">奖金</span>
            </router-link>
            <router-link class="tab-item" to="/personal">
                <span class="icon icon-personal"></span>
                <span class="tab-label">权重码</span>
            </router-link>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      swiperImgs: []
    };
  },
  methods: {
    getSwiperImgs() {
      var url = "http://127.0.0.1:3000/getSwiperImgs";
      this.axios.get(url).then(res => {
        this.swiperImgs = res.data;
      });
    }
  },
  created() {
    this.getSwiperImgs();
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/common.scss";
.app-home {
  // 轮播图
  .mint-swipe {
    height: 450px;
    img {
      width: 100%;
      height: 450px;
    }
  }
  //选项卡
  .tab {
    //   position: fixed;
    //   bottom: 0;
    height: 104px;
    @include displayFlex(space-around, center, row);
    font-size: $font-md;
    a {
      color: $dark-gray;
    }
    .active {
      color: $blue;
    }
    .tab-item {
      @include displayFlex(center, center, column);
      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: {
          size: contain;
          repeat: no-repeat;
        }
      }
      .icon-home {
        background-image: url("");
      }
      .icon-purchase {
        background-image: url("");
      }
      .icon-personal {
        background-image: url("");
      }
    }
  }
}
</style>
