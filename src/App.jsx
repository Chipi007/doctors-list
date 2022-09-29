import React from 'react'
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import './reset.module.scss'
import { useState } from 'react';


const App = () => {

  const [query, setQuery] = useState('');

  return (
    <div className="App">
        <Header query = {query} setQuery = {setQuery}/>
        <Content query = {query}/>
    </div>
  );
}

export default App;
