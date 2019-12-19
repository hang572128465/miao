module.exports = {
    publicPath : '/miaomiao',
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178' ,
                changgerOrigin : true
            },
            '/ajax' : {
                target : 'http://m.maoyan.com' ,
                changgerOrigin : true
            },
            
            // '/movie' : {
            //     target : 'http://m.maoyan.com' ,
            //     changgerOrigin : true
            // }


            // http://v.juhe.cn/movie/index?key=451021b403f9c66ff49dcef3a3420587&title=%E9%92%A2%E9%93%81%E4%BE%A03
        }
    }
}