import React, { useState } from 'react';
import USAMap from 'react-usa-map';

// Functions and Data
import { findStateData, geographyPercent, fillColor, topCities, geographyStatus } from '../functions';
import { mockData } from '../data';

function Map() {

    const [stateStats, chooseStateStats] = useState('');
    const [stateStats2, chooseStateStats2] = useState('');

    const mapHandler = (event) => {
        // variable for which state is clicked
        let stateClick = event.target.dataset.name.toString();

        // gives back an array of objects for the state clicked
        let stateResultsAll = findStateData(stateClick, mockData);

        // == All FX below run stats using array of all state objects click
        // resultOne for the top map section, resultTwo for the bottom map section
        let resultOne = geographyStatus(stateResultsAll);
        let resultTwo = topCities(stateResultsAll);

        // All above relevant functions with results need to be grouped before state function
        chooseStateStats(resultOne);
        chooseStateStats2(resultTwo);
    };

    /// STATE COLOR
    const stateColors = (mockData) => {

        const colorResultAll = geographyPercent(mockData);
        
        return {
            "AL": {
                fill: fillColor("AL", colorResultAll)
              },
            "AK": {
                fill: fillColor("AK", colorResultAll)
              },
              "AZ": {
                fill: fillColor("AZ", colorResultAll)
              },
              "AR": {
                fill: fillColor("AR", colorResultAll)
              },
              "CA": {
                fill: fillColor("CA", colorResultAll)
              },
              "CO": {
                fill: fillColor("CO", colorResultAll)
              },
              "CT": {
                fill: fillColor("CT", colorResultAll)
              },
              "DE": {
                fill: fillColor("DE", colorResultAll)
              },
              "DC": {
                fill: fillColor("DC", colorResultAll)
              },
              "FL": {
                fill: fillColor("FL", colorResultAll)
              },
              "GA": {
                fill: fillColor("GA", colorResultAll)
              },
              "HI": {
                fill: fillColor("HI", colorResultAll)
              },
              "ID": {
                fill: fillColor("ID", colorResultAll)
              },
              "IL": {
                fill: fillColor("IL", colorResultAll)
              },
              "IN": {
                fill: fillColor("IN", colorResultAll)
              },
              "IA": {
                fill: fillColor("IA", colorResultAll)
              },
              "KS": {
                fill: fillColor("KS", colorResultAll)
              },
              "KY": {
                fill: fillColor("KY", colorResultAll)
              },
              "LA": {
                fill: fillColor("LA", colorResultAll)
              },
              "ME": {
                fill: fillColor("ME", colorResultAll)
              },
              "MD": {
                fill: fillColor("MD", colorResultAll)
              },
              "MA": {
                fill: fillColor("MA", colorResultAll)
              },
              "MI": {
                fill: fillColor("MI", colorResultAll)
              },
              "MN": {
                fill: fillColor("MN", colorResultAll)
              },
              "MS": {
                fill: fillColor("MS", colorResultAll)
              },
              "MO": {
                fill: fillColor("MO", colorResultAll)
              },
              "MT": {
                fill: fillColor("MT", colorResultAll)
              },
              "NE": {
                fill: fillColor("NE", colorResultAll)
              },
              "NV": {
                fill: fillColor("NV", colorResultAll)
              },
              "NH": {
                fill: fillColor("NH", colorResultAll)
              },
              "NJ": {
                fill: fillColor("NJ", colorResultAll)
              },
              "NM": {
                fill: fillColor("NM", colorResultAll)
              },
              "NY": {
                fill: fillColor("NY", colorResultAll)
              },
              "NC": {
                fill: fillColor("NC", colorResultAll)
              },
              "ND": {
                fill: fillColor("ND", colorResultAll)
              },
              "OH": {
                fill: fillColor("OH", colorResultAll)
              },
              "OK": {
                fill: fillColor("OK", colorResultAll)
              },
              "OR": {
                fill: fillColor("OR", colorResultAll)
              },
              "PA": {
                fill: fillColor("PA", colorResultAll)
              },
              "RI": {
                fill: fillColor("RI", colorResultAll)
              },
              "SC": {
                fill: fillColor("SC", colorResultAll)
              },
              "SD": {
                fill: fillColor("SD", colorResultAll)
              },
              "TN": {
                fill: fillColor("TN", colorResultAll)
              },
              "TX": {
                fill: fillColor("TX", colorResultAll)
              },
              "UT": {
                fill: fillColor("UT", colorResultAll)
              },
              "VT": {
                fill: fillColor("VT", colorResultAll)
              },
              "VA": {
                fill: fillColor("VA", colorResultAll)
              },
              "WA": {
                fill: fillColor("WA", colorResultAll)
              },
              "WV": {
                fill: fillColor("WV", colorResultAll)
              },
              "WI": {
                fill: fillColor("WI", colorResultAll)
              },
              "WY": {
                fill: fillColor("WY", colorResultAll)
              }
        }
    };

    return(
        <section class='map'>
            <section class='flex-container'>
                <section class='map-display'>
                    < USAMap onClick={mapHandler} customize={stateColors(mockData)} />
                </section>
                <section class='map-results'>
                    <div>
                        {stateStats ? (
                            <div>
                                <h1>State: {stateStats.state}</h1>
                                {(stateStats.length) !== 0 ? (
                                    <div>
                                        <p>State Participants Total: {stateStats.total}</p>
                                        <p>Rural Participants Total: {stateStats.rural}</p>
                                        <p>Urban Participants Total: {stateStats.urban}</p>
                                        <p>Urban Participation Percent: {stateStats.percent} %</p>
                                    </div>
                                ) : (
                                    <div>
                                        There are no N recruitment results
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                Choose a state to get started!
                            </div>
                        )}
                    </div>
                    <div>
                        {stateStats2.length !== 0 && (
                            <div>
                              <h2>
                                {stateStats2.length >=5
                                ? `Top 5 Participation Cities`
                                : `Top ${stateStats2.length} Participation Cities`}
                              </h2>         
                              <table border="1" class='table-map-results'>
                                <tr>
                                  <th>City:</th>
                                  <th>N:</th>
                                  <th>Urban/Rural Status:</th>
                                </tr>
                                  {stateStats2.slice(0, 5).map((cityData, index) => (
                                          <tr key={index} class="rowClass">
                                            <td>{cityData[0]}</td>
                                            <td>{cityData[1]}</td>
                                            <td>{cityData[2]}</td>
                                          </tr>
                                      ))}
                              </table>
                            </div>
                        )}
                    </div>
                </section>
            </section>
            <section class='legend'>
              <div>
                <h1>Urban Participation Percent</h1>
              </div>
                <p id='colorNone' class='tag-none'>No Data</p> 
                <p class='tag'> MORE RURAL</p>
                <p id='colorOne'>0 - 19 % </p>
                <p id='colorTwo'>20 - 39 % </p>
                <p id='colorThree'>40 - 59 % </p>
                <p id='colorFour'>60 -79 % </p>
                <p id='colorFive'>80 - 100 % </p>
                <p class='tag'>MORE URBAN</p>
            </section>
        </section>
    )
};

export default Map;