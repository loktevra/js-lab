import gulp from 'gulp';
import browserSyncer from 'browser-sync';

export default gulp.task('server', function (){
	browserSyncer.init({
		server:'./docs'
	});
	browserSyncer.watch(['docs/**/*.*']).on('change',browserSyncer.reload);
});
