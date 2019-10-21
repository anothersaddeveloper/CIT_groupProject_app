// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/SupportScreen'

class SupportScreen extends React.Component {
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
              <Image source={Images.support} style={styles.logo} />
              <Text style={styles.titleText}>Support</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.sectionText}>
                Have questions? We are here to support you.  Contact us if you want to get more information about the service.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default SupportScreen
