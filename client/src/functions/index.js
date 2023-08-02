/*
Function takes the state clicked, and gets all object data related to that state
*/

export const findStateData = ( stateInput, mockData ) => {
    const stateData = mockData.filter((data) => data.state === stateInput);

    if (stateData.length !== 0) {
      return stateData;
    };

    stateData.state = stateInput;
    return stateData;
};

//===========================================================================
// CSS Coloring for states ==================================================
//===========================================================================

/* Determine Number of Rural and Urban per State */
export const geographyPercent = (allData) => {
  const statePercent = {};

  for (const obj of allData) {
    const state = obj.state;
    const population = obj.population;
    statePercent[state] = statePercent[state] || { rural: 0, urban: 0};
  
    if (population === 'rural') {
      statePercent[state].rural +=1;
    } else if (population === 'urban') {
      statePercent[state].urban +=1;
    };
  }

  const statePercentArray = Object.entries(statePercent).map(([state, counts]) => ({
    state,
    rural: counts.rural,
    urban: counts.urban,
  }));

  return statePercentArray;
};

/* Find state, get percentage, get color */
export const fillColor = (state, arr) => {

  const stateObj = arr.find((obj) => obj.state === state);

  if (stateObj) {
    const urbanN = stateObj.urban;
    const totalN = stateObj.urban + stateObj.rural;
    const colorPercent = Math.round((urbanN / totalN) * 100);
    
    if (colorPercent > -1 && colorPercent < 15) {
      return "#FF6600";
    } else if (colorPercent < 30 ) {
      return "#FF944D";
    } else if (colorPercent < 45 ) {
      return "#FFC299";
    } else if (colorPercent < 55 ) {
      return "#808080";
    } else if (colorPercent < 70 ) {
      return "#8A8AFF";
    } else if (colorPercent < 85 ) {
      return "#0000FF";
    } else if (colorPercent < 101 ) {
      return "#000075";
    };
  }
  return "#00FFFF";
};

//===========================================================================
// Functions - Map Results Sections  ========================================
//===========================================================================

// Function determines the Urban N, Rural N, and Urban/N percentage
export const geographyStatus = (stateData) => {

    if (stateData.length !== 0) {
    const stateName = stateData[0].state;
    const population = { state: stateName, urban: 0, rural: 0 };
  
    for (const obj of stateData) {
      if (obj.population === "urban") {
        population.urban += 1;
      } else if (obj.population === "rural") {
        population.rural += 1;
      }
    };

    population.percent = Math.round((population.urban / stateData.length) * 100);
    population.total = population.urban + population.rural;

    return population;
    };
    return stateData;
  };

  // Function determines the top 5 cities
  export const topCities = (stateData) => {
    const count = {};

    for (const obj of stateData) {
      const cityCount = obj.city;
      count[cityCount] = (count[cityCount] || 0) +1;
    }

    const unsortedCount = Object.entries(count);
    const sortedArray = unsortedCount.sort((a,b) => b[1] - a[1]);

    const resultArray = sortedArray.map(([city, count]) => {
      const cityData = stateData.find(obj => obj.city === city);
      const cityPopulation = cityData ? cityData.population : 0;
      return [city, count, cityPopulation];
  });

    return resultArray;
  };