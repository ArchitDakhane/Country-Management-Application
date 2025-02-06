import React from "react";

const CityList = ({ countryIndex, stateIndex, countries, setCountries }) => {
  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
      setCountries(updatedCountries);
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="mt-2">
      <h6 className="text-secondary"> Cities in {countries[countryIndex].states[stateIndex].name}</h6>
      <button className="btn btn-sm btn-outline-success mb-2 shadow-sm" onClick={addCity}> Add City</button>
      {countries[countryIndex].states[stateIndex].cities.map((city, cityIndex) => (
        <div key={cityIndex} className="border p-1 my-1 rounded shadow-sm bg-white">
          <p className="m-0 fw-semibold">{city}</p>
          <button className="btn btn-sm btn-danger" onClick={() => deleteCity(cityIndex)}> Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
