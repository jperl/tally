Query.bills = new Mongo.Collection('bills');

if (Meteor.isServer) {

  Meteor.publish('bills', function (selector) {
    console.log("SUB bills", selector);

    return Query.bills.find(selector || {});
  });

}
