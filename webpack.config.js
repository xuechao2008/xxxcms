/**
 * Created by 6503 on 2017/6/21.
 */
var webpack =require('webpack');

module.exports={
    /*
        entry:'./index.js',
    * 'webpack/hot/dev-server'*/
    entry:{
        index:'./index.js',
        webpack_dev_server:'webpack/hot/dev-server'
    },
    output:{
        filename:'bundle.js'
    },
    devServer: {
        historyApiFallback:true,
        hot:true,
        inline:true,
        open: true
    },
    plugins:[

    ]
}
