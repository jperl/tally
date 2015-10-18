/**
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  ScrollView,
} = React;

var BillHeader = require('./BillHeader');
var BillSummary = require('./BillSummary');

var BillScreen = React.createClass({
  render: function() {
    return (
      <ScrollView>
        <BillHeader bill={this.props.bill} />
        <BillSummary bill={this.props.bill} />
      </ScrollView>
    );
  },
});

module.exports = BillScreen;
