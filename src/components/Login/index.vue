<template>
  <div class="login_body">
    <div class="login_text">
      <input v-model="userName" type="text" placeholder="账户名/手机号/Email" />
    </div>
    <div class="login_text">
      <input v-model="password" type="password" placeholder="请输入您的密码" />
    </div>
    <div class="login_text regCode">
      <input type="text" v-model="regCode" placeholder="验证码" />
      <div class="reg" @click="getRegCode">{{ initRegCode }}</div>
    </div>
    <div class="login_btn" @click="submit">
      <input type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#" @click="register">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      regCode: "",
      initRegCode: ""
    };
  },
  methods: {
    submit() {
      var userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || [];
      console.log(userInfo);
      if (this.userName == "") {
        alert("请输入账号");
        return;
      }
      if (!this.regName(this.userName, userInfo)) {
        alert("用户不存在，请先注册");
        return;
      }
      if (this.password == "") {
        alert("请输入密码");
        return;
      }
      if (!this.regPwd(this.userName, this.password, userInfo)) {
        alert("密码错误");
        return;
      }
      if (this.regCode == "") {
        alert("请填写验证码");
        return;
      }
      if (this.regCode != this.initRegCode) {
        alert("验证码错误");
        this.regCode = "";
        this.getRegCode();
        return;
      }

      userInfo.forEach(item => {
        if (this.userName == item.userName) {
          sessionStorage.setItem("LoginInfo", JSON.stringify(item));
        }
      });

      this.empty();
      alert("登陆成功");

      this.$router.push("/movie");
    },
    regName(val1, val2) {
      var flag = false;
      val2.forEach(item => {
        if (val1 == item.userName) {
          flag = true;
          return;
        } else {
          flag = false;
        }
      });
      return flag;
    },
    regPwd(val1, val2, val3) {
      var flag = false;
      val3.forEach(item => {
        if (val1 == item.userName) {
          if (val2 == item.password) {
            flag = true;
            return;
          }
        } else {
          flag = false;
        }
      });
      return flag;
    },
    empty() {
      this.userName = "";
      this.password = "";
      this.regCode = "";
      this.getRegCode();
    },
    register() {
      this.empty();
      this.$router.push("/register");
    },
    makeRandomArr(arrList, num) {
      if (num > arrList.length) {
        return;
      }
      var tempArr = arrList.slice(0);
      var newArrList = [];
      for (var i = 0; i < num; i++) {
        var random = Math.floor(Math.random() * (tempArr.length - 1));
        var arr = tempArr[random];
        tempArr.splice(random, 1);
        newArrList.push(arr);
      }
      return newArrList;
    },
    getRegCode() {
      var testArr = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h"
      ];
      var test = this.makeRandomArr(testArr, 4);
      var regCode = "";
      test.forEach(item => {
        regCode += item;
      });
      this.initRegCode = regCode;
    }
  },
  mounted() {
    this.getRegCode();
  }
};
</script>

<style scoped>
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  /* margin-bottom: 5px; */
  outline: none;
  text-indent: 10px;
}
.login_body .login_text input {
  float: left;
  display: block;
  padding-left: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.login_body .login_text.regCode input {
  width: 50%;
}
.login_body .login_text .reg {
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  background: #eeeeee;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}

.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
