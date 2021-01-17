import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { Stepper } from 'components/Stepper'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Stepper />
      </Provider>
    </Router>
  )
}

export default App
