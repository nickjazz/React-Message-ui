import React, { Component } from 'react';
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Userlists from '../../components/Userlists'
import MessagesWrapper from '../../components/MessagesWrapper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="AppWrapper">
          <Sidebar />
          <Userlists />
          <MessagesWrapper />
        </div>
      </div>
    );
  }
}

export default App;
