<template>
  <div class="movie-detail">
    <header data-v-2f029f00 data-v-4748a56c id="header">
      <i @click="$router.back()" data-v-4748a56c data-v-2f029f00 class="iconfont icon-right"></i>
      <h1 data-v-2f029f00>影片详情</h1>
    </header>
    <!-- 顶部广告 -->
    <div class="download-app-bar flex">
      <img
        class="img noneBg logo"
        alt="logo"
        src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"
        width="42"
        height="42"
      />
      <div class="app-name-desc">
        <div class="app-name">猫眼</div>
        <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
      </div>
      <div class="btn-open-app">立即打开</div>
    </div>

    <div class="movie-info">
      <!-- 详情头部 -->
      <div class="movie-info-top flex">
        <div class="movie-cover">
          <a>
            <img
              class="img noneBg poster"
              alt="电影封面图"
              src="//p0.meituan.net/moviemachine/f4df6f9c2c55e347266e35027da415251124290.jpg@300w_414h"
              width="100"
              height="138"
            />
            <img
              class="img noneBg poster-play"
              alt
              src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/poster-play.png"
            />
          </a>
        </div>
        <div class="movie-desc">
          <div class="movie-desc-top">
            <div class="movie-cn-name">勇敢者游戏2：再战巅峰</div>
            <div class="movie-en-name">Jumanji 2: The Next Level</div>
            <div class="movie-other-info">
              <div class="movie-type">
                <span class="movie-cat">动作 / 冒险</span>
                <span class="movie-tag">
                  <img
                    class="img noneBg"
                    alt
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/movie-tag-3DIMAX.png"
                  />
                </span>
              </div>
              <div class="actors">道恩·强森 / 凯伦·吉兰 / 杰克·布莱克</div>
              <div class="movie-show-time">
                <span>2019-12-06大陆上映 / 123分钟</span>
                <img
                  class="img noneBg"
                  alt="向右箭头"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"
                  style="margin-left: 0.12rem;"
                />
              </div>
            </div>
          </div>
          <div class="btns">
            <button type="button" class="button want-to-watch">
              <img
                class="img noneBg"
                alt="想看"
                src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/want-to-watch.png"
              />
              <span>想看</span>
            </button>
            <a class="link button btn-right watched">
              <img
                class="img noneBg"
                alt="看过"
                src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star.png"
              />
              <span>看过</span>
            </a>
          </div>
        </div>
      </div>

      <!--电影评价 -->
      <div class="real-time-word-of-mouth">
        <div class="top">
          <div class="left">
            <img
              class="img noneBg"
              alt="logo"
              src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/logo.png"
            />
            <span>实时口碑</span>
          </div>
          <div class="right">
            <span class="num">118081</span>
            <span>人想看</span>
            <span class="num watched">75696</span>
            <span>人看过</span>
          </div>
        </div>
        <div class="middle">
          <div class="left">
            <span class="score">7.6</span>
            <span class="people-grade">
              <span>79752</span>
              <span>人评</span>
            </span>
          </div>
          <div class="right">
            <div class="stars-percent-bar">
              <div class="stars">
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
              </div>
              <div class="bar">
                <div class="percent" style="width: 51.5%;"></div>
              </div>
              <div class="percent-value">
                <span>51.5</span>
                <span>%</span>
              </div>
            </div>
            <div class="stars-percent-bar">
              <div class="stars">
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
              </div>
              <div class="bar">
                <div class="percent" style="width: 19.1%;"></div>
              </div>
              <div class="percent-value">
                <span>19.1</span>
                <span>%</span>
              </div>
            </div>
            <div class="stars-percent-bar">
              <div class="stars">
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
              </div>
              <div class="bar">
                <div class="percent" style="width: 12.6%;"></div>
              </div>
              <div class="percent-value">
                <span>12.6</span>
                <span>%</span>
              </div>
            </div>
            <div class="stars-percent-bar">
              <div class="stars">
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
              </div>
              <div class="bar">
                <div class="percent" style="width: 5.5%;"></div>
              </div>
              <div class="percent-value">
                <span>5.5</span>
                <span>%</span>
              </div>
            </div>
            <div class="stars-percent-bar">
              <div class="stars">
                <img
                  class="img noneBg"
                  alt="star"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/star-not-graded.png"
                />
              </div>
              <div class="bar">
                <div class="percent" style="width: 11.4%;"></div>
              </div>
              <div class="percent-value">
                <span>11.4</span>
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="separator-line"></div>
        <div class="bottom">
          <div class="left">
            <span>同期动作片中评分第一</span>
          </div>
        </div>
      </div>
      <!-- end 电影评价 -->

      <!-- 0元看电影 -->
      <div class="activity-bar">
        <a class="link btn-open-app">
          <div class="left">
            <img
              class="img noneBg"
              alt="观影红包"
              src="//p1.meituan.net/moviemachine/18acdfb0ecb99eb5250512446d7e87fe2282.png"
            />
            <span>0元看电影，速抢 👉</span>
          </div>
          <div class="right">
            <span>前往 App，免费领取</span>
            <img
              class="img noneBg"
              alt="观影红包"
              src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"
            />
          </div>
        </a>
      </div>
      <!-- end 0元看电影 -->
      <div class="separator-line"></div>
      <!-- 简介 -->
      <div class="brief-introduction" :class="{close:detailVisible}">
        <div class="title">
          <span>简介</span>
          <div>
            <button type="button" class="close" id="rohr_379953">
              <span @click="toggleDetail()">收起</span>
              <img
                class="img noneBg"
                alt="向上箭头"
                src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"
              />
            </button>
          </div>
        </div>
        <div class="content">
          <p
            class
          >《勇敢者游戏2：再战巅峰》是2017年全球卖座动作冒险巨制《勇敢者游戏：决战丛林》的续篇。四名勇敢者再次穿越回到险象环生的游戏世界中，开启全新冒险。与上次不同的是，变身勇石博士 (道恩·强森 饰) 的是斯潘瑟的外公，外公的好友则变身为语言学家 (凯文· 哈特 饰)，高大威猛的弗里奇变成了中年发福地质学家 (杰克·布莱克 饰)，只有学霸玛莎依旧化身性感打女 (凯伦·吉兰 饰)，斯潘瑟和贝瑟尼却不知所踪。为营救消失的伙伴，四人必须进入全面失控的未知世界，面对难度爆表危险重重的致命关卡，强森领队挑战极限玩命闯关。山崩石裂的险境中命悬一线，与突如其来的凶猛野兽死战到底，他们唯有绷紧神经并肩作战，才能通过生死考验逃出生天。一场惊险刺激又充满惊喜的冒险之旅即将展开！影片定档于12月6日全国上映。</p>
        </div>
      </div>
      <!-- end 简介 -->
      <!-- 演员 -->
      <div class="actors">
        <div class="title">
          <span>演职人员</span>
          <a class="go-to-all-actors">
            <span>全部</span>
            <img
              class="img noneBg"
              alt="arrow-right"
              src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"
            />
          </a>
        </div>
        <div class="actor-list">
          <ul>
            <li>
              <a>
                <img
                  class="img noneBg"
                  alt="avatar"
                  src="//p1.meituan.net/movie/4fb8d9568314d0d8b14c93644d9a1d7042382.jpg@160w_224h_1e_1c"
                  width="80"
                  height="112"
                />
                <span class="name">杰克·卡斯丹</span>
                <span class="role">导演</span>
              </a>
            </li>
            <li v-for="x in 30" :key="x" :class="{'left-margin':x>0}">
              <a>
                <img
                  class="img noneBg"
                  alt="avatar"
                  src="//p0.meituan.net/movie/7e3067d066c1e285b0cc17bfd5f1b34e108474.jpg@160w_224h_1e_1c"
                  width="80"
                  height="112"
                />
                <span class="name">道恩·强森</span>
                <span class="role">饰 斯莫德·勇石博士 Spencer</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end 演员 -->

      <!-- 视频剧照 -->
      <div class="videos-photos">
        <div class="title">
          <span>视频剧照</span>
          <a class="go-to-all">
            <span>全部剧照</span>
            <img
              class="img noneBg"
              alt="arrow-right"
              src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right.png"
            />
          </a>
        </div>
        <div class="videos-photos-list">
          <ul>
            <li class="video">
              <a>
                <img
                  class="img noneBg"
                  alt="avatar"
                  src="//p1.meituan.net/movie/77c11b91ad152a7696e97f601e03386f558843.png@280w_186h_1e_1c"
                  width="140"
                  height="93"
                />
                <div class="play">
                  <div class="triangle"></div>
                </div>
              </a>
            </li>
            <li v-for="x in 30" :key="'v'+x" :class="{'left-margin':x>0}">
              <a>
                <img
                  class="img noneBg"
                  alt="avatar"
                  src="//p1.meituan.net/movie/c704d94ddd5bc30542f0b7409067c9d2548345.jpg@420w_279h_1e_1c"
                  width="140"
                  height="93"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end 视频剧照 -->
    </div>
    <!-- 评论 -->
    <section class="discussion">
      <header>
        <span class="title">讨论</span>
      </header>
      <div class="comments">
        <article class="no-padding-top">
          <div>
            <img
              class="img noneBg avatar"
              alt="avatar"
              src="//p0.meituan.net/avatar/98b0cb46908ad41838a2b11e3254a99e10429.jpg@68w_68h"
              width="34"
              height="34"
            />
          </div>
          <div class="right">
            <div class="top">
              <div>
                <div class="name-box">
                  <span class="name">一个瓶盖</span>
                  <img
                    class="img noneBg level-icon"
                    alt="level-icon"
                    src="//p0.meituan.net/moviemachine/83a90e3a7dda4463963fbc7fb8c02ee32335.png"
                    width="31"
                    height="15"
                  />
                </div>
                <div>
                  <span class="grade-score">给这部电影打了10分</span>
                </div>
              </div>
            </div>
            <div class="middle">
              <a>
                <span class="comment-content">第一部看得我都笑死了，节奏很紧凑，剧情也很好，没有bug ，没有低俗笑话。当时就很期待第二部</span>
              </a>
            </div>
            <div class="bottom">
              <div>
                <time class="time" title="1575613860000">4天前</time>
              </div>
              <div class="right">
                <img
                  class="img noneBg thumb-up"
                  alt="thumb-up"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/thumb-up-comment.png"
                  width="10"
                  height="10"
                />
                <span class="praise-num">1173</span>
                <a class="goto-comments">
                  <img
                    class="img noneBg comment-icon"
                    alt="comment"
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/discussion-comment.png"
                    width="12"
                    height="12"
                  />
                  <span class="comments-num">84</span>
                </a>
              </div>
            </div>
          </div>
        </article>
        <div class="separator-line"></div>
        <article class>
          <div>
            <img
              class="img noneBg avatar"
              alt="avatar"
              src="//p1.meituan.net/maoyanuser/e98375123754a9c9fe413e3a65a9b0a94418.jpg@68w_68h"
              width="34"
              height="34"
            />
          </div>
          <div class="right">
            <div class="top">
              <div>
                <div class="name-box">
                  <span class="name">TAO</span>
                  <img
                    class="img noneBg level-icon"
                    alt="level-icon"
                    src="//p0.meituan.net/moviemachine/20507a9b86fe5f9eb650d3a0913021942498.png"
                    width="31"
                    height="15"
                  />
                </div>
                <div>
                  <span class="grade-score">给这部电影打了2分</span>
                </div>
              </div>
            </div>
            <div class="middle">
              <a>
                <span class="comment-content">跟第一部比 差太远了 里面那个 自称像章子怡的那位**演技太尬了吧</span>
              </a>
            </div>
            <div class="bottom">
              <div>
                <time class="time" title="1575617880000">4天前</time>
              </div>
              <div class="right">
                <img
                  class="img noneBg thumb-up"
                  alt="thumb-up"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/thumb-up-comment.png"
                  width="10"
                  height="10"
                />
                <span class="praise-num">797</span>
                <a class="goto-comments">
                  <img
                    class="img noneBg comment-icon"
                    alt="comment"
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/discussion-comment.png"
                    width="12"
                    height="12"
                  />
                  <span class="comments-num">55</span>
                </a>
              </div>
            </div>
          </div>
        </article>
        <div class="separator-line"></div>
        <article class>
          <div>
            <img
              class="img noneBg avatar"
              alt="avatar"
              src="//p0.meituan.net/avatar/8fbdafaa9a3fc98b33fc0ab1ed26291c112396.jpg@68w_68h"
              width="34"
              height="34"
            />
          </div>
          <div class="right">
            <div class="top">
              <div>
                <div class="name-box">
                  <span class="name">电影玩家</span>
                  <img
                    class="img noneBg level-icon"
                    alt="level-icon"
                    src="//p0.meituan.net/moviemachine/12e2e86cacb71ecf3204f26937dd49ab2430.png"
                    width="31"
                    height="15"
                  />
                </div>
                <div>
                  <span class="grade-score">给这部电影打了10分</span>
                </div>
              </div>
            </div>
            <div class="middle">
              <a>
                <span
                  class="comment-content"
                >电影惊险刺激，巨石强森没有让人失望，每次都是荷尔蒙爆棚，喜欢电影里的游戏设定与喜剧元素，巨石强森形象与本身的反差萌，真的是太吸粉了。</span>
              </a>
            </div>
            <div class="bottom">
              <div>
                <time class="time" title="1575605220000">4天前</time>
              </div>
              <div class="right">
                <img
                  class="img noneBg thumb-up"
                  alt="thumb-up"
                  src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/thumb-up-comment.png"
                  width="10"
                  height="10"
                />
                <span class="praise-num">1037</span>
                <a class="goto-comments">
                  <img
                    class="img noneBg comment-icon"
                    alt="comment"
                    src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/discussion-comment.png"
                    width="12"
                    height="12"
                  />
                  <span class="comments-num">75</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="separator-line"></div>
      <footer>
        <a class="link goto-all-comments">
          <span>打开App，26490人正在讨论</span>
          <img
            class="img noneBg arrow-right-red"
            alt="arrow-r-red"
            src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/arrow-right-red.png"
            width="6"
            height="11"
          />
        </a>
      </footer>
    </section>
    <!-- end 评论 -->

    <!-- buy -->
    <div class="buy-ticket-btn can-buy">
      <div class="buy-wrapper">
        <img
          class="img noneBg"
          alt
          src="//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/share-icon.png"
        />
        <a
         @click="goDetail()"
          class="goto-ticket"
        >点击播放</a>
      </div>
    </div>
    <!-- end buy -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "123123",

      detailVisible: true,
      
    };
  },
  methods: {
    toggleDetail() {
      this.detailVisible = !this.detailVisible;
    },
    goDetail(){
      this.$router.push('/movie/play');
    }
  }
};
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
  h1{
        font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
}
</style>