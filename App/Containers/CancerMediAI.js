import { View } from 'react-native'
import React, { Component } from 'react'
import { Button, TextInput, Text } from 'react-native-paper'

class MediAIGui extends Component {
  state = {
    'patientId': 1,
    'prediction': 0,
    patientJson: {
      'model': 1,
      'np': 6,
      'pgc': 100,
      'dpb': 72,
      'tst': 35,
      'si': 0,
      'bmi': 33.6,
      'dpf': 0.627,
      'age': 50
    }
  }

  getPrediction = async () => {
    const rawResponse = await fetch('https://flask-medi-ai.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.patientJson)
    })
    console.log(this.state.patientJson)
    const content = await rawResponse.json()
    console.log(content)
    return content
    // this.saveRecordToDb()
  }

  setPredictionStatus = () => {
    this.getPrediction().then(content => this.setState({prediction: Number(content)}))
  }

  saveRecordToDb = async () => {
    console.log('rawResponse')
    const rawResponse = await fetch('https://flask-db-api.herokuapp.com/diabetes/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'patient_id': this.state.patientId,
        'prediction': this.state.prediction,
        'age': this.state.patientJson.age,
        'bmi': this.state.patientJson.bmi,
        'times_pregnant': this.state.patientJson.pgc,
        'diabetes_pedigree_function': this.state.patientJson.dpf,
        'glucose_concentration': this.state.patientJson.pgc,
        'diastolic_blood_pressure': this.state.patientJson.dpb,
        'triceps_skin_fold_thickness': this.state.patientJson.tst
      })
    })
    console.log(rawResponse)
    // return rawResponse
  }
  render () {
    return (
      <View>
        <TextInput
          label={'Patient Id'}
          value={this.state.patientId}
          onChangeText={textId => this.setState({patientId: textId})}
        />
        <TextInput
          label={'Number of times Pregnant'}
          value={this.state.patientJson.np}
          onChangeText={np => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              np
            }
          }))}
        />
        <TextInput
          label={'Age'}
          value={this.state.patientJson.age}
          onChangeText={age => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              age
            }
          }))}
        />
        <TextInput
          label={'BMI'}
          value={this.state.patientJson.bmi}
          onChangeText={bmi => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              bmi
            }
          }))}

        />
        <TextInput
          label={'Diabetes Pedigree Function'}
          value={this.state.patientJson.dpf}
          onChangeText={dpf => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              dpf
            }
          }))}

        />

        <TextInput
          label='Plasma glucose concentration'
          value={this.state.patientJson.pgc}
          onChangeText={pgc => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              pgc
            }
          }))}

        />

        <TextInput
          label='Diastolic blood pressure'
          value={this.state.patientJson.dpb}
          onChangeText={dpb => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              dpb
            }
          }))}

        />
        <TextInput
          label='Triceps Skin Fold Thickness'
          value={this.state.patientJson.tst}
          onChangeText={tst => this.setState(prevState => ({
            patientJson: {
              ...prevState.patientJson,
              tst
            }
          }))}

        />
        <Button onPress={this.setPredictionStatus} mode='contained'>
          Submit
        </Button>
        <Text style={{textAlign: 'center', fontSize: 30}}>
          The chance that you have diabetes is: {this.state.prediction}
        </Text>
      </View>
    )
  }
}
export default MediAIGui
