/**
 * Created by 6503 on 2017/6/22.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp =require('gulp-ftp');
gulp.task('default',function () {
    // 默认任务
    return gulp.src('*')
        .pipe(ftp({
            host:'ip或者域名',
            user:'用户名',
            pass:'密码',
            port:'21',//端口号
            remotePath:'' //上传到远程服务器目录路径
        }))
        .pipe(gutil.noop())
})
