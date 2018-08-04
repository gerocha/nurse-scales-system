import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'


let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
