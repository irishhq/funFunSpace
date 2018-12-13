<template>
  <div class="app-reset-pwd">
    <!-- 导航栏 -->
    <div class="nav-wrap">
      <div class="nav-bar">
        <span>
          <a href="">&lt;</a>
        </span>
        <h3>忘记密码</h3>
        <span>
          <a href=""></a>
        </span>
      </div>
    </div>

    <!-- 忘记密码表单 -->
    <form action="/">
      <div class="block">
        <img src="../../assets/img/login_signin/phone.png">
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="block">
        <img src="../../assets/img/login_signin/nick_name.png">
        <input type="password" placeholder="请输入昵称">
      </div>
      <div class="block">
        <div class="idcode">
          <img src="../../assets/img/login_signin/idcode.png">
          <input class="" type="password" placeholder="请输入验证码">
        </div>
        <button class="get-idcode">获取验证码</button>
      </div>
    </form>
    <!-- 确定,提交表单按钮 -->
    <div>

    </div>
    <button type="submit" class="block">
      确定
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../assets/stylesheet/common.scss";

.app-reset-pwd {
  z-index: 999;
  width: 100%;
  height: 100%;
  background: $light-gray;
  input::placeholder {
    color: $dark-gray;
  }
  button,
  a,
  h3 {
    color: $white;
  }
}
// 导航栏
.app-reset-pwd .nav-wrap {
  height: $nav-height;
  background: {
    color: #9dc3da;
    image: url("../../assets/img/login_signin/status_bar.png");
    size: cover;
  }
  .nav-bar {
    font-size: $font-lg;
    padding-top: 30px;
    @include displayFlex(space-between, center, row);
    h3 {
      font: {
        size: $font-lg;
        weight: lighter;
      }
    }
    span {
      width: 27px;
      height: 45px;
      margin-left: 42px;
    }
  }
}
// 表单
.app-reset-pwd > form {
  margin-top: 18px;
  background: $white;
  padding: 30px 0;
  .block {
    @extend .block-size;
    margin-top: $margin-top;
    margin: 0 auto;
  }
  // 用户输入表单
  & > div {
    border-bottom: 2px solid $light-gray;
    position: relative;
    input {
      background: transparent;
      margin-left: $margin-sm;
      font-size: $font-md;
      color: $dark-gray;
    }
    img {
      @extend .icon-size;
      margin: {
        left: $margin-sm;
        bottom: -5px;
      }
    }

    &:last-child {
      border: none;
    }
    //获取验证码
    .get-idcode {
      width: $block-width/2 - 30px;
      float: right;
      background-color: $dark-gray;
      border-radius: 8px;
      height: 60px;
      position: relative;
      margin-top: -62px;
      font: {
        size: $font-sm;
        weight: lighter;
      }
    }
  }
  // 验证码边框重置;
  .idcode {
    @include displayFlex(flex-start, center, row);
    height: $block-height;
    width: $block-width/2;
    margin-left: 0;
    border-bottom: 2px solid $light-gray;
  }
}
// 登录按钮
.app-reset-pwd button[class="block"] {
  @extend .block-size;
  margin: $margin-md $margin-lg;
  background: $blue;
  font-size: $font-lg;
  border-radius: 12px;
}
</style>
