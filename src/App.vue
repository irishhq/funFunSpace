<template>
  <div id="app">
    <div v-if="!isfullScreen">
      <!-- 底部导航栏 -->
      <nav class="bar tab-bar">
        <router-link class="tab-item active" to="/home">
          <span class="icon icon-home"></span>
          <span class="tab-label">首页</span>
        </router-link>
        <router-link class="tab-item" to="/purchase">
          <span class="icon icon-purchase"></span>
          <span class="tab-label">申购</span>
        </router-link>
        <router-link class="tab-item" to="/personal">
          <span class="icon icon-personal"></span>
          <span class="tab-label">个人中心</span>
        </router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isfullScreen: false
    };
  },
  watch: {
    $route(e) {
      if (e.name == "login") {
        this.isfullScreen = false;
      } else {
        this.isfullScreen = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/stylesheet/common.scss";
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
.bar {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
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
      background-image: url("./assets/img/icon/1-1.png");
    }
    .icon-purchase{
      background-image: url("./assets/img/icon/2.png")
    }
    .icon-personal{
      background-image: url("./assets/img/icon/3.png")
    }
  }
}
</style>
