<template>
  <div id="main">
    <Header title="喵禾电影" />
    <div class="download-app-bar">
      <img class="img noneBg logo" alt="logo" src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" width="42" height="42">
      <div class="app-name-desc">
      <div class="app-name">猫眼</div>
      <div class="app-desc">在线选座，热门影讯，爱上看电影</div> 
      </div>

      <div class="btn-open-app">立即打开</div>
      
    </div>
    <section class="topbar"></section>
    <LoginInfo></LoginInfo>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city">
          <span>{{ $store.state.city.nm }}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item "
            >正在热映</router-link
          >
          <router-link tag="div" to="/movie/comingSoon" class="hot_item"
            >即将上映</router-link
          >
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>

      <keep-alive>
        <router-view />
      </keep-alive>

      <router-view name="detail" />
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import { messageBox } from "@/components/JS";
import LoginInfo from "@/components/LoginInfo";

export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
    LoginInfo
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/api/getLocation").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          var nm = res.data.data.nm;
          var id = res.data.data.id;

          if (this.$store.state.city.id == id) {
            return;
          }
          messageBox({
            title: "定位",
            content: nm,
            cancel: "取消",
            ok: "切换定位",
            handleOk() {
              window.localStorage.setItem("nowNm", nm);
              window.localStorage.setItem("nowId", id);
              window.location.reload();
            }
          });
        }
      });
    }, 3000);
  }
};
</script>

<style scoped>
.download-app-bar{
  height: 55px;
  margin-top: 12px;
}
.app-name-desc{
left: 70px;
top:5px;
position: relative;
}
.app-desc{
  font-size: 5px;
}
.btn-open-app{
      position: absolute;
    right: 25px;
    top: 70px;
    width: 68px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #ef4238;
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
}
.download-app-bar img.logo{
      position: absolute;
    left: 15px;
    top: 64px;
    width: 44px;
    height: 44px;
}
.app-desc{
  font-size: 12px;
    color: #999;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.rounter-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
