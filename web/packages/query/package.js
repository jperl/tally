Package.describe({
  name: 'tally:query',
  summary: 'Query collections.',
  version: '0.0.1',
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'mongo',
    'underscore'
  ], ['web', 'server']);

  api.addFiles([
    // Namespace
    'query.js',
    'restrict_find.js',
    'bills.js',
    'members.js'
  ], ['web', 'server']);

  api.export('Query');
});
