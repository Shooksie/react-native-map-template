/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { SideMenu, List, ListItem, Button } from 'react-native-elements';


import Tabber from './Tabber';


class Main extends Component {
  componentWillMount() {
  this.state = {
    isOpen: this.props.expanded
  };
  this.toggleSideMenu = this.toggleSideMenu.bind(this);
}

onSideMenuChange() {
  this.props.open();
}

toggleSideMenu() {
  this.props.open();
}

  render() {
    const MenuComponent = (
    <ScrollView
    style={{
      flex: 1,
      backgroundColor: 'white',
      borderRightWidth: 1,
      borderColor: 'lightgrey',
      paddingTop: 90,
    }}
    >
      <List containerStyle={{ marginBottom: 20, marginTop: 30 }}>
      {
        <View>
         <ListItem
          title={'Inbox'} onPress={Actions.inbox}
         />
        </View>

     }

      </List>
      <List containerStyle={{ marginBottom: 20 }}>
      {
        <View>
         <ListItem
           title={'settings'}
         />
         <ListItem
           title={'Profile'}
         />
         <ListItem
           title={'Network'}
         />
        </View>

     }

      </List>
    </ScrollView>
  );
    return (
      <SideMenu
        isOpen={this.props.expanded}
        menu={MenuComponent}
      >
        <Tabber />
      </SideMenu>
    );
  }
}

const mapStateToProps = () => {
  return{};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default connect(mapStateToProps, {})(Main);
