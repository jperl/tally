Package.describe({
  name: 'tally:factory',
  version: '0.0.1',
  summary: 'Create mock data'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    'dburles:factory@0.3.10',
    'tally:query'
  ], 'server');

  api.imply('dburles:factory', 'server');

  api.addFiles([
    'check_environment.js',
    'factory.defaults.js',
    'factory.js',
    'populate_mocks.js'
  ], 'server');
});
