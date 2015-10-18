/**
 * @providesModule Tally
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

// Polyfill the process functionality needed for minimongo-cache
global.process = require("./process.polyfill");

var BillsScreen = require('./BillsScreen');

var Tally = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Bills',
          component: BillsScreen,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('Tally', () => Tally);

module.exports = Tally;
