// function App() {
//   return (
//     <View>
//       <button onClick={createNewTodo}><Text>Add Todo</Text></button>
//     </View>
//   );

import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import Amplify from '@aws-amplify/core'
import API from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub'
import config from '../aws-exports'
import Auth from '@aws-amplify/auth'

API.configure(config)             // Configure Amplify
PubSub.configure(config)
// import Amplify from 'aws-amplify'
//
Amplify.configure(config)
// // create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
