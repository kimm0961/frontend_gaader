import React, { useContext} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Context
import AuthDataProvider from './components/context/AuthDataContext';

// Navbar 
import Navbar from './components/Navbar';

// Home / login
import Home from './components/Home';
import Login from './components/login/Login';

// Admin
import GaadeAdmin from './components/adminGaader/Admin';
import GaadeRet from './components/adminGaader/Ret';
import GaadeOpret from './components/adminGaader/Opret';
import GaadeSlet from './components/adminGaader/Slet';


import {AuthDataContext} from './components/context/AuthDataContext';

const PrivateRoute = ({ component, ...options }) => {
  const {loggedIn} = useContext(AuthDataContext);
  console.log('privateroute: loggedIn', loggedIn)

  const finalComponent = loggedIn ? component : Login;
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
          <Route exact path='/login' component={Login} />

          <PrivateRoute exact path='/admin' component={GaadeAdmin} />
          <PrivateRoute excat path="/opret" component={GaadeOpret} />
          <PrivateRoute exact path="/ret/:gaadeData_id" component={GaadeRet} />
          <PrivateRoute exact path="/slet/:gaadeData_id" component={GaadeSlet} />
          
          </Switch>
        </div>
        </AuthDataProvider>
      </BrowserRouter>
 
     );
  }

 
export default App;