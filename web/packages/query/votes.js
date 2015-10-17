Query.votes = new Mongo.Collection('votes');

/**
 * Find the votes a user has access to.
 * @param [selector]
 * @param [options]
 *        options.userId The user to restrict users for.
 * @returns {Mongo.Cursor}
 */
Query.votes.findFor = function (selector, options) {
  options = options || {};

  // TODO only 

  return this.restrictFind(selector, restrictSelector, options);
};
