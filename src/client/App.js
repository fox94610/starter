// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>
)

export default App


// Components are dumb React components, in a sense that they don't know anything about
// the Redux state.

// Containers are smart components that know about the state and that we are going to connect to
// our dumb components.
