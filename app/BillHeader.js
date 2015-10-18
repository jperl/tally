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

var getImageSource = require('./getImageSource');

var BillHeader = React.createClass({
  number: function () {
    return this.props.bill.display_number;
  },

  titleUpperCase: function () {
    return this.props.bill.title_without_number.toUpperCase();
  },

  render: function() {
    return (
      <View>
        <Image
          source={getImageSource(this.props.bill)}
          style={styles.detailsImage}
        />
        <Text style={styles.billNumber}>{this.number()}</Text>
        <Text style={styles.billTitle}>{this.titleUpperCase()}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  billNumber: {
    backgroundColor: 'transparent',
    color: '#a2a097',
    fontSize: 17,
    fontWeight: '600',
    position: 'absolute',
    top: 118,
    left: 17,
  },
  billTitle: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    position: 'absolute',
    top: 140,
    left: 17,
  },
  detailsImage: {
    height: 200,
    margin: 0,
    opacity: 0.8,
    backgroundColor: '#eaeaea',
  }
});

module.exports = BillHeader;
