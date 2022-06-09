import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greetings';
import Home from './Home';
import store from '../redux/configureStore';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
       <Routes>
        <Route
          path="/"
          element={(
            <Home />
        )}
        />
        <Route
          path="/greeting"
          element={(
            <Greeting />
        )}
        />
       </Routes>
      </Provider>
    </BrowserRouter>
    
  )
}

export default App;