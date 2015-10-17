checkEnvironment = function () {
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('Warning: The tally:factory package detected a non-development environment.' +
      ' This package is debugOnly and should never get bundled.');
  }

  if (process.env.MONGO_URL.indexOf('127.0.0.1') === -1 && process.env.MONGO_URL.indexOf('localhost') === -1) {
    throw new Error('Warning: The tally:factory package detected a non-local mongo database.');
  }
};
