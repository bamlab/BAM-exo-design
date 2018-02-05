import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Page, Button } from 'exo_design_react_native/src/components';

class App extends Component {
  render() {
    return (
      <Page>
        <View>
          <Button buttonText="CONFIRMER ÉTAT DES LIEUX" />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    margin: 10,
  },
});

export default App;
