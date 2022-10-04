import React from 'react'
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import { Route, Routes} from 'react-router-dom';
import './reset.module.scss'
import { RouteItem } from './components/routeItem/RouteItem';
import { useSearchParams } from 'react-router-dom';


const App = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  return (
    <div className="App">
        <Header setSearchParams = {setSearchParams} searchTerm = {searchTerm}/>
      <Routes>
        <Route path = '/doctors' element = {<Content searchTerm = {searchTerm}/>}/>
        <Route path = '/doctors/:id' element = {<RouteItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
