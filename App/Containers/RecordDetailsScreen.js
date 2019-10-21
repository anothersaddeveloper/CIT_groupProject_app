// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { Platform, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// styles
import styles from './Styles/RecordDetailsScreen'

// Examples Render Engine
import { Button, TextInput } from 'react-native-paper'

class RecordDetailsScreen extends React.Component {
  state = {
    textName: '',
    textSurname: '',
    textPhone: ''
  }

  renderAndroidWarning () {
    if (Platform.OS === 'android') {
      return (
        <Text style={styles.sectionText}>
          Android only: Animations are slow? You are probably running the app in debug mode.
          It will run more smoothly once your app will be built.
        </Text>
      )
    }
    return null
  }

  render () {
    return (
      <View style={[styles.container, styles.mainContainer]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Image source={Images.recordDetails} style={styles.logo} />
              <Text style={styles.titleText}>Record Details</Text>
            </View>
            <View style={styles.description}>
              {this.renderAndroidWarning()}
              <Text style={styles.sectionText}>
               Here you can record the details of your patient or GP. Below you will find a form to fill,
                all the information will be securely stored in our database.
              </Text>
            </View>

            <TextInput
              label='Name'
              value={this.state.text}
              mode={'outlined'}
              selectionColor={'transparent'}
              underlineColor={'transparent'}
              onChangeText={textName => this.setState({ textName })}
            />
            <TextInput
              label='Surname'
              value={this.state.text}
              mode={'outlined'}
              selectionColor={'transparent'}
              underlineColor={'transparent'}
              onChangeText={textSurname => this.setState({ textSurname })}
            />
            <TextInput
              label='Phone'
              value={this.state.text}
              mode={'outlined'}
              selectionColor={'transparent'}
              underlineColor={'transparent'}
              onChangeText={textPhone => this.setState({ textPhone })}
            />
            <Button mode='contained' onPress={() => console.log('Pressed')}>
              Submit
            </Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default RecordDetailsScreen
