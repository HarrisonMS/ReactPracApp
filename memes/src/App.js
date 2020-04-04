import React from 'react';
import List from './components/List'
import MyInfo from './components/MyInfo'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <List />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;
