<template>
  <div class="app-login">
    <div class="bg">
    </div>
    <div class="wrap-login">
      <form action="/">
        <div class="block">
          <img src="../../assets/img/login_signin/uname.png" alt="用户名" v-model="uname">
          <input type="text" placeholder="请输入昵称" v-model="uname">
        </div>
        <div class="block">
          <img src="../../assets/img/login_signin/upwd.png" alt="密码">
          <input type="password" placeholder="请输入密码" v-model="upwd">
        </div>
      </form>
      <div class="block">
        <a href="#">忘记密码?</a>
        <a href="#">用户注册</a>
      </div>
      <button class="block" @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
// import { Toast } from "mint-ui";
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },

  methods: {
    handleLogin() {
      //1. 获取参数
      console.log(this.uname);
      var u = this.uname;
      var p = this.upwd;
      //2. 正则表达式验证

      //3. 发送请求
      var params = {
        uname: u,
        upwd: p
      };

      var url = "http://127.0.0.1:3000/login";
      this.axios
        .get(url, {
          params
        })
        .then(result => {
          console.log(result);
          var obj = result.data;
          if (obj.code == -1) {
            // Toast(obj.msg);
            console.log(obj.msg);
          } else if (obj.code == 1) {
            console.log(obj.msg);
            this.$router.push("/home");
          }
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/common.scss";
// position & size
$border-raduis: $block-height / 2;
$margin-top-large: 70px;

.app-login {
  z-index: 999;
  font-size: $font-lg;
  width: 100%;
  height: 100%;
  input,
  button,
  a,
  input::placeholder {
    color: $white;
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -99;
    filter: blur(5px);
    background: #9dc3da url("../../assets/img/login_signin/bg_login.jpg")
      no-repeat {
      size: cover;
    }
  }
}

.app-login .wrap-login {
  height: 100%;
  @include displayFlex(center, center, column);

  & {
    // wrap-login下的公共样式
    .block {
      @extend .block-size;
      border-radius: $border-raduis;
      margin-top: $margin-top;
    }

    .block:first-child {
      margin-top: 0;
    }

    // 用户输入表单
    form > div {
      border: 2px solid $white;

      input {
        background: transparent;
        margin-left: $margin-sm;
        font-size: $font-md;
      }

      img {
        @extend .icon-size;
        margin-left: $margin-md;
        margin-bottom: -5px;
      }
    }

    // 忘记密码&用户注册
    > div[class="block"] {
      @include clear-mp;
      @include displayFlex(space-between, center, row);
      margin-top: $margin-top;
      font-size: $font-sm;
      height: $font-sm;
      line-height: $font-sm;

      & > a {
        margin: 0 $margin-md;
      }
    }

    // 登录按钮
    > button[class="block"] {
      margin-top: $margin-top-large;
      background: $blue;
      font-size: $font-lg;
    }
  }
}
</style>
