import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/MediAiScreen'
import { Button } from 'react-native-paper'

export default class MediAiScreen extends React.Component {
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
            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Image source={Images.mediAi} style={styles.logo} />
              <Text style={styles.titleText}>Medi-AI</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText}>
                Here our high end machine learning algorithms can determine whether you have any of those conditions
              </Text>
            </View>
            <View style={styles.section}>
              <Button mode='contained' onPress={() => console.log('Pressed')}>
                Diabetes
              </Button>
            </View>
            <View style={styles.section}>
              <Button mode='contained' onPress={() => console.log('Pressed')}>
                Cancer
              </Button>
            </View>
            <View style={styles.section}>
              <Button mode='contained' onPress={() => console.log('Pressed')}>
                Heart Condition
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
