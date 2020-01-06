import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/MediAiScreen'
import MediAIGui from '../Components/MediAIGui'
import CancerGUI from '../Components/CancerGUI'
import HeartMediAI from './HeartMediAI'
import { Button } from 'react-native-paper'

export default class MediAiScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.patientJson = {
      'model': 1,
      'np': 0,
      'pgc': 80,
      'dpb': 72,
      'tst': 35,
      'si': 0,
      'bmi': 29,
      'dpf': 0.627,
      'age': 50
    }
  }
  // openDiabetes = () => {
  //   this.props.navigation.navigate('DiabetesMediAi')
  // }
  onClick = () => {
    this.state.prediction = this.fetchResult()
  }

  fetchResult = async () => {
    const rawResponse = await fetch('https://flask-medi-ai.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.patientJson)
    })
    const content = await rawResponse.json()
    console.log(typeof content)
    return content.toString()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container} ref='container'>
          <View>
            <View style={{ alignItems: 'center', paddingTop: 60 }}>
              <Image source={Images.mediAi} style={styles.logo} />
              <Text style={styles.titleText}>Medi-AI</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText}>
                Here our high end machine learning algorithms can determine whether you have any of those conditions
              </Text>
            </View>
            <View style={styles.section}>
              <Button mode='contained' onPress={this.fetchResult}>
                Diabetes
              </Button>
              <MediAIGui />
              <Text>
                {this.state.prediction}
              </Text>
            </View>
            <View />
            <View style={styles.section}>
              <Button mode='contained' onPress={this.onClick}>
                Cancer
              </Button>
              <CancerGUI />
            </View>
            <View style={styles.section}>
              <Button mode='contained' onPress={() => console.log('Pressed')}>
                Heart Condition
              </Button>
              <HeartMediAI />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
