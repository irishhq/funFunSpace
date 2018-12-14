<template>
  <div id="app-home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="img in swiperImgs" :key="img.id">
        <img :src="img.img_url">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 主选项区 -->
    <section class="tab">
      <a class="tab-item" v-for="(item,index) in tabArr" :key="item.id" @click="tab(index)">
        <span class="icon" :class="item.icon"></span>
        <span class="tab-label">{{item.title}}</span>
      </a>
    </section>
    <!-- 主选项区内容 -->
    <section class="tab-content">
      <!-- score选项内容 -->
      <div v-show="0==tabIndex">
        <p>
          <span>报单积分投资:</span>
          <span>0</span>
        </p>
        <p>
          <span>申购积分投资:</span>
          <span>0</span>
        </p>
        <div class="divi-line"></div>
        <p>
          <span>积分:</span>
          <span>0</span>
        </p>
      </div>
      <!-- award选项内容 -->
      <div v-show="1==tabIndex">
        <p>
          <span>收益钱包:</span>
          <span>0</span>
        </p>
        <div class="divi-line"></div>
        <p>奖金钱包</p>
        <p>
          <span>锁仓量:</span>
          <span>0</span>
        </p>
        <p>
          <span>交易钱包:</span>
          <span>0</span>
        </p>
      </div>
      <!-- wallet(wcode)选项内容 -->
      <div v-show="2==tabIndex">
        <p>
          <span>权重码:</span>
          <span>0</span>
          <span>
            <button class="purchase">充值</button>
          </span>
        </p>
      </div>
    </section>
    <!-- 投资 -->
    <section class="invest">
      <router-link class="invest-item" to="/score">
        <div>
          <span class="icon icon-invest"></span>
          <span>报单积分投资</span>
        </div>
        <div>
          <span class="icon icon-right"></span>
        </div>
      </router-link>
      <router-link class="invest-item" to="/score">
        <div>
          <span class="icon icon-invest"></span>
          <span>申购积分投资</span>
        </div>
        <div>
          <span class="icon icon-right"></span>
        </div>
      </router-link>
    </section>
    <!-- 数据canvas展示 -->
    <section class="data-canvas">
      <draw-arc></draw-arc>
    </section>
    <div class="tab-hack"></div>
  </div>
</template>

<script>
//1. 引入子组件
import DrawArc from "../sub/DrawArc.vue";
export default {
  data() {
    return {
      tabIndex:0,
      swiperImgs: [],
      tabArr: [
        {
          id: 1,
          title: "积分",
          icon: "icon-award"
        },
        {
          id: 2,
          title: "奖金",
          icon: "icon-score"
        },
        {
          id: 3,
          title: "钱包",
          icon: "icon-wcode"
        }
      ],
      rate: 20
    };
  },
  methods: {
    getSwiperImgs() {
      var url = "http://127.0.0.1:3000/getSwiperImgs";
      this.axios.get(url).then(res => {
        this.swiperImgs = res.data;
      });
    },
    tab(index) {
      this.tabIndex = index;
    }
  },
  created() {
    this.getSwiperImgs();
  },
  components: {
    "draw-arc": DrawArc
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/common.scss";
$baseImgUrl: "../../assets/img/home/";
#app-home {
  bottom: 104px;
  a {
    color: black;
  }
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
    height: 250px;
    @include displayFlex(space-around, center, row);
    font-size: $font-md;
    background-color: $white;
    .tab-item {
      @include displayFlex(center, center, column);
      .icon {
        display: inline-block;
        width: 144px;
        height: 144px;
        background: {
          size: contain;
          repeat: no-repeat;
        }
        margin-bottom: 6px;
      }
      .icon-award {
        background-image: url($baseImgUrl+"icon-award.png");
      }
      .icon-score {
        background-image: url($baseImgUrl+"icon-score.png");
      }
      .icon-wcode {
        background-image: url($baseImgUrl+"icon-wcode.png");
      }
    }
  }
  //选项卡内容
  .tab-content {
    width: 670px;
    margin: 0 auto;
    p {
      padding: 0 $margin-md;
      margin: 0;
      // height: 60px;
      line-height: 60px;
    }
    .purchase {
      background: linear-gradient(to bottom, #ffe24b, #ffaa1d);
      color: $white;
      width: 144px;
      height: 55px;
      float: right;
      bottom: $margin-sm;
      border-radius: 10px;
      font-size: $font-sm;
    }
  }
  //invest投资
  .invest {
    background-color: $white;
    .invest-item {
      margin: $margin-sm 41px;
      @include displayFlex(space-between, center, row);
      height: 83px;
      div {
        @include displayFlex(space-between, center, row);
      }
      .icon {
        display: inline-block;
        background-size: contain;
      }
      .icon-invest {
        width: 59px;
        height: 65px;
        margin-right: $margin-sm;
        background-image: url($baseImgUrl+"icon-invest.png");
      }
      .icon-right {
        width: 30px;
        height: 30px;
        background: {
          image: url($baseImgUrl+"icon-right.png");
          size: contain;
          repeat: no-repeat;
        }
      }
    }
  }
  // 数据canvas展示
  .data-canvas canvas {
    width: 200px;
    height: 200px;
    background-color: #eee;
    display: block;
    margin: 0 auto;
  }
}
// 分割线
.divi-line {
  @include divi-line(670px, #999, 1px);
}
// 解决底部导航栏遮盖页面内容的hack方式
.tab-hack {
  height: $tab-height;
}
</style>
