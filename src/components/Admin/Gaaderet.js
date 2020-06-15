import React, { useState, useEffect } from "react";
import { hentGaade, retGaade } from "../shared/GaaderAPI";
import { useParams, useHistory, Link } from "react-router-dom";

function Gaaderet() {
  
  // State

  const [gaadeData, setGaadeData] = useState();


  // History

  const history = useHistory();

  // Params

  const { gaadeData_id } = useParams();

  // useEffect

  useEffect(() => {
    (async () => {
      setGaadeData(await hentGaade(gaadeData_id));
    })();
  }, [ gaadeData_id]);


  // Submit

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(gaadeData);

    (async () => {
      setGaadeData(await retGaade(gaadeData_id, gaadeData));
      // redirect
      history.push("/admin");
    })();

  };

  // Metode 1 - if

  let gaaden = "";

  if (gaadeData) {
    gaaden = (
      <div className="Cartoonret container">
        <h1 className="text-center m-5">Ret gåde</h1>
        <div className="container" style={{maxWidth: '40rem'}}>
        <form className="text-left">
          <label htmlFor="navn" className="font-weight-bold">Gåden</label>
          <input
            id="navn"
            type="text"
            className="form-control mb-3 bg-info text-white"
            onChange={(e) => setGaadeData({ ...gaadeData, gaadeTekst: e.target.value})}
            value={gaadeData.gaadeTekst}
          />
          <label htmlFor="skaber" className="font-weight-bold">Gådens svar</label>
          <input
            id="skaber"
            type="text"
            className="form-control mb-3 bg-info text-white"
            onChange={(e) => setGaadeData({ ...gaadeData, gaadeSvar: e.target.value})}
            value={gaadeData.gaadeSvar}
          />
        </form>
        <Link className="btn btn-success mr-3" to="/admin" role="button">
          Fortryd
        </Link>
        <Link
          className="btn btn-primary"
          to="/admin"
          role="button"
          onClick={handleSubmit}
        >
          Gem rettet gåde
        </Link>
        </div>
      </div>
    );
  }

  // Udskriv her

  return <div>{gaaden}</div>;
}

export default Gaaderet;
