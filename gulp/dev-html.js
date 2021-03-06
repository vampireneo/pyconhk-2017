// @flow

'use strict';

const path = require('path');
const gulp = require('gulp-help')(require('gulp'));
const data = require('gulp-data');
const util = require('gulp-util');
const htmldata = require('./includes/html-data');
const htmlurl = require('./includes/html-url-append');
const htmltopic = require('./includes/html-topic');

// $FlowFixMe
const requireyml = require('require-yml');

// base path
const basepath = path.dirname(__dirname);

function swallowError(error) {
  util.log(`Failed on '${util.colors.cyan('dev:html')}': ${error.toString()}`);
  this.emit('end');
}

function swallowTopicRenderError(topic) {
  return function (error) {
    util.log(`Failed on '${util.colors.cyan('dev:html')}' ('${topic.id}'): ${error.toString()}`);
    this.emit('end');
  };
}

gulp.task('dev:html', 'Build ./assets/pages/*.jinja into HTML files', () => {
  const { Environment, FileSystemLoader } = require('nunjucks');
  const env = new Environment([
    new FileSystemLoader('assets/pages', { watch: true }),
    new FileSystemLoader('assets/layouts', { watch: true }),
  ]);
  htmlurl.addFilters(env);
  htmltopic.addFilters(env);

  gulp.src([
    'assets/pages/**/*.jinja',
    '!assets/pages/**/_*.jinja',
  ])
    .pipe(data(htmldata.fileData()))
    .pipe(require('gulp-nunjucks').compile({}, { env }).on('error', swallowError))
    .pipe(require('gulp-rename')({
      extname: '.html',
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('public'));

  const assetData = requireyml(`${basepath}/assets/data`);

  for (const topic of assetData.topics.topics) {
    util.log(`Generate: '/topics/${util.colors.magenta(topic.id)}/index.html'`);
    const pageID = `page--topics--topic page--topics--${topic.id}`;
    gulp.src('assets/pages/topics/_topic.jinja')
      .pipe(data(htmldata.fileData({
        topic,
        pageID,
      })))
      .pipe(require('gulp-nunjucks').compile({}, {
        env,
      }).on('error', swallowTopicRenderError(topic)))
      .pipe(require('gulp-rename')({
        dirname: topic.id,
        basename: 'index',
        extname: '.html',
      }))
      .on('error', util.log)
      .pipe(gulp.dest('public/topics'));
  }
});
