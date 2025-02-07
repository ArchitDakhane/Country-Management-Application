import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  return (
    <Router basename="/Country-Management-Application">
      <div className="container my-5">
        <div className="text-center">
          <h1 className="text-primary fw-bold">🌍 Country, State, and City Management Application</h1>
          <button className="btn btn-success mt-3 px-4 py-2 shadow" onClick={addCountry}>
            ➕ Add Country
          </button>
        </div>
        <CountryList countries={countries} setCountries={setCountries} />
      </div>
    </Router>
  );
};

export default App;
