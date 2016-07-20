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
var path = require('path');
var through2 = require('through2');
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var _ = require('lodash');



gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    fs.readdir('html/template/', function(err, files){
        if(err) throw err;
        var results = [], count = files.length;
        files.forEach(function(file){
            fs.stat('html/template/' + file, function (err, stats) {
                if (err) throw err;

                var data = fs.readFileSync('html/template/'+ file, 'UTF-8');
                var index = data.indexOf('type="text/template">');
                var last  = data.indexOf('</script>');
                var idName = data.substring(12, index-2);
                data = data.substring(index + 21, last);

                fs.writeFileSync('html/resource/js/template.js', data);
                gulp.src('html/resource/js/template.js')
                    .pipe(uglify())
                    .pipe(gulp.dest('html/resource/js/template.js'));

                data = fs.readFileSync('html/resource/js/template.js', 'UTF-8');

                var str = idName + '=' + data;
                console.log(str);
                fs.writeFileSync('html/resource/js/template.js', str);
            })
        })
    })
});

function readLines(input, func) {
    var remaining = '';

    input.on('data', function(data) {
        remaining += data;
        var index = remaining.indexOf('type="text/template">');
        var last  = remaining.indexOf('</script>');

        remaining = remaining.substring(index + 21, last);
    });

    input.on('end', function() {
        if (remaining.length > 0) {
            func(remaining.toString());
        }
    });
    return remaining.toString();
}

function func(data) {
    return data;
}

