// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/RequestProfessionalScreen'
import { TextInput, Button } from 'react-native-paper'

export default class RequestProfessionalScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isConnected: false,
      connectionInfo: null,
      connectionInfoHistory: []
    }
  }



  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener('connectionChange', this.setConnected)
    NetInfo.removeEventListener('connectionChange', this.setConnectionInfo)
    NetInfo.removeEventListener('connectionChange', this.updateConnectionInfoHistory)
  }

  setConnected = (isConnected) => {
    this.setState({isConnected})
  }

  setConnectionInfo = (connectionInfo) => {
    this.setState({connectionInfo})
  }

  updateConnectionInfoHistory = (connectionInfo) => {
    const connectionInfoHistory = this.state.connectionInfoHistory.slice()
    connectionInfoHistory.push(connectionInfo)
    this.setState({connectionInfoHistory})
  }

  netInfo () {
    return ([
      {title: 'Connection', info: (this.state.isConnected ? 'Online' : 'Offline')},
      {title: 'Connection Info', info: JSON.stringify(this.state.connectionInfo)},
      {title: 'Connection Info History', info: JSON.stringify(this.state.connectionInfoHistory)}
    ])
  }

  renderCard (cardTitle, rowData) {
    return (
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{cardTitle.toUpperCase()}</Text>
        </View>

        {this.renderRows(rowData)}
      </View>
    )
  }

  renderRows (rowData) {
    return rowData.map((cell) => {
      const {title, info} = cell
      return (
        <View key={title} style={styles.rowContainer}>
          <View style={styles.rowLabelContainer}>
            <Text style={styles.rowLabel}>{title}</Text>
          </View>
          <View style={styles.rowInfoContainer}>
            <Text style={styles.rowInfo}>{info}</Text>
          </View>
        </View>
      )
    })
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
        <ScrollView style={styles.container}>
          <View style={styles.scrollContent}>
            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Image source={Images.deviceInfo} style={styles.logo} />
              <Text style={styles.titleText}>Request Professional</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionText} >
                You can request a visit with one of our professionals here.
              </Text>
              <TextInput
                label='Name'
                value={this.state.text}
                mode={'outlined'}
                selectionColor={'transparent'}
                underlineColor={'transparent'}
                onChangeText={text => this.setState({ text })}
              />
              <TextInput
                label='Surname'
                value={this.state.text}
                mode={'outlined'}
                selectionColor={'transparent'}
                underlineColor={'transparent'}
                onChangeText={text => this.setState({ text })}
              />
              <TextInput
                label='Phone'
                value={this.state.text}
                mode={'outlined'}
                selectionColor={'transparent'}
                underlineColor={'transparent'}
                onChangeText={text => this.setState({ text })}
              />
              <View>
                <Button mode='contained' onPress={() => console.log('Pressed')}>
                  Submit
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
