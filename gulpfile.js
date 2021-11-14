const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemap = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function buildSass(){
    return src('src/scss/**/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass({includePaths: ['./node_modules']}).on('error', sass.logError))
    .pipe(
        postcss([
            autoprefixer(),
            cssnano()
        ])
    )
    .pipe(sourcemap.write())
    .pipe(dest('dist/css'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function buildHtml() {
    return src('src/**/*.html').pipe(dest('dist')).pipe(browserSync.stream());
}

function copy() {
    return src(['src/images/**/*.*', 'src/fonts/**/*.*'], { base: 'src'}).pipe(dest('dist'));
}

function cleanDist() {
    return del('dist');
}

function serve() {
    watch('src/scss/**/*.scss', buildSass);
    watch('src/**/*.html', buildHtml);
}

function createDevServer() {
    browserSync.init({
        server: 'src',
        notify: false
    })
}

exports.build = series(cleanDist, buildSass, buildHtml, copy);
exports.default = parallel(createDevServer, serve);