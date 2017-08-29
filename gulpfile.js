const gulp = require('gulp')
const bs = require('browser-sync').create()

gulp.task('default', () => {})

gulp.task('server', () => {
    bs.init({
        server: {
            baseDir: './'
        },
        open: false,
        reloadOnRestart: true
    })

    gulp.watch(['index.html', 'app/**/*.html'], [bs.reload])
    gulp.watch(['assets/javascripts/**/*.js', 'app.js', 'app/**/*.js'], [bs.reload])
    gulp.watch(['assets/stylesheets/**/*.css'], [bs.reload])
})
