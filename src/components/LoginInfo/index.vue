<template>
  <div class="loginInfo" v-if="LoginInfo.length != 0">
    <div class="avatar" @click="gos">
      <!-- <img src="http://img3.imgtn.bdimg.com/it/u=3493272876,1848828673&fm=26&gp=0.jpg" alt="" /> -->
     <img src="http://img3.imgtn.bdimg.com/it/u=3493272876,1848828673&fm=26&gp=0.jpg" alt="" />
    </div>
    <div class="name">{{ LoginInfo.userName }}</div>
  </div>
</template>

<script>
export default {
  name: "loginInfo",
  data() {
    return {
      LoginInfo: JSON.parse(sessionStorage.getItem("LoginInfo")) || []
    };
  },
  created() {},
  methods: {
gos(){
  console.log(123)
    // this.$router.push('../../views/Mine/index.vue')
    this.$router.go(-1)
}


  },
  components: {}
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  height: 100%;
}
.loginInfo {
  position: absolute;
  right: -10px;
  top: 0;
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  z-index: 999;
}
.loginInfo .avatar {
  background: rgb(83, 83, 25);
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.loginInfo .name {
  color: #fff;
  width: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
