var both = ['client', 'server'];

Package.describe({
  name: 'lookback:emoji',
  summary: 'Easily render and manage emojis in Meteor.',
  version: '0.2.0',
  git: 'https://github.com/lookback/meteor-emoji'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');

  api.use(['mongo', 'coffeescript', 'check', 'underscore'], both);
  api.use('templating', 'client');

  api.addAssets('seed/emojis.json', 'server');

  api.addFiles('emojis.coffee', both);
  api.addFiles('template.coffee', 'client');
  api.addFiles('seed/seed.coffee', 'server');

  api.export('Emojis', both);
});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'mike:mocha-package',
    'practicalmeteor:chai',
    'practicalmeteor:sinon',
    'respondly:test-reporter',
    'lookback:emoji'
  ]);

  api.addFiles('spec/emojis-spec.coffee');
  api.addFiles('spec/emojis-server-spec.coffee', 'server');
});
