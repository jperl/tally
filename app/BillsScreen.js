/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
} = React;

var BillCell = require('./BillCell');
var BillScreen = require('./BillScreen');

var ddp = require('./ddp');

var BillsScreen = React.createClass({
  getInitialState: function() {
    return {
      billsObserver: null,
      isLoading: false,
      isLoadingTail: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      queryNumber: 0,
    };
  },

  componentDidMount: function() {

    this.setState({
      isLoading: true,
      isLoadingTail: false,
    });

    ddp.initialize()
      .then((res) => {
        ddp.subscribe('bills', ['billy bill bills'])
          .then(() => {
            let billsObserver = ddp.collections.observe(() => {
              let bills = [];
              if (ddp.collections.bills) {
                bills = ddp.collections.bills.find();
              }
              return bills;
            });

            this.setState({billsObserver: billsObserver});

            billsObserver.subscribe((results) => {
              this.setState({
                dataSource: this.getDataSource(results),
                isLoading: false
              });

              this.selectBill(results[0]);
            });
          });
       });
  },

  getDataSource: function(bills: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(bills);
  },

  selectBill: function(bill: Object) {
    this.props.navigator.push({
      title: bill.title_without_number,
      component: BillScreen,
      passProps: {bill},
    });
  },

  renderFooter: function() {
    if (!this.hasMore() || !this.state.isLoadingTail) {
      return <View style={styles.scrollSpinner} />;
    }

    return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
  },

  renderSeparator: function(
    sectionID: number | string,
    rowID: number | string,
    adjacentRowHighlighted: boolean
  ) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );
  },

  renderRow: function(
    bill: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <BillCell
        key={bill.id}
        onSelect={() => this.selectBill(bill)}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        bill={bill}
      />
    );
  },

  render: function() {
    var content = this.state.dataSource.getRowCount() === 0 ?
      <NoBills
        isLoading={this.state.isLoading}
      /> :
      <ListView
        ref="listview"
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />;

    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  },
});

var NoBills = React.createClass({
  render: function() {
    var text = 'No bills found';

    return (
      <View style={[styles.container, styles.centerText]}>
        <Text style={styles.noBillsText}>{text}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 64,
    flexDirection: 'row',
  },
  centerText: {
    alignItems: 'center',
  },
  noBillsText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});

module.exports = BillsScreen;
