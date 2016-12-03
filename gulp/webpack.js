import gulp from 'gulp';
import del from 'del';
import streamCombiner2 from 'stream-combiner2';
import named from 'vinyl-named';
import path from 'path';
import webpackStream from 'webpack-stream';

let isDevelopment = process.env.NODE_ENV == 'development';
let isProduction = process.env.NODE_ENV == 'production';

export default gulp.task('webpack', function(callback){
	let firstBuildReady = false;

	function done(err,stats){
		firstBuildReady = true;
		if(err){
			return;
		}
	}

	return streamCombiner2.obj(
		gulp.src('src/*.js'),
        named(),
		webpackStream({
			output:{
				publicPath:'/'
			},
			watch: isDevelopment,
			devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
			module: {
				loaders: [{
					loader: 'babel-loader'
				}]
			},
			plugins: [
				new webpackStream.webpack.NoErrorsPlugin()
			]
		},null,done),
		gulp.dest('docs'),
	)
	.on('data',function(){
		if(isDevelopment && !callback.called){
			callback.called = true;
			callback();
		}
	})
});
