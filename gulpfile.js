const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const atImport = require("postcss-import");
const cssNested = require("postcss-nested");
const mixins = require("postcss-mixins");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
const gulpEsdocs = require("gulp-esbuild");

gulp.task("postcss", () => {
  const plugins = [
    autoprefixer(),
    atImport(),
    cssNested(),
    cssnano(),
    mixins({
      scale: (mixin, size) => {
        return `calc(100vw / 1600 * ${size}`;
      },
    }),
    require("postcss-simple-vars")({ silent: true }),
  ];

  return gulp
    .src("./styles/styles.pcss")
    .pipe(postcss(plugins))
    .pipe(
      rename({
        extname: ".css",
      })
    )
    .pipe(gulp.dest("./docs/styles/"));
});

gulp.task("assets", () => {
  return gulp
    .src("./assets/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("./docs/assets/"));
});

gulp.task("scripts", () => {
  return gulp
    .src("./scripts/**/*.js")
    .pipe(
      gulpEsdocs({
        outfile: "index.js",
        bundle: true,
      })
    )
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulp.dest("./docs/scripts/"));
});

gulp.task("views", () => {
  return gulp.src("./views/**/*.html").pipe(gulp.dest("./docs/"));
});

gulp.task(
  "serve",
  gulp.series("postcss", "assets", "scripts", "views", () => {
    browserSync.init({
      server: "./docs/",
      port: 3000,
    });

    gulp.watch("./styles/styles.pcss", gulp.series("postcss"));
    gulp.watch("./assets/images/**/*", gulp.series("assets"));
    gulp.watch("./assets/icons/**/*", gulp.series("assets"));
    gulp.watch("./scripts/**/*", gulp.series("scripts"));
    gulp.watch("./views/**/*", gulp.series("views"));
    gulp.watch("./docs/**/*").on("change", browserSync.reload);
  })
);
