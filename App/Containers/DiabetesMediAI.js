// Fair Warning:  PluginExamples has a good bit of Ignite automation in editing.
// Though robust, if you should modify this file, review your changes with us
// As to not break the automated addition/subtractions.
import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import { Button, TextInput } from 'react-native-paper'
import styles from './Styles/PayInsuranceScreen'

export class DiabetesMediAI extends React.Component {
  state = {
    text: ''
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Text style={styles.titleText}>Pay for Insurance</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText} >
                Here you can pay for your insurance from within the app.
              </Text>
            </View>
            <View style={styles.section}>
              <TextInput
                label='Amount'
                value={this.state.text}
                mode={'outlined'}
                selectionColor={'transparent'}
                underlineColor={'transparent'}
                onChangeText={text => this.setState({ text })}
              />
              <View>
                <Button mode='contained' onPress={this.createNewTodo}>
                  Submit
                </Button>
              </View>
            </View>
            <View style={styles.screenButtons} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
