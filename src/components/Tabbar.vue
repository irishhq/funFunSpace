<template>
  <div id="tabbar">
    <!-- 底部导航栏 -->
    <nav class="bar tab-bar">
      <router-link v-for="(item, index) in tabArr" class="tab-item" active-class="active" :to="item.to" :key="item.id" @click="tab(index)">
        <span class="icon" :class="item.icon" id="icon"></span>
        <span class="tab-label">{{item.title}}</span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      tabArr: [
        {
          id: 0,
          icon: "icon-home",
          title: "首页",
          to: "home"
        },
        {
          id: 1,
          icon: "icon-purchase",
          title: "申购",
          to: "purchase"
        },
        {
          id: 2,
          icon: "icon-mime",
          title: "个人中心",
          to: "mime"
        }
      ]
    };
  },
  methods: {
    tab(index) {
      console.log(index);
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/stylesheet/common.scss";
$baseImgUrl: "../assets/img/icon/";
.bar {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  background: #fff;
}
.tab-bar {
  position: fixed;
  bottom: 0;
  height: 104px;
  @include displayFlex(space-around, center, row);
  font-size: $font-sm;
  a {
    color: $dark-gray;
  }
  .active {
    color: $blue;
    .icon.icon-home {
      background-image: url($baseImgUrl+"1-1.png");
    }
    .icon.icon-purchase {
      background-image: url($baseImgUrl+"2-2.png");
    }
    .icon.icon-mime {
      background-image: url($baseImgUrl+"3-3.png");
    }
  }
  .tab-item {
    @include displayFlex(center, center, column);
    .icon,
    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: {
        size: contain;
        repeat: no-repeat;
      }
    }
    .icon-home {
      background-image: url($baseImgUrl+"1.png");
    }
    .icon-purchase {
      background-image: url($baseImgUrl+"2.png");
    }
    .icon-mime {
      background-image: url($baseImgUrl+"3.png");
    }
  }
}
</style>
