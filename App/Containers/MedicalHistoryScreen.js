import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/MedicalHistoryScreen'

export default class MedicalHistoryScreen extends React.Component {
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
        <ScrollView style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Image source={Images.medicalHistory} style={styles.logo} />
              <Text style={styles.titleText}>Medical History</Text>
            </View>
            <View style={styles.section} key='colors-header'>
              <Text style={styles.sectionText} key='colors'>Here you can view your medical history.</Text>
            </View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>History</Text>
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
