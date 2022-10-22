import React from "react";

export default function Form() {
  return (
    <form id="city-form">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            id="city-input"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-success" id="current-click">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
