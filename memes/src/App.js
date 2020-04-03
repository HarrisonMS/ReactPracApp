import React from 'react';
import List from './components/List'
import MyInfo from './components/MyInfo'
import Header from './components/Header'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <List />
      <MyInfo />
    </div>
  );
}

export default App;
