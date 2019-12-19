<template>
  <div class="main">
    <Header title="我的商城" />
    <LoginInfo></LoginInfo>
    <div class="search">
      <div class="input">
        <input type="text" placeholder="🔍 搜索商品" />
      </div>
    </div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList">
            <img :src="item.avatar" alt="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="menu">
      <div class="item" v-for="item in list">
        <div class="avatar red">
          <img :src="item.avatar" alt="" />
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
    <div class="wrap" v-for="item in advList">
      <div class="advImg red">
        <img :src="item.avatar" alt="" />
      </div>
      <div class="title">{{ item.title }}</div>
    </div>
    <div class="recommend" v-for="item in recommendList">
      <div class="title">{{ item.title }}</div>
      <div class="box">
        <div class="left">
          <div class="price">{{ item.list[0].price }} 元</div>
          <div class="info">{{ item.list[0].info }}</div>
          <div class="avatar red">
            <img :src="item.list[0].avatar" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="item top">
            <div class="item_left">
              <div class="price">{{ item.list[1].price }} 元</div>
              <div class="info">{{ item.list[1].info }}</div>
            </div>
            <div class="item_right">
              <div class="avatar red">
                <img :src="item.list[1].avatar" alt="" />
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item_left">
              <div class="price">{{ item.list[2].price }} 元</div>
              <div class="info">{{ item.list[2].info }}</div>
            </div>
            <div class="item_right">
              <div class="avatar red">
                <img :src="item.list[2].avatar" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="liveShop">
      <div class="title">你可能喜欢</div>
      <div class="box">
        <div class="item" v-for="item in shopList">
          <div class="shop">
            <div class="avatar red">
              <img :src="item.avatar" alt="" />
            </div>
            <div class="shopName">{{ item.name }}</div>
            <div class="price">
              <div class="newPrice">￥{{ item.newPrice }}</div>
              <div class="oldPrice">￥{{ item.oldPirce }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import LoginInfo from "@/components/LoginInfo";
import Swiper from "swiper";

// import Login  from '@/components/Login';

export default {
  name: "Shopping",
  data() {
    return {
      bannerList: [
        //轮播图
        {
          avatar:
            "http://s3.actoys.net/pcupload/2019/1010/20191010064830473.jpg"
        },
        {
          avatar:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2877996535,1773997266&fm=26&gp=0.jpg"
        },
        {
          avatar:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2831554250,3901241467&fm=26&gp=0.jpg"
        }
      ],
      list: [
        // menulist内容
        {
          avatar: "http://img4.imgtn.bdimg.com/it/u=1539291333,561802009&fm=26&gp=0.jpg",
          title: "3C配件"
        },
        {
          avatar: "http://img0.imgtn.bdimg.com/it/u=443034760,1685671880&fm=26&gp=0.jpg",
          title: "手办公仔"
        },
        {
          avatar: "http://img4.imgtn.bdimg.com/it/u=4016668235,818055597&fm=26&gp=0.jpg",
          title: "潮玩盲盒"
        },
        {
          avatar: "http://img4.imgtn.bdimg.com/it/u=2896422616,1590228172&fm=26&gp=0.jpg",
          title: "生活服饰"
        },
        {
          avatar: "http://img3.imgtn.bdimg.com/it/u=1536032863,214009382&fm=26&gp=0.jpg",
          title: "影城爆品"
        },
        {
          avatar: "http://img1.imgtn.bdimg.com/it/u=1090385149,2408187744&fm=26&gp=0.jpg",
          title: "冰雪奇缘"
        },
        {
          avatar: "http://img0.imgtn.bdimg.com/it/u=1481434010,718627234&fm=26&gp=0.jpg",
          title: "海贼王"
        },
        {
          avatar: "http://img3.imgtn.bdimg.com/it/u=3493272876,1848828673&fm=26&gp=0.jpg",
          title: "终结者"
        },
        {
          avatar: "http://img4.imgtn.bdimg.com/it/u=3671621414,3166359660&fm=26&gp=0.jpg",
          title: "美少女战士"
        },
        {
          avatar: "http://img1.imgtn.bdimg.com/it/u=4257065102,1999108167&fm=26&gp=0.jpg",
          title: "皮卡丘"
        }
      ],
      advList: [
        //广告
        {
          banner: "",
          title: "《狐妖小红娘系列盒蛋》周边限时0元抽！",
          avatar: "https://i0.hdslb.com/bfs/article/04560b5ba4a040b0d88086b2eff63407da55e181.jpg@.jpg"
        },
        {
          banner: "",
          title: "《冰雪奇缘》周边限时0元抽！",
          avatar: "http://s3.actoys.net/pcupload/2019/1112/20191112020638949.png"
        }
      ],
      recommendList: [
        //推荐列表
        {
          title: "爆款来袭，全场包邮限时秒杀~",
          list: [
            {
              price: 9.9,
              info: "冰雪奇缘2盲盒",
              avatar: "https://www.98toy.com/../images/201903/thumb_img/5132_thumb_G_1553545878339.jpg"
            },
            {
              price: 39,
              info: "皮卡丘爆款毛绒公仔",
              avatar: "https://www.98toy.com/../images/201509/thumb_img/1152_thumb_G_1443139439565.jpg"
            },
            {
              price: 89,
              info: "复仇者联盟爆款卫衣",
              avatar: "https://www.98toy.com/../images/201903/thumb_img/5145_thumb_G_1553560194314.jpg"
            }
          ]
        },
        {
          title: "高玩极客区",
          list: [
            {
              price: 9.9,
              info: "漫威金刚狼数据线",
              avatar: "https://www.98toy.com/../images/201605/thumb_img/1502_thumb_G_1463096700172.jpg"
            },
            {
              price: 69,
              info: "皮卡丘蓝牙迷你音响",
              avatar: "https://www.98toy.com/../images/201709/thumb_img/3473_thumb_G_1505932735489.jpg"
            },
            {
              price: 99,
              info: "虚拟现实耳机式VR一体机",
              avatar: "https://www.98toy.com/../images/201709/thumb_img/3415_thumb_G_1505860180909.jpg"
            }
          ]
        }
      ],
      shopList: [
        //商品列表
        {
          avatar: "https://www.98toy.com/../images/201607/thumb_img/2870_thumb_G_1469405652429.jpg",
          name: "海贼王",
          newPrice: 158,
          oldPirce: 179
        },
        {
          avatar: "https://www.98toy.com/../images/201904/thumb_img/5267_thumb_G_1555460447062.jpg",
          name: "海贼王",
          newPrice: 150,
          oldPirce: 170
        },
        {
          avatar: "https://www.98toy.com/../images/201509/thumb_img/822_thumb_G_1443047975935.jpg",
          name: "索隆",
          newPrice: 168,
          oldPirce: 180
        },
        {
          avatar: "https://www.98toy.com/../images/201510/thumb_img/1331_thumb_G_1444091475815.jpg",
          name: "大天使系列",
          newPrice: 110,
          oldPirce: 120
        },
        {
          avatar: "https://www.98toy.com/../images/201509/thumb_img/851_thumb_G_1443050331285.jpg",
          name: "萌娃",
          newPrice: 58,
          oldPirce: 79
        },
        {
          avatar: "https://www.98toy.com/../images/201607/thumb_img/2894_thumb_G_1469839219599.jpg",
          name: "萌娃",
          newPrice: 130,
          oldPirce: 150
        },
        {
          avatar: "https://www.98toy.com/../images/201707/thumb_img/3075_thumb_G_1500589770606.jpg",
          name: "火拳艾斯",
          newPrice: 1000,
          oldPirce: 1500
        },
        {
          avatar: "https://www.98toy.com/../images/201510/thumb_img/1331_thumb_G_1444091475815.jpg",
          name: "天使诱惑",
          newPrice: 1158,
          oldPirce: 1179
        },
        {
          avatar: "https://www.98toy.com/../images/201606/thumb_img/2727_thumb_G_1466976895814.jpg",
          name: "索隆大爷",
          newPrice: 388,
          oldPirce: 488
        },
        {
          avatar: "https://www.98toy.com/../images/201601/thumb_img/1583_thumb_G_1453073163575.jpg",
          name: "艾斯大神",
          newPrice: 320,
          oldPirce: 400
        },
        {
          avatar: "https://www.98toy.com/../images/201509/thumb_img/851_thumb_G_1443050331285.jpg",
          name: "东来也",
          newPrice: 777,
          oldPirce: 888
        },
         {
          avatar: "https://www.98toy.com/../images/201707/thumb_img/3075_thumb_G_1500589770606.jpg",
          name: "东来也",
          newPrice: 58,
          oldPirce: 79
        },
        {
          avatar: "https://www.98toy.com/../images/201510/thumb_img/1331_thumb_G_1444091475815.jpg",
          name: "东来也",
          newPrice: 58,
          oldPirce: 79
        },
        {
          avatar: "https://www.98toy.com/../images/201604/thumb_img/2409_thumb_G_1461017774650.jpg",
          name: "东来也",
          newPrice: 58,
          oldPirce: 79
        }
      ]
    };
  },
  components: {
    Header,
    TabBar,
    LoginInfo
    //  Login
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  height: 100%;
}
.red {
  background: red !important;
}
input {
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
}
.main {
  background: #f4f4f4;
  display: block;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fff;
}
.search .input {
  width: 90%;
  height: 26px;
  border-radius: 30px;
  border: 2px solid #d1d1d1;
  overflow: hidden;
}
.search .input input {
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
.banner {
  width: 100%;
  height: 200px;
  background: #ffffff;
}
.menu {
  padding: 10px 0px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ececec;
  overflow: hidden;
}
.menu .item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  padding: 5px 0px;
  width: 20%;
}
.menu .item .avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
}
.menu .item .title {
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
.wrap {
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #ececec;
}
.wrap .advImg {
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.wrap .title {
  padding: 0px 5px;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  font-size: 14px;
  line-height: 30px;
  font-weight: bold;
}
.recommend {
  margin-top: 10px;
  background: #fff;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.recommend .title {
  box-sizing: border-box;
  padding: 0px 5px;
  width: 100%;
  font-size: 14px;
  line-height: 30px;
}
.recommend .box {
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  display: flex;
  font-weight: bold;
}
.recommend .box .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
  width: 40%;
  border-right: 1px solid #ececec;
}
.recommend .box .left .price {
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
}
.recommend .box .left .info {
  margin: 5px auto;
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #aaaaaa;
}
.recommend .box .left .avatar {
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.recommend .box .right {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.recommend .box .item {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  flex: 1;
}
.recommend .box .item .item_left {
  flex: 1;
}
.recommend .box .item .price {
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #222222;
}
.recommend .box .item.top {
  border-bottom: 1px solid #ececec;
}
.recommend .box .item .info {
  width: 90px;
  font-size: 12px;
  line-height: 20px;
  color: #aaaaaa;
}
.recommend .box .item .item_right {
  flex: 1;
}
.recommend .box .item .avatar {
  width: 100px;
  height: 100%;
  overflow: hidden;
}
.liveShop {
  margin-top: 10px;
  padding-bottom: 70px;
  border-top: 1px solid #ececec;
  background: #fff;
  overflow: hidden;
}
.liveShop .title {
  box-sizing: border-box;
  padding: 0px 5px;
  width: 100%;
  font-size: 14px;
  line-height: 30px;
  border-bottom: 1px solid #ececec;
}
.liveShop .box {
  padding-top: 10px;
}
.liveShop .box .item {
  margin-top: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
}
.liveShop .box .item .shop {
  width: 90%;
}
.liveShop .box .item .shop .avatar {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.liveShop .box .item .shop .shopName {
  margin-top: 5px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}
.liveShop .box .item .shop .price {
  display: flex;
  justify-content: center;
  vertical-align: bottom;
  height: 20px;
}
.liveShop .box .item .shop .price .newPrice {
  font-size: 16px;
  margin-right: 5px;
  font-weight: bold;
  color: red;
}
.liveShop .box .item .shop .price .oldPrice {
  font-size: 12px;
  line-height: 24px;
  color: #989898;
  text-decoration: line-through;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
