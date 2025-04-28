/*
Function takes the state clicked, and gets all object data related to that state
*/

export const findStateData = ( stateInput, filteredData ) => {

    const stateData = filteredData.filter((data) => (data.state === stateInput) && (data.country === 'United States')); 
  
    return stateData;
  };
  
  //===========================================================================
  // CSS Coloring for states ==================================================
  //===========================================================================
  
  /* Determine Number of Rural and Urban per State */
  export const geographyPercent = (data) => {
  
    const statePercent = {};
  
    for (const obj of data) {
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
      
      if (colorPercent > -1 && colorPercent < 20) {
        return "#FFF0E6";
      } else if (colorPercent < 40 ) {
        return "#FFC299";
      } else if (colorPercent < 60 ) {
        return "#FFA366";
      } else if (colorPercent < 80 ) {
        return "#FF8533";
      } else if (colorPercent < 101 ) {
        return "#FF6600";
      };
    }
    return "#00FFFF";
  };
  
  //===========================================================================
  // Functions - Map Shading Sections  ========================================
  //===========================================================================
  export const countFx = (data) => {
    const filterCount = data.filter((item) => item.country === 'United States');
  
    return filterCount.length;
  }
  
  
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
  
  // Function determines the top module completed
  export const topModuleCompleted = (data) => {
    let moduleCount = {};
  
    for (const obj of data) {
        let moduleName = obj.moduleName;
        let moduleComplete = obj.moduleComplete;
  
        if (!moduleCount[moduleName]) {
            moduleCount[moduleName] = {complete: 0}
        }
  
        if (moduleComplete) {
            moduleCount[moduleName].complete += 1
        }
    };
  
    let moduleCountsArray = Object.entries(moduleCount).map(([moduleName, {complete}]) => ({ moduleName, complete }));
  
    moduleCountsArray.sort((a, b) => b.complete - a.complete);
  
    return moduleCountsArray[0];
  };
  
  
  //===========================================================================
  // International Countries N + Count  =======================================
  //===========================================================================
  
  export const internationalFx = (data) => {
    // Filter by non-US
    const internationalDataFiltered = data.filter((item) => item.country !== 'United States');
  
    // Combine
    const internationalCountryData = {};
  
    internationalDataFiltered.forEach((item) => {
      let country = item.country;
      let module = item.moduleName;
      let complete = item.moduleComplete;
  
      // Initialize country data if not already present
      if (!internationalCountryData[country]) {
        internationalCountryData[country] = {
          count: 0,
          completedModules: {}
        };
      }
  
      // Increment country count
      internationalCountryData[country].count += 1;
  
      // Update completed module count for this country
      if (complete && !internationalCountryData[country].completedModules[module]) {
        internationalCountryData[country].completedModules[module] = 1;
      } else if (complete) {
        internationalCountryData[country].completedModules[module] += 1;
      }
    });
  
    // Sort completedModules for each country by count
    for (const country in internationalCountryData) {
      if (internationalCountryData.hasOwnProperty(country)) {
        const modules = internationalCountryData[country].completedModules;
        const sortedModules = Object.entries(modules)
          .sort((a, b) => b[1] - a[1])
          .reduce((acc, [module, count]) => {
            acc[module] = count;
            return acc;
          }, {});
        internationalCountryData[country].completedModules = sortedModules;
      }
    }
  
    // Sort and return
    const internationalFinal = Object.entries(internationalCountryData).map(([country, values]) => ({
      country,
      count: values.count,
      topModule: Object.keys(values.completedModules)[0] || 'No Module Completed' // Get the top module, or null if no completed modules
    }));
  
    internationalFinal.sort((a, b) => b.count - a.count);
  
    return internationalFinal;
  };