import React, { useState, useEffect } from "react";
import { hentGaade, sletGaade } from "../shared/GaaderAPI";
import { useParams, useHistory, Link } from "react-router-dom";

function Gaadeslet() {

  // State
  const [gaadeData, setGaadeData] = useState();

  // History

  const history = useHistory();

  // Params

  const { gaadeData_id } = useParams();
  // console.log(gaadeData_id);

  // useEffect

  useEffect(() => {
    (async () => {
      setGaadeData(await hentGaade(gaadeData_id));
    })();
  }, [gaadeData_id]);

  // Submit

  const handleSubmit = e => {
    e.preventDefault();
    (async () => {
      setGaadeData(await sletGaade(gaadeData_id));
      // redirect
      history.push("/admin");
    })();
  };

  // Metode 1 - if

  let gaaden = "";

  if (gaadeData) {
    gaaden = (
      <div className="Cartoonslet container">
        <h1 className="text-center m-5">Slet gåden</h1>
        <div className="card text-white bg-danger mx-auto mb-5" style={{maxWidth: '18rem'}}>
        <div className="card-header">Er du sikker på, at du vil slette?</div>
          <div className="card-body text-center">
            <h5  className="card-title">{gaadeData.gaadeTekst}</h5>
            <p className="card-text">{gaadeData.gaadeSvar}</p>
          </div>
        </div>
        <Link className="btn btn-success mr-3" to="/admin" role="button">
              Fortryd
            </Link>
            <Link
              className="btn btn-danger"
              to="/admin"
              role="button"
              onClick={handleSubmit}
            >
              Slet
            </Link>
      </div>
    );
  }

  // Udskriv

  return <div>{gaaden}</div>;
}

export default Gaadeslet;
