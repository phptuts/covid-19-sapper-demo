const ghPages = require('gh-pages');
const path = require('path');

ghPages.publish(
  path.join(__dirname, '__sapper__', 'export', 'covid-19-sapper-demo'),
  () => {
    console.log('published to github');
  }
);
