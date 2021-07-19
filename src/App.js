import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/pages/header/Navbar';
import Home from './components/pages/home/Home';


function App() {
 
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props}/>}/>
          {/* <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/> */}
        </Switch>
      </Router>
  );
}

export default App;
