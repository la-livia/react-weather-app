import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="wrap-whole">
        <div className="wrap-board">
          <div>Friday 9.12. 14:50</div>
          <form>
            <div className="input-group">
              <input
                type="search"
                className="form-control search-form-border"
                placeholder="Search for a city"
                autocomplete="off"
                ariadescribedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn form-button icon-button" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="btn form-button icon-button" type="button">
                <i className="fa fa-map-marker"></i>
              </button>
            </div>
          </form>
          <div className="error-message"></div>

          <div className="row">
            <div className="col-6">
              <h1>Bratislava</h1>

              <span className="current-temp">2</span>
              <span className="celsius"> °C</span>
            </div>

            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src="" alt="Cloudy" />
              </div>
              <div className="description">Rainy</div>
              <ul>
                <li>
                  <i className="fa-solid fa-droplet font-icon"></i>
                  <span>100</span>%
                </li>
                <li>
                  <i className="fa-solid fa-wind font-icon"></i>
                  <span>8</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    </div>
  );
}
