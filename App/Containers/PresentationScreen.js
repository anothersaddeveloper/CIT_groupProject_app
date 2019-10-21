import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import ButtonBox from './ButtonBox'
import { createStackNavigator, createAppContainer } from 'react-navigation'
// Screens
import MediAiScreen from './MediAiScreen'
import RecordDetailsScreen from './RecordDetailsScreen'
import RequestProfessionalScreen from './RequestProfessionalScreen'
import PayInsuranceScreen from './PayInsuranceScreen'
import MedicalHistoryScreen from './MedicalHistoryScreen'
import SupportScreen from './SupportScreen'

// Styles
import styles from './Styles/PresentationScreenStyles'

class PresentationScreen extends React.Component {
  openRecordDetails = () => {
    this.props.navigation.navigate('RecordDetailsScreen')
  }

  openPayInsurance = () => {
    this.props.navigation.navigate('PayInsuranceScreen')
  }

  openMediAi = () => {
    this.props.navigation.navigate('MediAiScreen')
  }

  openMedicalHistory = () => {
    this.props.navigation.navigate('MedicalHistoryScreen')
  }

  openRequestProfessional = () => {
    this.props.navigation.navigate('RequestProfessionalScreen')
  }

  openSupport = () => {
    this.props.navigation.navigate('SupportScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logoHeart} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            Medi-Screen
          </Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openRecordDetails} style={styles.componentButton} image={Images.recordDetails} text='Record Details' />
            <ButtonBox onPress={this.openPayInsurance} style={styles.usageButton} image={Images.payInsurance} text='Pay for Insurance' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openMediAi} style={styles.apiButton} image={Images.mediAi} text='Medi-AI' />
            <ButtonBox onPress={this.openMedicalHistory} style={styles.apiButton} image={Images.medicalHistory} text='Medical History' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openRequestProfessional} style={styles.apiButton} image={Images.requestProfessional} text='Request Professional' />
            <ButtonBox onPress={this.openSupport} style={styles.apiButton} image={Images.support} text='Support' />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const stackNavigator = createStackNavigator({
  PresentationScreen: {screen: PresentationScreen},
  MediAiScreen: {screen: MediAiScreen},
  PayInsuranceScreen: {screen: PayInsuranceScreen},
  RequestProfessionalScreen: {screen: RequestProfessionalScreen},
  RecordDetailsScreen: {screen: RecordDetailsScreen},
  MedicalHistoryScreen: {screen: MedicalHistoryScreen},
  SupportScreen: {screen: SupportScreen}
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'PresentationScreen',
  headerMode: 'none',
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})

export default createAppContainer(stackNavigator)
