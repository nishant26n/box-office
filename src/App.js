import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route>
        <div>Not found !!</div>
      </Route>
    </Switch>
  );
}

export default App;
