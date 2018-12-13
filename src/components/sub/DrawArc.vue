<template>
  <div id="arc">
    绘制圆环子组件
    <svg>
      <circle :cx="cx" :cy="cx" :r="r" :stroke="backgroundColor" :stroke-width="width" fill="transparent"></circle>
    </svg>
    <circle :cx="cx" :cy="cx" :r="r" class="ring" :stroke-width="width" :stroke="rate === 0 ? 'transparent': color" :style="`stroke-dasharray: ${arc} ${per}`" stroke-linecap="round" fill="transparent"></circle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 200,
      width: 5,
      rate: 20,
      color: "red",
      backgroundColor: "black"
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
  }
};
</script>

<style>
</style>
