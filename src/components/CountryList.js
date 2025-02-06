import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, setCountries }) => {
  const editCountry = (index) => {
    const newName = prompt("Enter new country name:");
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      const updatedCountries = [...countries];
      updatedCountries.splice(index, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="row mt-4">
      {countries.length === 0 && (
        <p className="text-center text-muted">No countries added yet.</p>
      )}
      {countries.map((country, index) => (
        <div className="col-md-4 mb-3" key={index}>
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{country.name}</h5>
              <button className="btn btn-warning me-2" onClick={() => editCountry(index)}> Edit</button>
              <button className="btn btn-danger" onClick={() => deleteCountry(index)}> Delete</button>
              <StateList countryIndex={index} countries={countries} setCountries={setCountries} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
