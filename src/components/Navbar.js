import React, { useContext, useState} from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthDataContext} from './context/AuthDataContext';
import { BrugerLogout} from './shared/AuthAPI';

function Navbar () {

  const {loggedIn, onLogout} = useContext(AuthDataContext);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLogout = () => {
    BrugerLogout().then(data => {
      onLogout()
      history.push("/")
    }).catch(function (error) {
      console.log(error.message);
      setError("Der er sket en fejl - " + error.message)
    })
  }

  let loginlogout;

  if (loggedIn) {
    loginlogout = (
   <>
   <li className="nav-item">
        <NavLink className="nav-link" to="/admin">Admin</NavLink>
      </li>
      <li className="nav-item">
        <button className="btn btn-danger" onClick={handleLogout}>Logud</button>
      </li>
  </>
    )
  } else {
    loginlogout = (
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    )
  }


    return ( 
      <>
        <nav className="Navbar navbar navbar-expand-md navbar-dark bg-primary">
          <div className="container px-0">
        <Link className="navbar-brand d-none d-sm-block" to="/">
        <p className="navbar-brand">Gåder</p>
  </Link>
  <button className="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#navbarsHeader" aria-controls="navbarsHeader" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarsHeader">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact={true} to="/">Forside</NavLink>
      </li>
     {loginlogout}
    </ul>
  </div>
  </div>
</nav>
<h2>{error ? (<span>{error}</span>) : null}</h2>
</>
     );
}
 
export default Navbar;