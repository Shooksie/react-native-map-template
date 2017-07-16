import _ from 'lodash';
import React, { Component } from 'react';
import {  ActivityIndicator, View, ScrollView, ListView } from 'react-native';
import { SearchBar, Text, Button , Icon} from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 38.971870,
      longitude: -94.579764,
      error: null,
      obj: false,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        console.log(initialPosition);
        this.setState({
          latitude: Number(position.coords.latitude),
          longitude:Number(position.coords.longitude),
          error: null,
          view: true
        });
      },
      (error) => this.setState({ error: error.message }),
      { timeout: 20000, maximumAge: 1000 },
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  onPressCallout(marker) {
    const { name, address, specialty, times_available, lat, lon } = marker;
    this.props.setDocInfo({ name, address, specialty, times_available, lat, lon });
  }
  onPressPharmCallout(marker) {
    const { name, address, lat, long } = marker;
    this.props.setPharmInfo({ name, address, lat, long });

  }
  renderList() {
    console.log(this.state);
   return (
   <MapView
   style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
     region={{
       latitude: this.state.latitude,
       longitude: this.state.longitude,
       latitudeDelta: 0.0421,
       longitudeDelta: 0.0421,
     }}
   >
       <MapView.Marker
         coordinate={{
           latitude: this.state.latitude,
           longitude: this.state.longitude,
         }}
         title={'current Location'}
       >
       <View
        style={{
          borderWidth: 1,
          width: 25,
          height: 25,
          borderColor: 'blue',
          borderRadius: 100,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center' }}
       >
        <View
          style={{
            borderWidth: 2,
            width: 10,
            height: 10,
            borderColor: 'white',
            borderRadius: 100,
            backgroundColor: 'blue'
          }}
        />
      </View>
    </MapView.Marker>
   </ MapView>);
 }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
           {this.renderList()}
        </View>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, { })(Home);
