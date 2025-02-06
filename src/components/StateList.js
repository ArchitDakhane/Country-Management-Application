import React from "react";
import CityList from "./CityList";

const StateList = ({ countryIndex, countries, setCountries }) => {
  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="mt-3">
      <h6 className="text-primary"> States in {countries[countryIndex].name}</h6>
      <button className="btn btn-info btn-sm mb-2 shadow" onClick={addState}> Add State</button>
      {countries[countryIndex].states.map((state, stateIndex) => (
        <div key={stateIndex} className="border p-2 my-2 rounded shadow-sm bg-light">
          <p className="m-0 fw-bold">{state.name}</p>
          <button className="btn btn-outline-danger btn-sm" onClick={() => deleteState(stateIndex)}> Delete</button>
          <CityList countryIndex={countryIndex} stateIndex={stateIndex} countries={countries} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default StateList;
