import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { opretGaade } from "../shared/GaaderAPI";


function Gaadeopret() {
  // State
  const [gaadeData, setGaadeData] = useState({});

  const history = useHistory();


  // Submit
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(cartoon);

    (async () => {
      setGaadeData(await opretGaade(gaadeData));
      // redirect
      history.push("/admin");
    })();
  };

  // Udskriv

  return (
    <div className="Jokeopret container">
      <h1 className="text-center m-5">Opret en ny gåde</h1>
      <div className="container" style={{maxWidth: '40rem'}}>
      <form className="text-left">
        <label htmlFor="navn" className="font-weight-bold">Gåden:</label>
        <input
          id="navn" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="navn"
         onChange={(e) => setGaadeData({ ...gaadeData, gaadeTekst: e.target.value})}
          value={gaadeData.gaadeTekst}
        />
        <label htmlFor="skaber" className="font-weight-bold">Gådens svar</label>
        <input
          id="skaber" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="skaber" onChange={(e) => setGaadeData({ ...gaadeData, gaadeSvar: e.target.value})}
          value={gaadeData.gaadeSvar}
        />
      </form>
      <Link className="btn btn-success mr-3" role="button" to="/admin">
        Fortryd
      </Link>
      <Link
        className="btn btn-primary"
        role="button"
        onClick={handleSubmit} to="/admin"
      >
        Gem gåde
      </Link>
      </div>
    </div>
  );
}

export default Gaadeopret;
