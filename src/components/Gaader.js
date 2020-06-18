import React, { useState, useEffect } from "react";
import { hentAlleGaader } from "./API/GaaderAPI";

function Gaader() {
  // State

  const [gaader, setGaader] = useState([]);

  // useEffect

  useEffect(() => {
    hentAlleGaader().then(setGaader);
  }, []);

  let gaaderList = "";

  if (gaader.length > 0) {
    gaaderList = gaader.map((g) => {
      return (
        <div className="col-md-6 col-lg-4" key={g._id}>
          <div className="card mb-4 box-shadow">
            <div className="card-body">
              <h5 className="card-title">{g.gaadeTekst}</h5>
              <p className="card-text">{g.gaadeSvar}</p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div>Ingen gåder endnu</div>;
  }

  // Udskriv her

  return (
    <div>
      <h1 className="text-center m-5">Alle gåder</h1>
      <div className="container">
        <div className="card-deck row">{gaaderList}</div>
      </div>
    </div>
  );
}

export default Gaader;
