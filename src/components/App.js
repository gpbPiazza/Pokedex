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
 
  return (
      <>
      
      <Router >
        <Header />
        <Switch>
          <Route path="/pokemon/:id">
            <Inspect />
          </Route>  
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </Router>
      </>
  );
}

