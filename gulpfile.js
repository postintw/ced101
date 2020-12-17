const { src, dest, series, parallel } = require('gulp'), concat = require('gulp-concat'), cleanCss = require('gulp-clean-css'),uglify=require('gulp-uglify'),sass=require('gulp-sass'),sourcemaps=require('gulp-sourcemaps'),fileinclude=require(gulp-file-include),clean = require('gulp-clean'),browserSync = require('browser-sync').create();

var reload = browserSync.reload;
var rename = require('gulp-rename');
//js任務
function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}
//css任務
function defaultTask1(cb) {
    console.log('打包css');
    cb();
}
//搬家的
function move() {
    return src('index.html').pipe(dest('dest/'));
}
exports.js = defaultTask;//預設值default只要輸入gulp就好，就會執行function
exports.css = defaultTask1;
exports.copyHtml = move;
exports.all = series(js, css);//串連，先編譯sass之後壓縮css
exports.all2 = parallel(js, css);//並行
//觀念:何時要同時並行，何時要有先後順序串連
function concatCss() {
    return src(['./*.css','!./b.css']).pipe(concat('all.css')).pipe(dest('app/css'));
}
exports.concat = concatCss;//任務輸出
function minify() {
    return src('app/*.css').pipe(cleanCss()).pipe(dest(''))
}
exports.allcss = series(concatCss, minify);
function concatall() {
    return src('./*.css').pipe(concat('all.css')).pipe(cleanCss()).pipe(dest('app/css'));
}
exports.allmission = concatall;
function concatall() {
    return src('css/*.css').pipe(concat('all.css')).pipe(cleanCss())
        .pipe(rename(path => {
            path.basename = "-min";//檔名
            path.extname = ".css";//副檔名
        }))
}
function ugljs() {
    return src('js/*.js').pipe(uglify()).pipe(dest('app/js'));
}
exports.ugjs = ugljs;//壓縮js
//sass
function sassStyle() {
    return src('.sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())//壓縮
        .pipe(dest('.dest/css'));
}
exports.sass = sassStyle;
function includehtml() {
    return src('*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('app/'));
}
function watchfile() {
    watch('sass/*.scss', series(del, sassStyle));
    watch('js/*.js', ugljs);
}
function clearHtml() {
    return src('dist/*.html', {
        read: false,//fsalse不讀取內容直接刪除，效能增加
        force: true,//強制刪除檔案
        allowEmpty: true,
    }).pipe(clean());
}
exports.watch = watchfile;
function clear() {
    return src('dist/css', {
        read: false,//false不讀取內容直接刪除，效能增加
        force: true,//強制刪除檔案
        allowEmpty:true,
    }).pipe(clean());
}
exports.del = clear;
//先清除css後打包sass怎麼做
// exports.cssall = series(del, sassStyle);
function sync() {
    browserSync.init({
        server: {
            baseDir: "./",
            index:'index.html',
        },port:3600
    });
        watch('sass/*.scss', series(del, sassStyle).on('change',reload));
    watch('js/*.js', ugljs);
}
exports.bsync = sync;

