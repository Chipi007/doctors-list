import React from 'react'
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import './reset.module.scss'


const App = () => {

  return (
    <div className="App">
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
