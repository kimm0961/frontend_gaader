import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrugerLogin } from "../shared/AuthAPI";


function LoginAdmin() {

    // State
const [brugerInfo, setBrugerInfo] = useState({});

// const history = useHistory();


// Submit
const handleSubmit = e => {
  e.preventDefault();
  // console.log(cartoon);

  (async () => {
    setBrugerInfo(await BrugerLogin(brugerInfo));
    // // redirect
    // history.push("/admin");
  })();
};

  return (
  
      <div className="container border border-secondary rounded mt-5 p-4 w-25 bg-light">
      <h1 className="mb-4 text-center text-success">Login</h1>
        <form className="mb-5" method='post' action='/login'>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type='email' name='email' placeholder='Email' required className="form-control" aria-describedby="email" onChange={(e) => setBrugerInfo({ ...brugerInfo, email: e.target.value})}
          value={brugerInfo.email}/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type='password' name='password' placeholder='Password' required className="form-control" aria-describedby="password" onChange={(e) => setBrugerInfo({ ...brugerInfo, password: e.target.value})}
          value={brugerInfo.password}  autoComplete="on"/>
        </div>
        <Link
        className="btn btn-success"
        role="button"
        onClick={handleSubmit} to="/admin"
      >
        Indsend
      </Link>
        </form>
        <p className="text-danger font-italic m-0">Har du ikke en profil?</p>
        <a href='/register'>Register</a>
      </div>
  );
}

export default LoginAdmin;

