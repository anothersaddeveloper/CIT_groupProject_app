import { View } from 'react-native'
import React, { Component } from 'react'
import { Button, TextInput, Text } from 'react-native-paper'

class MediAIGui extends Component {
  state = {
    'patientId': 2,
    'prediction': 0,
    'model': 2,
    'age': 48,
    'bmi': 23.5,
    'gluc': 70,
    'inc': 2.707,
    'HOMA': 0.467408667,
    'lep': 8.8071,
    'adi': 9.7024,
    'res': 7.99585,
    'mcp': 417.114
  }

  getPrediction = async () => {
    const rawResponse = await fetch('https://arcane-earth-43004.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 2,
        'age': parseFloat(this.state.age),
        'bmi': parseFloat(this.state.bmi),
        'gluc': parseFloat(this.state.gluc),
        'inc': parseFloat(this.state.inc),
        'HOMA': parseFloat(this.state.HOMA),
        'lep': parseFloat(this.state.lep),
        'adi': parseFloat(this.state.adi),
        'res': parseFloat(this.state.res),
        'mcp': parseFloat(this.state.mcp)
      })
    })
    console.log(this.state)
    this.saveRecordToDb()
    const content = await rawResponse.json()
    console.log(content)
    return content
  }

  setPredictionStatus = () => {
    this.getPrediction().then(content => this.setState({ prediction: Number(content.prediction) }))
  }

  saveRecordToDb = async () => {
    console.log('rawResponse')
    const rawResponse = await fetch('https://flask-db-api.herokuapp.com/cancer/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'patient_id': parseInt(this.state.patientId),
        'prediction': parseInt(this.state.prediction),
        'age': parseFloat(this.state.age),
        'bmi': parseFloat(this.state.bmi),
        'glucose': parseFloat(this.state.gluc),
        'insulin': parseFloat(this.state.inc),
        'homa': parseFloat(this.state.HOMA),
        'leptin': parseFloat(this.state.dpb),
        'adiponectin': parseFloat(this.state.tst),
        'resistin': parseFloat(this.state.res),
        'mcp_1': parseFloat(this.state.mcp),
        'type': 'Cancer'
      })
    }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    console.log(rawResponse)
    // return rawResponse
  }

  render () {
    return (
      <View>
        <TextInput
          label={'Patient Id'}
          onChangeText={patientId => this.setState({ patientId: patientId })}
          keyboardType='number-pad'
          defaultValue={2}
        />
        <TextInput
          label={'Age'}
          value={this.state.age}
          onChangeText={age => this.setState({ age: age })}
          keyboardType='number-pad'
          defaultValue={23}
        />
        <TextInput
          label={'BMI'}
          value={this.state.bmi}
          onChangeText={bmi => this.setState({ bmi: bmi })}
          defaultValue={20}
        />
        <TextInput
          label={'Blood Glucose'}
          value={this.state.gluc}
          onChangeText={gluc => this.setState({ gluc: gluc })}
          keyboardType='number-pad'
          defaultValue={0.667}
        />

        <TextInput
          label='Insulin'
          value={this.state.inc}
          onChangeText={inc => this.setState({ inc: inc })}
          keyboardType='number-pad'
          defaultValue={80}
        />

        <TextInput
          label='HOMA'
          value={this.state.HOMA}
          onChangeText={HOMA => this.setState({ HOMA: HOMA })}
          keyboardType='number-pad'
          defaultValue={72}
        />
        <TextInput
          label='Leptin'
          value={this.state.lep}
          onChangeText={lep => this.setState({ lep: lep })}
          keyboardType='number-pad'
          defaultValue={35}
        />
        <TextInput
          label='Adiponectin'
          value={this.state.adi}
          onChangeText={adi => this.setState({ adi: adi })}
          keyboardType='number-pad'
          defaultValue={35}
        />
        <TextInput
          label='Resistin'
          value={this.state.res}
          onChangeText={res => this.setState({ res: res })}
          keyboardType='number-pad'
          defaultValue={35}
        />
        <TextInput
          label='MCP'
          value={this.state.mcp}
          onChangeText={mcp => this.setState({ mcp: mcp })}
          keyboardType='number-pad'
          defaultValue={35}
        />
        <Button onPress={this.setPredictionStatus} mode='contained'>
          Submit
        </Button>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          The chance that you have cancer is: {this.state.prediction}
        </Text>
      </View>
    )
  }
}

export default MediAIGui
