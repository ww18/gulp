/**
 * Created by oak-016 on 16/7/19.
 */
/**
 * Created by oak-016 on 16/7/19.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var fs = require('fs');
var $ = require('jquery');
var path = require('path');
var through = require('through2');
var _ = require('lodash');



gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    //gulp.src("./html/template/*.html")
        //.pipe(through.obj(function(file, encode, cb) {

            fs.createReadStream("./html/template/template1.html")
                .pipe(through.obj(function (contents, enc, done) {
                    if(enc === "buffer"){
                        contents = contents.toString("utf-8");
                        enc = "utf-8";
                    }
                    done(null, contents, enc);
                }))
                .pipe(through.obj(function (contents, enc, done) {
                    console.log(contents);
                    done(null, contents.toUpperCase(), enc);
                }))
                .pipe(through.obj(function (contents, enc, done) {
                    contents = contents.split("").reverse().join("");
                    done(null, contents, enc);
                }))
                .pipe(fs.createWriteStream("./html/resource/js/template.js"));

            //var contents = file.contents.toString(encode);
            //var $ = require("cheerio").load(contents, {decodeEntities: false});
            //var contents = $.html();
            //
            ////压缩 HTML
            //var HTMLMinifier = require("html-minifier").minify;
            //
            //var minified = HTMLMinifier(contents, {
            //    minifyCSS: true,
            //    minifyJS: true,
            //    collapseWhitespace: true,
            //    removeAttributeQuotes: true
            //});
            //console.log(minified);
            //file.contents = new Buffer(minified, encode);
            //cb(null, file, encode);
        //}))
        //.pipe(gulp.dest("./html/resource/js"));
});



