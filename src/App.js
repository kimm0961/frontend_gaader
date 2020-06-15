import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Navbar 
import Navbar from './components/Navbar';

// Pages
import Home from './components/Home';

// Admin components
import AdminGaader from './components/Admin/AdminGaader';
import Gaaderet from './components/Admin/Gaaderet';
import Gaadeopret from './components/Admin/Gaadeopret';
import Gaadeslet from './components/Admin/Gaadeslet';

import LoginAdmin from './components/Admin/LoginAdmin';







function App () {
    return (

      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={AdminGaader} />
          <Route path='/login' component={LoginAdmin} />
          <Route excat path="/opret" component={Gaadeopret} />
          <Route exact path="/ret/:gaadeData_id" component={Gaaderet} />
          <Route exact path="/slet/:gaadeData_id" component={Gaadeslet} />
          
          </Switch>
        </div>
      </BrowserRouter>
 
     );
  }

 
export default App;