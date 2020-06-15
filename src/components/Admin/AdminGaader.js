import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { hentAlleGaader } from "../shared/GaaderAPI";

function AdminGaader() {
  

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
        <tr key={c._id}>
          <td className="font-weight-lighter">{c._id}</td>
          <td className="font-weight-bold">{c.gaadeTekst}</td>
          <td className="font-italic">{c.gaadeSvar}</td>
          <td>
            <Link to={"/ret/" + c._id}>
            <button type="button" className="btn btn-primary">
              <span role="img" aria-label="ret">
                &#9998;
              </span>
              </button>
            </Link>
          </td>
          <td>
            <Link to={"/slet/" + c._id}>
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
    <div className="Admin">
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

export default AdminGaader;
