/* eslint-disable no-unused-expressions */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import About from './Components/About/About'
import Experience from "./Components/Experience/Experience";
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills'
import Page404 from "./Components/Page404/Page404";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
 return(
     <>
         <Router basename = "/">
      <Header />
      <Switch>
          <Route exact path='/'  component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/experience' component={Experience} />
          <Route component={Page404}/>
      </Switch>
      <Footer />
         </Router>
     </>
 );
}

export default App;
