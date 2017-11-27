var gulp = require('gulp');
var sftp=require('gulp-sftp')
var ssh=require('gulp-ssh')

var config = require('./ftpconfig.js')

//上传到远程服务器任务
gulp.task('upload-test', function () {
  return gulp.src('/Users/guider/Documents/vue/education/dist/**')
    .pipe(sftp({
      host: config.sftp.host,
      port: config.sftp.port,
      user: config.sftp.user,
      pass: config.sftp.key,
      remotePath: config.sftp.remotePath
    }));
});
//
// //上传到远程服务器任务
// gulp.task('upload', function () {
//   return gulp.src('/Users/guider/Documents/vue/p2p/dist/**')
//     .pipe(sftp({
//       host: config.release_sftp.host,
//       port: config.release_sftp.port,
//       user: config.release_sftp.user,
//       pass: config.release_sftp.key,
//       remotePath: config.release_sftp.remotePath
//     }));
// });
//
// //上传到远程服务器任务
// gulp.task('upload-aliyun', function () {
//   return gulp.src('/Users/guider/Documents/vue/p2p/dist/**')
//     .pipe(sftp({
//       host: config.aliyun_sftp.host,
//       port: config.aliyun_sftp.port,
//       user: config.aliyun_sftp.user,
//       pass: config.aliyun_sftp.key,
//       remotePath: config.aliyun_sftp.remotePath
//     }));
// });
//

var tiny = require('gulp-tinypng-nokey');

gulp.task('tinypng', function(cb) {
  gulp.src('src/assets/**')
    .pipe(tiny())
    .pipe(gulp.dest('dist'));
});
