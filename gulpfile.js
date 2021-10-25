const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildSass(){
    return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}

exports.sass = buildSass;