import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { opretGaade } from "../API/GaaderAPI";


function Opret() {
  // State
  const [gaadeData, setGaadeData] = useState({});

  const history = useHistory();

  // Submit
  const handleSubmit = e => {
    e.preventDefault();

    (async () => {
      setGaadeData(await opretGaade(gaadeData));
      // redirect
      history.push("/admin");
    })();
  };

  // Udskriv

  return (
    <div className="container">
      <h1 className="text-center m-5">Opret en ny gåde</h1>
      <div className="container" style={{maxWidth: '40rem'}}>
      <form className="text-left">
        <label htmlFor="gaade" className="font-weight-bold">Gåden:</label>
        <input
          id="gaade" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="gaade"
         onChange={(e) => setGaadeData({ ...gaadeData, gaadeTekst: e.target.value})}
          value={gaadeData.gaadeTekst}
        />
        <label htmlFor="svar" className="font-weight-bold">Gådens svar</label>
        <input
          id="svar" type="text"
          className="form-control mb-3 bg-info text-white"
         required name="svar" onChange={(e) => setGaadeData({ ...gaadeData, gaadeSvar: e.target.value})}
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

export default Opret;
