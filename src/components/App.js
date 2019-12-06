import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import history from '../util/history';
import Home from './Home/Home';
import Header from './shared/Header';
import Footer from './shared/Footer';
import '../css/shared.scss';
import CVInCategory from '../container/OtherCVCategories/CVIncategory';
import CreateCV from './CreateCV/CreateCV';
import OtherCV from './OtherCV/OtherCV';
import TemplateCategories from './TemplateCategories/TemplateCategories';
import Template from './Template/Template';
import ViewCV from './ViewCV/ViewCV';

const App = () => {
  return (
    <div className="App">
      
      <Router history={history}>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/cv">
            <CreateCV/>
          </Route>
          <Route exact path="/cv-detail">
            <ViewCV/>
          </Route>
          <Route exact path="/template">
            <Template/>
          </Route>
          <Route exact path="/category">
            <OtherCV/>
          </Route>
          <Route exact path="/template-category">
            <TemplateCategories/>
          </Route>
          <Route exact path="/template-category/:category">
            <TemplateCategories/>
          </Route>
          <Route exact path="/category/:category/:sub">
            <CVInCategory/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
