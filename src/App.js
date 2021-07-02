import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/pages/header/Navbar';
import Home from './components/pages/home/Home';


function App() {
 
  const [path, setPath] = useState()
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar path={path} setPath={setPath}/>
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} path={path} setPath={setPath}/>}/>
          {/* <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/> */}
        </Switch>
      </Router>
  );
}

export default App;
