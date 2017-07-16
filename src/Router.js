import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './main';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginBottom: 0 }}>
      <Scene key="main" initial>
        <Scene key="home" component={Home} hideNavBar initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
