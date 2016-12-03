import gulp from 'gulp';

export default gulp.task('assets', function(){
	return gulp.src(['src/**/*.html','src/**/*.bmp'])
		.pipe(gulp.dest('docs'));
});
