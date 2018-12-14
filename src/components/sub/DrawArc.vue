<template>
  <div id="arc">
    绘制圆环子组件
    <svg :style="`width: ${size}; height: ${size}`">
      <circle :cx="cx" :cy="cx" :r="r" :stroke="backgroundColor" :stroke-width="width" fill="transparent"></circle>
    </svg>
    <circle :cx="cx" :cy="cx" :r="r" class="ring" :stroke-width="width" :stroke="rate === 0 ? 'transparent': color" :style="`stroke-dasharray: ${arc} ${per}`" stroke-linecap="round" fill="transparent"></circle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // size: 50,
      // width: this.width,
      // rate: 20,
      // color: "red",
      // backgroundColor: "black"
    };
  },
  computed: {
    cx() {
      //中心点位置
      return this.size / 2;
    },
    r() {
      //半径
      return this.size;
    },
    per() {
      //周长
      return parseInt(this.r * Math.PI * 2);
    },
    arc() {
      //弧长
      return parseInt(this.per * (this.rate === 0 ? 0 : this.rate / 100));
    }
  },
  props: {
    size: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 5
    },
    rate: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "red"
    },
    backgroundColor: {
      type: String,
      default: "blue"
    }
  }
};
</script>

<style lang="scss">
.ring-container {
  .ring {
    transform: rotate(-89deg);
    transform-origin: 50% 50%;
    transition: all 1s;
  }
}
</style>
