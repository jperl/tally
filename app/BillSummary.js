/**
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var BillSummary = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={styles.description}>
          {this.props.bill.current_status_description}
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  description: {
    marginVertical: 10,
  }
});

module.exports = BillSummary;
