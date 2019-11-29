import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import history from '../util/history';
import Home from './Home/Home';
import Header from './shared/Header';
import Footer from './shared/Footer';
import '../css/shared.css';
import CVInCategory from './OtherCVCategories/CVInCategory';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/category/:category/:sub">
            <CVInCategory/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
