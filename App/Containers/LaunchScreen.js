import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import LaunchScreenButton from '../Components/LaunchScreenButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <View style={styles.section} >
              <Text style={styles.headerText}>Medi-Screen</Text>
            </View>
            <Image source={Images.logoHeart} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              Welcome to Medi-Screen!
            </Text>
          </View>

          <LaunchScreenButton />
        </ScrollView>
      </View>
    )
  }
}
