<template>
  <div id="main">
    <Header title="我的锋锋" />
    <LoginInfo></LoginInfo>
    <div id="content">
      <Login />
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Login from "@/components/Login";
import LoginInfo from "@/components/LoginInfo";

export default {
  name: "Mine",
  components: {
    Header,
    TabBar,
    Login,
    LoginInfo
  }
};
</script>

<style></style>
