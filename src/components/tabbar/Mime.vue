<template>
  <div id="mime">
    <!-- 个人中心 -->
    <!-- 个人中心头部 -->
    <div class="mime-header">
      <button class="double-throw">复投</button>
      <div class="user-info">
        <img src="../../assets/img/mime_icon/mime_avatar.png" alt="">
        <p class="uname">{{userInfo.uname}}</p>
        <p>{{userInfo.phone}}</p>
        <p>会员状态: {{userInfo.state}}</p>
      </div>
      <div class="quota">
        <div>
          <span>2000</span>
          <span>额度</span>
        </div>
        <div>
          <span>1000</span>
          <span>已使用额度</span>
        </div>
      </div>
    </div>
    <!-- 个人中心内容区域 -->
    <div class="mime-content">
      <section>
        <div class="content-wrap">
          <h3>记录</h3>
          <div class="divi-line"></div>
          <div class="grid">
            <router-link v-for="(item, index) in linkArr" class="tab-item" :to="item.to" :class="{'newline': 0 === index % 2}" :key="item.id" v-model="item.id">
              <div class="item">
                <span class="icon">
                  <img :src="item.icon">
                </span>
                <span class="tab-label">{{item.title}}</span>
              </div>
            </router-link>
          </div>
        </div>

      </section>
      <section>
        <div class="content-wrap">
          <h3>我的</h3>
          <div class="divi-line"></div>
          <div class="grid">
            <router-link v-for="(item, index) in mimeLinkArr" class="tab-item" :to="item.to" :class="{'newline': 0 === index % 2}" :key="item.id" v-model="item.id">
              <div class="item">
                <span class="icon">
                  <img :src="item.icon">
                </span>
                <span class="tab-label">{{item.title}}</span>
              </div>
            </router-link>
          </div>
        </div>

      </section>
      <section>
        <div class="content-wrap">
          <h3>操作</h3>
          <div class="divi-line"></div>
          <div class="grid">
            <router-link v-for="(item, index) in opLinkArr" class="tab-item" :to="item.to" :class="{'newline': 0 === index % 2}" :key="item.id" v-model="item.id">
              <div class="item">
                <span class="icon">
                  <img :src="item.icon">
                </span>
                <span class="tab-label">{{item.title}}</span>
              </div>
            </router-link>
          </div>
        </div>

      </section>
    </div>
    <div class="tab-hack"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkArr: [
        {
          id: 1,
          icon: require("../../assets/img/mime_icon/mime_icon1_1.png"),
          to: "/",
          title: "转账记录"
        },
        {
          id: 2,
          icon: require("../../assets/img/mime_icon/mime_icon1_2.png"),
          to: "/",
          title: "挂卖记录"
        },
        {
          id: 3,
          icon: require("../../assets/img/mime_icon/mime_icon1_3.png"),
          to: "/",
          title: "交易订单记录"
        },
        {
          id: 4,
          icon: require("../../assets/img/mime_icon/mime_icon1_4.png"),
          to: "/",
          title: "申购记录"
        },
        {
          id: 5,
          icon: require("../../assets/img/mime_icon/mime_icon1_5.png"),
          to: "/",
          title: "投资订单记录"
        },
        {
          id: 6,
          icon: require("../../assets/img/mime_icon/mime_icon1_6.png"),
          to: "/",
          title: "申诉记录"
        },
        {
          id: 7,
          icon: require("../../assets/img/mime_icon/mime_icon1_7.png"),
          to: "/",
          title: "我的奖励"
        }
      ],
      mimeLinkArr: [
        {
          id: 1,
          icon: require("../../assets/img/mime_icon/mime_icon2_1.png"),
          to: "/",
          title: "我的团队"
        },
        {
          id: 2,
          icon: require("../../assets/img/mime_icon/mime_icon2_2.png"),
          to: "/",
          title: "我的邀请码"
        },
        {
          id: 3,
          icon: require("../../assets/img/mime_icon/mime_icon2_3.png"),
          to: "/",
          title: "我的收款账号"
        }
      ],
      opLinkArr: [
        {
          id: 1,
          icon: require("../../assets/img/mime_icon/mime_icon3_1.png"),
          to: "/",
          title: "留言"
        },
        {
          id: 2,
          icon: require("../../assets/img/mime_icon/mime_icon3_2.png"),
          to: "/resetPwd",
          title: "修改密码"
        },
        {
          id: 3,
          icon: require("../../assets/img/mime_icon/mime_icon3_3.png"),
          to: "/",
          title: "退出登录"
        }
      ],
      userInfo: {
        uname: "Jervi",
        phone: "15269855226",
        state: "冻结"
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/common.scss";
#mime {
  background: #eee;
  // 头部用户信息
  .mime-header{
    height: 480px;
    background: url("../../assets/img/mime_icon/bg_user.png");
    position: relative;
    color: $white;
    font-size: 21px;
    // 复投按钮
    .double-throw{
      position: absolute;
      width: 118px;
      height: 55px;
      top: 48px;
      right: 42px;
      background: linear-gradient(to bottom, #93ceec, #84bcea);
      border-radius: 5px;
      color: $white;
      font-size: 24px;
    }
    // 用户信息
    .user-info{ 
      img{
        width: 158px;
        height: 158px;
        margin: 0 auto;
        padding-top: 91px;
        display: block;
      }
      .uname{
        font-size: $font-lg;
      }
      p{
        @include displayFlex(center, center, columns);
        margin: 0;
        &:last-child{
          margin-top: 21px;
        }
      }
    }
    // 额度
    .quota{
      position: absolute;
      bottom: 0;
      background: rgba($color: #333, $alpha: 0.2);
      width: 100%;
      height: 91px;
      @include displayFlex(space-around, center, row);
      >div{
        @include displayFlex(space-around, center, column);
        span:first-child{
          font-size: 28px;
        }
      }
    }
  }
  // 主体内容
  .mime-content {
    section {
      background: $white;
      margin: $margin-md 0;
      .content-wrap {
        width: 670px;
        margin: 0 auto;
        padding-bottom: $margin-md;
        // 区域title
        h3 {
          font: {
            size: $font-md;
            weight: normal;
          }
          margin: 0 15px;
          line-height: 100px;
        }
        // 栅格布局
        .grid {
          width: 100%;
          display: block;
          font-size: $font-sm;
          .tab-item {
            width: 33.33333333%;
            color: $dark-gray;
            display: inline-block;
            text-align: center;
            &.newline {
              margin-top: 50px;
            }
            div.item {
              @include displayFlex(center, center, column);
              span.tab-label {
                margin-top: $margin-sm;
              }
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
            }
          }
        }
      }
    }
  }
}
.divi-line {
  @include divi-line(670px, #999, 1px);
}
.tab-hack {
  height: $tab-height;
}
</style>
