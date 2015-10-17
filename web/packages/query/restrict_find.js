/**
 * Limit which data is accessible.
 * @param selector
 * @param restrictSelector
 * @param options
 * @returns {Mongo.Cursor}
 */
Mongo.Collection.prototype.restrictFind = function (selector, restrictSelector, options) {
  selector = selector || {};

  options = _.extend({limit: 20, sort: {_id: -1}}, options);
  options.limit = Math.min(options.limit, 1000);

  if (restrictSelector) {
    return this.find({
      $and: [selector, restrictSelector]
    }, options);
  } else {
    return this.find(selector || {}, options);
  }
};

Mongo.Collection.prototype.constructor = Mongo.Collection;
