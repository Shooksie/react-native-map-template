import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Tabs, Tab, Icon, Text, Divider, SearchBar } from 'react-native-elements'

import Home from './views/home';

class Taber extends  Component  {
  constructor() {
      super()
      this.state = {
        selectedTab: 'home',
      }
    }

  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state;
    const { open } = this.props;
    return (
      <View style={{ flex: 6 }}>
      <Tabs>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6}}
          renderIcon={
            () =>
            <Icon
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 12
            }} color={'#5e6977'} name='menu' size={33}
            />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='menu' size={30} />}
          onPress={''}
        >
          <Home />
        </Tab>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={
            () =>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12
              }}
              color={'#5e6977'}
              name='home'
              size={33}
            />
          }
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
          onPress={() => this.changeTab('home')}>
          <Home />
        </Tab>
      </Tabs>
    </View>
    );
  }
} const mapStateToProps = () => {
  return {};
};


export default connect(mapStateToProps, {})(Taber);
