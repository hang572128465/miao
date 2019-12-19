<template>
  <div>
    <header data-v-2f029f00 data-v-4748a56c id="header">
      <i @click="$router.back()" data-v-4748a56c data-v-2f029f00 class="iconfont icon-right"></i>
      <h1 data-v-2f029f00>影片播放</h1>
    </header>
    <div>
      <video
        autoplay
        controls="controls"
        src="http://qiniu1.loqh.cn/1%E3%80%81%E8%AF%BE%E7%A8%8B%E4%BB%8B%E7%BB%8D.mp4"
      ></video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
  i {
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -13px;
    font-size: 26px;
  }
  h1 {
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
}
video {
  width: 100%;
}
</style>