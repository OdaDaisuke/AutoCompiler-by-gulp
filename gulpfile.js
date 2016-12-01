const gulp = require('gulp');
const exec = require('child_process').exec;
var targetFiles = './*.c';


gulp.task('default', function() {
});

gulp.task('w', function() {
	var watchDir = gulp.watch(targetFiles);
	function compileFile(filePath) {
		exec('./compile.sh ' + filePath);
	}
	watchDir.on('change', function(event) {
		if(event.type == 'changed') {
			compileFile(event.path.slice(0, -2));
			console.log(event.path + ':successfully compiled!');
			exec(event.path.slice(0, -2) + '.exe', (error, stdout, stderror) => {
				console.log(stdout);
			});
		}
	});
});
