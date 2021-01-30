import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Inspect from './pages/Inspect';

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

