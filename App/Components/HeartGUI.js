import { View } from 'react-native'
import React, { Component } from 'react'
import { Button, TextInput, Text } from 'react-native-paper'

class MediAIGui extends Component {
  state = {
    'patientId': 2,
    'prediction': 0,
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

  getPrediction = async () => {
    const rawResponse = await fetch('https://medi-ai-finished.herokuapp.com//', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'model': 1,
        'age': parseInt(this.state.age),
        'bmi': parseInt(this.state.bmi),
        'np': parseInt(this.state.pgc),
        'dpf': parseFloat(this.state.dpf),
        'pgc': parseInt(this.state.pgc),
        'dpb': parseInt(this.state.dpb),
        'tst': parseInt(this.state.tst),
        'si': 0
      })
    })
    console.log(JSON.stringify({
      'model': 1,
      'age': parseInt(this.state.age),
      'bmi': parseInt(this.state.bmi),
      'np': parseInt(this.state.pgc),
      'dpf': parseFloat(this.state.dpf),
      'pgc': parseInt(this.state.pgc),
      'dpb': parseInt(this.state.dpb),
      'tst': parseInt(this.state.tst),
      'si': 0
    }))
    this.saveRecordToDb()
    const content = await rawResponse.json()
    console.log(content)
    return content
  }

  setPredictionStatus = () => {
    this.getPrediction().then(content => this.setState({prediction: Number(content.prediction)}))
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
        'patient_id': parseInt(this.state.patientId),
        'prediction': parseInt(this.state.prediction),
        'age': parseInt(this.state.age),
        'bmi': parseInt(this.state.bmi),
        'times_pregnant': parseInt(this.state.pgc),
        'diabetes_pedigree_function': parseFloat(this.state.dpf),
        'glucose_concentration': parseInt(this.state.pgc),
        'diastolic_blood_pressure': parseInt(this.state.dpb),
        'triceps_skin_fold_thickness': parseInt(this.state.tst),
        'type': 'Diabetes'
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
          onChangeText={textId => this.setState({patientId: textId})}
          keyboardType='number-pad'
          defaultValue={2}
        />
        <TextInput
          label={'Number of times Pregnant'}
          value={this.state.np}
          onChangeText={np => this.setState({np: np})}
          keyboardType='number-pad'
          defaultValue={0}
        />
        <TextInput
          label={'Age'}
          value={this.state.age}
          onChangeText={age => this.setState({age: age})}
          keyboardType='number-pad'
          defaultValue={23}
        />
        <TextInput
          label={'BMI'}
          value={this.state.bmi}
          onChangeText={bmi => this.setState({bmi: bmi})}
          defaultValue={20}
        />
        <TextInput
          label={'Diabetes Pedigree Function'}
          value={this.state.dpf}
          onChangeText={dpf => this.setState({dpf: dpf})}
          keyboardType='number-pad'
          defaultValue={0.667}
        />

        <TextInput
          label='Plasma glucose concentration'
          value={this.state.pgc}
          onChangeText={pgc => this.setState({ pgc: pgc })}
          keyboardType='number-pad'
          defaultValue={80}
        />

        <TextInput
          label='Diastolic blood pressure'
          value={this.state.dpb}
          onChangeText={dpb => this.setState({ dpb: dpb })}
          keyboardType='number-pad'
          defaultValue={72}
        />
        <TextInput
          label='Triceps Skin Fold Thickness'
          value={this.state.tst}
          onChangeText={tst => this.setState({ tst: tst })}
          keyboardType='number-pad'
          defaultValue={35}
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
