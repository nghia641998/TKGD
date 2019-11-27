import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import history from '../util/history';
import Home from './Home/Home';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          {/* <Route exact path="/test">
            <div>456456 <button type="button" onClick={() => {history.push('/')}}>test</button></div>
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
