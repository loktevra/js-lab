import gulp from 'gulp';
import watch from './gulp/watch';
import assets from './gulp/assets';
import server from './gulp/server';
import clean from './gulp/clean';
import webpack from './gulp/webpack';

let isDevelopment = process.env.NODE_ENV == 'development';
let isProduction = process.env.NODE_ENV == 'production';

gulp.task('default',
    gulp.series(
        'clean',
        'assets',
        'webpack',
        gulp.parallel('watch','server')
    )
);
