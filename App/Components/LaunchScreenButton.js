import React from 'react'
import { Image, ScrollView, View, Text, Modal } from 'react-native'
import RoundedButton from './RoundedButton'
import PresentationScreen from '../Containers/PresentationScreen'

// styles
import styles from '../Containers/Styles/LaunchScreenStyles'
import { Images } from '../Themes'

export default class LaunchScreenButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <RoundedButton onPress={this.toggleModal}>
          Login
        </RoundedButton>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <PresentationScreen screenProps={{ toggle: this.toggleModal }} />
        </Modal>
      </View>
    )
  }
}
