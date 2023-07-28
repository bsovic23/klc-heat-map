/*
Function takes the state clicked, and gets all object data related to that state
*/

export const findData = ( stateInput, mockData ) => {
    const stateData = mockData.filter((data) => data.state === stateInput);

    return stateData;
};

// CSS Coloring for states ==============================
/* Determine Number of Rural and Urban per State */
export const urbanPercentColor = (allData) => {
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
export const stateFillColor = (state, arr) => {

  const stateObj = arr.find((obj) => obj.state === state);

  if (stateObj) {
    const urbanN = stateObj.urban;
    const totalN = stateObj.urban + stateObj.rural;
    const colorPercent = (urbanN / totalN) * 100;
    
    return colorPercent > 70 ? "#00FFFF" : "#8A2BE2";
  }

  return null;
};


// After state clicked these functions run ==================================

// Function determines the Urban N, Rural N, and Urban/N percentage
export const urbanPercent = (stateData) => {
    const population = { urban: 0, rural: 0 };
  
    stateData.forEach((data) => {
      if (data.population === "urban") {
        population.urban += 1;
      } else if (data.population === "rural") {
        population.rural += 1;
      }
    });

    let urbanBreakdown = population.urban / stateData.length;
    population.percent = urbanBreakdown * 100;

    return population;
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

    return sortedArray;
  };