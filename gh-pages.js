const ghpages = require('gh-pages');

// Замените 'имя-вашего-репозитория' на имя вашего репозитория на GitHub
ghpages.publish('build', { repo: 'https://github.com/mikita-naerenko/valantis.git' }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Published successfully!');
  }
});