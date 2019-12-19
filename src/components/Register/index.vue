<template>
  <div class="register">
    <div class="header">
      <div class="back" @click="back"><</div>
      注册用户
    </div>
    <div class="login_body">
      <div class="item">
        <input
          type="text"
          v-model="userName"
          placeholder="账户名/手机号/Email"
        />
      </div>
      <div class="item">
        <input type="text" v-model="phone" placeholder="请输入您的手机号" />
      </div>
      <div class="item">
        <input
          type="password"
          v-model="password"
          placeholder="请输入您的密码"
        />
      </div>
      <div class="item">
        <input
          type="password"
          v-model="ConfirmPassword"
          placeholder="确认密码"
        />
      </div>
      <div class="item regCode">
        <input type="text" v-model="regCode" placeholder="验证码" />
        <div class="reg" @click="getRegCode">{{ initRegCode }}</div>
      </div>
      <div class="login_btn" @click="regist">
        <input type="submit" value="注册" />
      </div>
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
      phone: "",
      ConfirmPassword: "",
      regCode: "",
      initRegCode: ""
    };
  },
  methods: {
    back() {
      this.empty();
      window.history.go(-1);
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
    },
    empty() {
      this.userName = "";
      this.password = "";
      this.ConfirmPassword = "";
      this.regCode = "";
      this.phone = "";
      this.getRegCode();
    },
    existence(val1, val2) {
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
    regist() {
      var userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || [];
      if (this.userName == "") {
        alert("请填写用户名");
        return;
      }
      if (this.phone == "") {
        alert("请填写手机号");
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        alert("请填写正确手机号");
        return false;
      }
      if (this.existence(this.userName, userInfo)) {
        alert("此用户已被注册");
        return;
      }
      if (this.password == "") {
        alert("请填写密码");
        return;
      }
      if (this.ConfirmPassword == "") {
        alert("请确认密码");
        return;
      }
      if (this.ConfirmPassword != this.password) {
        alert("密码输入不一致");
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
      var data = {
        userName: this.userName,
        password: this.password,
        phone: this.phone
      };
      userInfo.push(data);
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      alert("注册成功");
      this.empty();
      this.$router.push("/mine");
    }
  },
  mounted() {
    this.getRegCode();
  }
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  height: 100%;
}
.header {
  position: relative;
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
}
.header .back {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 30px;
  font-size: 30px;
  line-height: 30px;
}
#content .login_body {
  width: 100%;
}
.login_body .item {
  overflow: hidden;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  outline: none;
  text-indent: 10px;
}
.login_body .item.regCode input {
  width: 50%;
}
.login_body .item input {
  float: left;
  display: block;
  padding-left: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.login_body .item .reg {
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
