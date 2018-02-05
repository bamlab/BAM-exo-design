import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Page } from 'exo_design_react_native/src/components';
import { Car, Song } from 'exo_design_react_native/src/pages';

class App extends Component {
  render() {
    return (
      <Page>
        <Song />
      </Page>
    );
  }
}

export default App;
