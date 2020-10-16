import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Header from './Header';
import Home from './Home';
import Inspect from './Inspect';

export default function App() {
  const [pokemns, setPokemons] = useState(null);
  
  

  useEffect(() => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
		request.then(anwser => {
      setPokemons(anwser.data.results)
      // setTimeOut(() => {setPokemons(anwser.data.results)}, 10000);
    });
  },[]);

 
  return (
      <>
      <Header />
      <Router >
        <Switch>
          <Route path="/pokemon/:id">
            <Inspect />
          </Route>  
          <Route path="/">
            <Home pokemns={pokemns}/> 
          </Route>
        </Switch>
      </Router>
      </>
  );
}

