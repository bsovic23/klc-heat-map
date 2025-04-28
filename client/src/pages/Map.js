import React, { useState, useEffect } from 'react';
import USAMap from 'react-usa-map';

// Functions and Data
import { 
  findStateData, 
  geographyPercent, 
  fillColor, 
  topCities, 
  geographyStatus, 
  topModuleCompleted,
  internationalFx,
  countFx, 
} from '../functions/MapFx';

import { mockData } from '../data';

function Map() {

  // ---------------------------------------------------------------
  // Data View based on year selected
  // ---------------------------------------------------------------
  const [fiscalYearView, setFiscalYearView] = useState('All Time'); // Default View = All Time Data
  const [participantView, setParticipantView] = useState('All Participants'); // Default View = All Participants
  
  // Data Used based on the two filter buttons above ^
  const [filteredData, setFilteredData] = useState(mockData);

  const [unitedStatesN, setUnitedStatesN] = useState('blank');

  const [showModal, setShowModal] = useState(false);
  const [internationalDataSet, setInternationalDataSet] = useState(mockData);

  const internationalData = internationalFx(internationalDataSet);

  // Two vari
  useEffect(() => {
    const filtered = filterDataFx(mockData, fiscalYearView, participantView);
    setFilteredData(filtered);
    
    setUnitedStatesN(countFx(filtered));

    chooseStateStats('');
    chooseStateStats2('');
    chooseStateStats3('');
    
  }, [fiscalYearView, participantView]);

  const selectFYButton = (year) => {
    setFiscalYearView(year);
  };

  const selectParticipantButton = (status) => {
    setParticipantView(status);
  };

  const filterDataFx = (mockData, fiscalYearView, participantView) => {
    if (fiscalYearView === 'All Time' && participantView === 'All Participants') {
      return mockData;
    } else {
      let filteredData = mockData;
  
      if (fiscalYearView !== 'All Time') {
        filteredData = filteredData.filter((item) => item.year === fiscalYearView);
      }
  
      if (participantView === 'Completed Module Participants') {
        filteredData = filteredData.filter((item) => item.moduleComplete === true);
      }
      
      return filteredData;
    }
  };

  useEffect(() => {
    const internationalDataFiltered = filteredData.filter((item) => item.country !== 'United States');
    setInternationalDataSet(internationalDataFiltered);
  }, [filteredData]);

    // ---------------------------------------------------------------
    ///  STATE COLOR
    // ---------------------------------------------------------------
    const [stateStats, chooseStateStats] = useState('');
    const [stateStats2, chooseStateStats2] = useState('');
    const [stateStats3, chooseStateStats3] = useState('');

    const mapHandler = (event) => {

        let stateClick = event.target.dataset.name.toString();

        let stateResultsAll = findStateData(stateClick, filteredData);

        // resultOne - px, urban/rural stats
        // resultTwo - state clicked top city data
        let resultOne = geographyStatus(stateResultsAll);
        let resultTwo = topCities(stateResultsAll);
        let resultThree = topModuleCompleted(stateResultsAll);

        chooseStateStats(resultOne);
        chooseStateStats2(resultTwo);
        chooseStateStats3(resultThree);
    };

    // ---------------------------------------------------------------
    ///  STATE COLOR [X] SEEMS TO UPDATE BASED ON BUTTON CLICKED
    // ---------------------------------------------------------------
    const stateColors = (filteredData) => {

        const colorResultAll = geographyPercent(filteredData);
        
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
        <section id='map-year-select'>
          <div id='map-year-select-div'>
            <div id='m1'>
              <div>
                <p>Filter the map by year of interest:</p>
              </div>
              <div>
                <button onClick={() => selectFYButton('All Time')}>All Time</button>
                <button onClick={() => selectFYButton('FY25')}>FY 25</button>
                <button onClick={() => selectFYButton('FY24')}>FY 24</button> 
                <button onClick={() => selectFYButton('FY23')}>FY 23</button> 
              </div>
            </div>
            <div id='m2'>
              <div>
                <p>Filter the map By All Participants or Completed Module Participants:</p>
              </div>
              <div>
                <button onClick={() => selectParticipantButton('All Participants')}>All Participants</button>
                <button onClick={() => selectParticipantButton('Completed Module Participants')}>Completed Module Participants</button> 
              </div>
            </div>                               
          </div>
          <div  id='map-year-current-div'>
            <h1>Currently Viewing {fiscalYearView} {participantView} Data</h1>
            <p>{unitedStatesN} United States Contacts</p>
          </div>
        </section>
        <section class='flex-container'>
            <section class='map-display'>
                < USAMap onClick={mapHandler} customize={stateColors(filteredData)} />
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
                            ? `${fiscalYearView} Top 5 Participation Cities`
                            : `${fiscalYearView} Top ${stateStats2.length} Participation Cities`}
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
                          <div>
                            <h2>Top Module Completed</h2>
                            <table border="1" class='table-map-results'>
                              <tr>
                                <th>Module:</th>
                                <th>Completed:</th>
                              </tr>
                              <tr class="rowClass">
                                <td>{stateStats3.moduleName}</td>
                                <td>{stateStats3.complete}</td>
                              </tr>                          
                            </table>
                          </div>
                        </div>
                    )}
                </div>
            </section>
        </section>
        <section id='international-modal'>
          <p>{fiscalYearView} had {internationalData.length} other countries represented, and a total of {internationalDataSet.length} international participants!</p>
          <button onClick={() => setShowModal(true)}>
              Click here to view countries and counts
          </button>
          <div>
              {showModal && (
                  <div class='modal'>
                      <button onClick={() => setShowModal(false)}>X Close window</button>
                      <div class='scrollable-container'>
                          <table id='international-table'>
                            <tr>
                              <th>Country</th>
                              <th>KLC Participation Count</th>
                              <th>Top Module Completed In Country (COUNT)</th>
                            </tr>                          
                              {internationalData.map((countryData, index) => (
                                <tr key={index}>
                                  <td>{countryData.country}</td>
                                  <td>{countryData.count}</td>
                                  <td>{countryData.topModule}</td>
                                </tr>
                              ))}
                          </table>
                      </div>
                  </div>
              )}
          </div>
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