import React, { useState, useEffect } from "react";
import { hentAlleGaader } from "./shared/GaaderAPI";

function Gaader() {
  

  // State

  const [Admin, setAdmin] = useState([]);

  // useEffect

  useEffect(() => {

      hentAlleGaader().then(setAdmin);

  }, []);

  // Metode 1 - map

  let AdminList = "";

  if (Admin.length > 0) {
    AdminList = Admin.map(c => {
      return (
          <div className="col-md-6 col-lg-4" key={c._id}>
            <div className="card mb-4 box-shadow">
    <div className="card-body">
      <h5 className="card-title">{c.gaadeTekst}</h5>
      <p className="card-text">{c.gaadeSvar}</p>
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
    <div className="AdminJokes">
      <h1 className="text-center m-5">Alle gåder</h1>
      <div className="container">
      <div className="card-deck row">
        {AdminList}
      </div>
      </div>
    </div>
  );
}

export default Gaader;
