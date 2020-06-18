import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { hentAlleGaader } from "../API/GaaderAPI";

function Admin() {
  
  // State

  const [Admin, setAdmin] = useState([]);

  // useEffect

  useEffect(() => {

      hentAlleGaader().then(setAdmin);


  }, []);

  let AdminList = "";

  if (Admin.length > 0) {
    AdminList = Admin.map(g => {
      return (
        <tr key={g._id}>
          <td className="font-weight-lighter">{g._id}</td>
          <td className="font-weight-bold">{g.gaadeTekst}</td>
          <td className="font-italic">{g.gaadeSvar}</td>
          <td>
            <Link to={"/ret/" + g._id}>
            <button type="button" className="btn btn-primary">
              <span role="img" aria-label="ret">
                &#9998;
              </span>
              </button>
            </Link>
          </td>
          <td>
            <Link to={"/slet/" + g._id}>
            <button type="button" className="btn btn-danger"><span role="img" aria-label="delete">
                &#10060;
              </span></button>
            </Link>
          </td>
        </tr>
      );
    });
  } else {
    return <div>Ingen gåder endnu</div>;
  }

  // Udskriv her

  return (
    <div>
      <h1 className="text-center m-5">Gåder List</h1>
      <Link to="/opret">
              <button type="button" className="btn btn-success mb-5">
                <span role="img" className="mr-2" aria-label="plus">
                  &#10133;
                </span>
                Opret ny
                </button>
              </Link>
      <div className="container">
      <table className="table table-striped">
        <thead>
          <tr className="thead-dark">
            <th scope="col">ID</th>
            <th scope="col">Gåde</th>
            <th scope="col">Svar</th>
            <th scope="col">Ret</th>
            <th scope="col">Slet</th>
          </tr>
        </thead>
        <tbody>
          {AdminList}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Admin;
