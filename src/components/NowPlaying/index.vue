<template>
    <div class="movie_body" ref="movie_body">
        <!-- <meta name="referrer" content="never"> -->
        <Loading v-if="isLoading"/>
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                <!-- <li>
                <div class="pic_show">
                  <img src="/images/movie_1.jpg" />
                </div>
                <div class="info_list">
                  <h2>无名之辈</h2>
                  <p>
                    观众评
                    <span class="grade">9.2</span>
                  </p>
                  <p>主演: 陈建斌,任素汐,潘斌龙</p>
                  <p>今天55家影院放映607场</p>
                </div>
                <div class="btn_mall">购票</div>
                </li>-->

                <li class="pullDown">{{pullDownMsg}}</li>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show" @tap="handleToDetail(item.id)">
                        <img :src="item.img | setWH('128.180')"/>
                    </div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail(item.id)">
                            {{ item.nm }}
                            <img v-if="item.version" src="@/assets/maxs.png"/>
                        </h2>
                        <p>
                            观众评
                            <span class="grade">{{ item.sc }}</span>
                        </p>
                        <p>主演: {{ item.star }}</p>
                        <p>{{ item.showInfo}}}</p>
                    </div>
                    <div class="btn_mall" @tap="buyMovie(item)">购票</div>
                </li>
            </ul>
            <div class="mark"></div>
        </Scroller>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "NowPlaying",
        data() {
            return {
                movieList: [],
                pullDownMsg: "",
                isLoading: true,
                prevCityId: -1,
                itemCarList: []
            };
        },
        //生命周期
        created() {
            var cityId = this.$store.state.city.id;
            if (this.prevCityId === cityId) {
                return;
            }
            this.isLoading = true;
            //  console.log(123);
            this.axios.get("/api/movieOnInfoList?cityId=" + cityId).then(res => {
                var msg = res.data.msg;
                if (msg === "ok") {
                    this.movieList = res.data.data.movieList;
                    this.isLoading = false;
                    this.prevCityId = cityId;
                    //  this.$nextTick(()=>{
                    //  var scroll = new BScroll( this.$refs.movie_body ,{
                    //    tap :true,
                    //    probeType:1
                    //  });
                    //  scroll.on('scroll',(pos)=>{
                    //   //  console.log('scroll');
                    //   if( pos.y > 30){
                    //   this.pullDownMsg = '正在更新中';
                    //   }
                    //  });

                    //  scroll.on('touchEnd',(pos)=>{
                    //   //  console.log('touchEnd');

                    //     if( pos.y > 30){
                    //       this.axios.get('/api/movieOnInfoList?cityId=20').then((res)=>{
                    //         var msg = res.data.msg;
                    //  if( msg === 'ok' ){
                    //     this.pullDownMsg = '更新成功';
                    //     setTimeout(()=>{
                    //    this.movieList = res.data.data.movieList;
                    //    this.pullDownMsg = '';
                    //     },1000);
                    //       }
                    //       });

                    //     }
                    //  });

                    //  });
                }
            });
        },
        methods: {
            handleToDetail(movieId) {
                // console.log('movieId');
                this.$router.push("/movie/detail/3/" + movieId).catch(err => {
                    err;
                });
            },
            handleToScroll(pos) {
                if (pos.y > 30) {
                    this.pullDownMsg = "正在更新中";
                }
            },
            handleToTouchEnd(pos) {
                if (pos.y > 30) {
                    this.axios.get("/api/movieOnInfoList?cityId=11").then(res => {
                        var msg = res.data.msg;
                        if (msg === "ok") {
                            this.pullDownMsg = "更新成功";
                            setTimeout(() => {
                                this.movieList = res.data.data.movieList;
                                this.pullDownMsg = "";
                            }, 1000);
                        }
                        return false;
                    });
                }
            },
            /**
             * 购票
             */
            buyMovie(item) {
                const res = new Map();
                this.itemCarList = JSON.parse(sessionStorage.getItem("movieList")) ? JSON.parse(sessionStorage.getItem("movieList")) : [];
                this.itemCarList.push(item);
                let choosedCar = this.itemCarList.filter(
                    data => !res.has(data) && res.set(data, 1)
                );
                sessionStorage.setItem("movieList", JSON.stringify(choosedCar));
                this.myalert('成功加入购物车');
            },
            //公共提示框
            myalert(str) {
                var div = '<div class="mark"></div>';
                $('.mark').html(str);
                $('.mark').show();
                setTimeout(function () {
                    $('.mark').hide();
                }, 2000)
            }
        }
    }
</script>

<style scoped>
    #content .movie_body {
        flex: 1;
        overflow: auto;
    }

    .movie_body ul {
        margin: 0 12px;
        overflow: hidden;
    }

    .movie_body ul li {
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px #e6e6e6 solid;
        padding-bottom: 10px;
    }

    .movie_body .pic_show {
        width: 64px;
        height: 90px;
    }

    .movie_body .pic_show img {
        width: 100%;
        height: 100%;
    }

    .movie_body .info_list {
        margin-left: 10px;
        flex: 1;
        position: relative;
    }

    .movie_body .info_list h2 {
        font-size: 17px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .movie_body .info_list p {
        font-size: 13px;
        color: #666;
        line-height: 22px;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .movie_body .info_list .grade {
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
    }

    .movie_body .info_list img {
        width: 50px;
        position: absolute;
        right: 10px;
        top: 5px;
    }

    .movie_body .btn_mall,
    .movie_body .btn_pre {
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #f03d37;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        z-index: 100;
    }

    .movie_body .btn_pre {
        background-color: #3c9fe6;
    }

    .movie_body .pullDown {
        margin: 0;
        padding: 0;
        border: none;
    }

    .mark {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 1rem;
        line-height: 0.88rem;
        width: 50%;
        text-align: center;
        font-size: 0.28rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 0.1rem;
        z-index: 100;
    }
</style>
