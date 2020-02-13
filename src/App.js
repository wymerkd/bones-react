import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';
import Test from './components/Test';
import TestTwo from './components/TestTwo';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/test' component={Test}/>
        <Route path='/testtwo' component={TestTwo}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
