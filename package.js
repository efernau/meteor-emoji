var both = ['client', 'server'];

Package.describe({
  name: 'lookback:emoji',
  summary: 'Easily render and manage emojis in Meteor.',
  version: '0.4.1',
  git: 'https://github.com/lookback/meteor-emoji'
});

Package.onUse(function(api) {
  api.use([
    'mongo',
    'coffeescript',
    'modules',
    'check',
    'underscore'
  ], both);

  api.use('templating', 'client');

  api.addAssets('seed/emojis.json', 'server');

  api.addFiles(['polyfill.js', 'emojis.coffee'], both);
  api.addFiles('template.coffee', 'client');
  api.addFiles('seed/seed.coffee', 'server');

  api.export('Emojis', both);
});

Package.onTest(function(api) {
  Npm.depends({
    chai: '4.1.2',
    sinon: '4.2.2'
  });

  api.use([
    'coffeescript',
    'meteortesting:mocha',
    'lookback:emoji'
  ]);

  api.addFiles([
    'spec/setup.coffee',
    'spec/emojis-spec.coffee',
    'spec/emojis-transforms-spec.coffee'
  ]);
});
