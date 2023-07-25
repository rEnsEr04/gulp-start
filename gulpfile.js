var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        browser: "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(gulp.parallel( 'watch', 'browser-sync')));
