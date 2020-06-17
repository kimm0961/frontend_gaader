import React, { useContext} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthDataProvider from './components/context/AuthDataContext';
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

import {AuthDataContext} from './components/context/AuthDataContext';

const PrivateRoute = ({ component, ...options }) => {
  const {loggedIn} = useContext(AuthDataContext);
  console.log('privateroute: loggedIn', loggedIn)

  const finalComponent = loggedIn ? component : LoginAdmin;
  return <Route {...options} component={finalComponent} />
}







function App () {
    return (

      <BrowserRouter>
      <AuthDataProvider>
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginAdmin} />

          <PrivateRoute exact path='/admin' component={AdminGaader} />
          <PrivateRoute excat path="/opret" component={Gaadeopret} />
          <PrivateRoute exact path="/ret/:gaadeData_id" component={Gaaderet} />
          <PrivateRoute exact path="/slet/:gaadeData_id" component={Gaadeslet} />
          
          </Switch>
        </div>
        </AuthDataProvider>
      </BrowserRouter>
 
     );
  }

 
export default App;