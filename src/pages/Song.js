import React from 'react';
import { View, Modal } from 'react-native';
import { Button } from 'exo_design_react_native/src/components';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSongModalOpened: false };
  }

  openModal = () => this.setState({ isSongModalOpened: true });

  render() {
    return (
      <View>
        <Button buttonText="AFFICHER LES PAROLES DE LA CHANSON" onPress={this.openModal} />
        <Modal visible={this.state.isSongModalOpened} />
      </View>
    );
  }
}

export default Song;
