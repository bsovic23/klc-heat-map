/*
Function takes the state clicked, and gets all object data related to that state
*/

export const findData = ( stateInput, mockData ) => {
    const stateData = mockData.filter((data) => data.state === stateInput);

    return stateData;
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
    population.percent = urbanBreakdown;

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