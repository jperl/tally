Factory.resetDatabase = function () {
  checkEnvironment();

  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;
  var getCollections = Meteor.wrapAsync(db.collections, db);
  var collections = getCollections();
  var appCollections = _.reject(collections, function (col) {
    return col.collectionName.indexOf('velocity') === 0 || ['system.indexes'].indexOf(col.collectionName) !== -1;
  });

  _.each(appCollections, function (appCollection) {
    var remove = Meteor.wrapAsync(appCollection.remove, appCollection);
    remove({});
  });
};

Meteor.methods({
  // Reset the test database
  'factory.resetData': function () {
    Factory.resetDatabase();
  }
});
