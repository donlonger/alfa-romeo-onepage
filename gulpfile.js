var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('sass', function () {
	return gulp.src('./src/styles/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./build/styles'));
	});
	
gulp.task('compress', function (cb) {
	pump([
				gulp.src('src/scripts/*.js'),
				uglify(),
				gulp.dest('build/scripts')
		],
		cb
	);
});

gulp.task('run', gulp.series('sass' , 'compress'));


gulp.task('watch', gulp.series(function(){
	gulp.watch('./src/styles/*.scss', gulp.series('sass'));
	gulp.watch('./src/scripts/*.js', gulp.series('compress'));
}));

gulp.task('default', gulp.series('run', 'watch'));
