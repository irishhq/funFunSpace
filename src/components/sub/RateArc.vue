<template>
  <div id="arc">
    <svg :style="`width: ${size}; height: ${size}`" class="ring-container">
      <defs>
        <filter id="blur-filter" x="-2" y="-2" width="200" height="200">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>
      <!-- 底部圆环 -->
      <circle :cx="pos" :cy="pos" :r="r" :stroke="bgColor" :stroke-width="width" fill="transparent"></circle>
      <!-- 比例圆环 -->
      <circle id="arc" :cx="pos" :cy="pos" :r="r" class="ring" :stroke-width="width" :stroke="rate === 0 ? 'transparent': color" :style="`stroke-dasharray: ${arc} ${per}`" :stroke-dashoffset="arc" fill="transparent"></circle>
      <!-- 圆环比例分割线 -->
      <circle :cx="pos" :cy="pos" :r="r" stroke="white" :stroke-width="width" fill="transparent" :style="`stroke-dasharray: 1 ${(per-20*1)/20}`"></circle>
      <circle filter="url(#blur-filter)" :cx="pos" :cy="pos" :r="r+width/2-4" stroke="black" stroke-width="1" fill="transparent"></circle>
      <circle filter="url(#blur-filter)" :cx="pos" :cy="pos" :r="r-width/2+3" stroke="black" stroke-width="1" fill="transparent"></circle>
      <!-- 圆环文本 -->
      <text id="txt" :x="pos" :y="pos" :fill="color">{{rate}}%</text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtPosX: "",
      txtPosY: "",
      kong: this.per / 20,
      ge: this.per / 100
    };
  },
  computed: {
    pos() {
      return this.size / 2; /* 中心点位置 */
    },
    r() {
      return this.size / 2 - this.width / 2; /* 半径 */
    },
    per() {
      return parseInt(this.r * Math.PI * 2); /*周长*/
    },
    arc() {
      return parseInt(
        this.per * (this.rate === 0 ? 0 : this.rate / 100)
      ); /*弧长*/
    }
  },
  props: {
    size: {
      type: Number,
      default: 100
    } /*圆环尺寸 & 画布尺寸*/,
    width: {
      type: Number,
      default: 5
    } /*圆环宽度*/,
    rate: {
      type: Number,
      default: 60
    } /*绘制圆环比例*/,
    color: {
      //圆环填充颜色
      type: String,
      default: "red"
    },
    bgColor: {
      //圆环背景色
      type: String,
      default: "#fe3"
    }
  }
};
</script>

<style lang="scss">
.ring-container {
  .ring {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    animation: dash 3s forwards;
  }
  text {
    font-size: 30px;
    text-anchor: middle;
    dominant-baseline: middle;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
