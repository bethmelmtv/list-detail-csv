import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FilmDetail from './FilmDetail';
import FilmPage from './FilmPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FilmPage />
          </Route>

          <Route exact path="/films/:id">
            <FilmDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
