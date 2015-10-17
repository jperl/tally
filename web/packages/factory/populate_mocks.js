// Populate mock data
if (!Query.bills.find().count()) {
  Factory.create('bill');
  Factory.create('member');
}
