const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemap = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const webpackStream = require('webpack-stream');
const rename = require('gulp-rename');

const SRC_PATH = 'src';
const DIST_PATH = 'dist';

const PATHS = {
    scss: `${SRC_PATH}/scss/**/*.scss`,
    html: `${SRC_PATH}/**/*.html`,
    images: `${SRC_PATH}/images/**/*.*`,
    js: `${SRC_PATH}/js/index.js`
}

function buildSass(){
    return src(PATHS.scss)
    .pipe(sourcemap.init())
    .pipe(sass({includePaths: ['./node_modules']}).on('error', sass.logError))
    .pipe(
        postcss([
            autoprefixer({ grid: true }),
            cssnano()
        ])
    )
    .pipe(sourcemap.write())
    .pipe(dest(`${SRC_PATH}/css`))
    .pipe(dest(`${DIST_PATH}/css`))
    .pipe(browserSync.stream()) //уведомление браузера о произошедшем изменении
}

//Таск транспиляции js файлов
function buildJs(){
    return src(PATHS.js)
        .pipe(webpackStream(require('./webpack.config.js')))
        .pipe(rename('main.min.js'))
        .pipe(dest(`${SRC_PATH}/js`))
        .pipe(dest(`${DIST_PATH}/js`))
        .pipe(browserSync.stream()) //уведомление браузера о произошедшем изменении
}

function buildHtml() {
    return src(PATHS.html).pipe(dest(DIST_PATH)).pipe(browserSync.stream());
}

function copy() {
    return src([PATHS.images, `${SRC_PATH}/fonts/**/*.*`], { base: SRC_PATH})
        .pipe(dest(DIST_PATH));
}

function cleanDist() {
    return del(DIST_PATH);
}

function serve() {
    watch(PATHS.scss, buildSass);
    watch(PATHS.html, buildHtml);
    watch(PATHS.js, buildJs);
}

function createDevServer() {
    browserSync.init({
        server: SRC_PATH,
        notify: false
    })
}

exports.build = series(cleanDist, buildSass, buildJs, buildHtml, copy);
exports.default = series([buildSass, buildJs], parallel(createDevServer, serve));