import React from 'react'
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Route, Routes} from 'react-router-dom';
import './reset.module.scss'
import { useState } from 'react';


const App = () => {

  const [query, setQuery] = useState('');

  return (
    <div className="App">
        <Header query = {query} setQuery = {setQuery}/>
      <Routes>
        <Route path = '/doctors' element = {<Content query = {query}/>}/>
      </Routes>
    </div>
  );
}

export default App;
