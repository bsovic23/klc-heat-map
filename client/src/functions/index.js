/*
Function takes the state clicked, and gets all object data related to that state
*/

export const findData = ( stateInput, mockData ) => {
    const stateData = mockData.filter((data) => data.state === stateInput);

    return stateData;
};

// After state clicked these functions run ==================================

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