import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './components/Coursesales';

class App extends Component {
  render() {
    const courses = [
      {name: 'Complete iOS11 Developers Course', price: 199},
      {name: 'React Native Developers Course', price: 150},
      {name: 'ReactJS Newbie to Paid Professional Course', price: 245},
      {name: 'NodeJS Course', price: 99}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
