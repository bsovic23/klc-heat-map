// Trends Functions

// ----------------------------------------------------------
// FY Trends
// ----------------------------------------------------------

export const fyStateChangeFx = (data) => {

    const stateChange = {};

    const analysisData = data.filter(item => 
        (item.year === 'FY24' || item.year === 'FY23')
        &&
        item.country === 'United States');

    analysisData.forEach((item) => {
        let state = item.state;
        let year = item.year;

        stateChange[state] = stateChange[state] || { fy24: 0, fy23: 0 };

        if (year === 'FY24') {
            stateChange[state].fy24 += 1;
        } else if (year === 'FY23') {
            stateChange[state].fy23 += 1;
        } else {
            console.log("state: " + state + " year: " + year);
        }
    });

    // Then need to run function to count the difference in fy24 - fy23


    // Then sort from most positive change to most negative change


    // Then take the first 5 and last 5 index (to rep big 5 change, big 5 losers)
    
    return stateChange;
};

// ----------------------------------------------------------
// Module Trends
// ----------------------------------------------------------

export const moduleTrendsFx = (data) => {

    const moduleTrends = {};

    for (const obj of data) {
        let moduleName = obj.moduleName;
        let moduleComplete = obj.moduleComplete;

        moduleTrends[moduleName] = moduleTrends[moduleName] || {enrolled: 0, complete: 0 };

        if (moduleComplete) {
            moduleTrends[moduleName].enrolled +=1;
            moduleTrends[moduleName].complete +=1;
        } else {
            moduleTrends[moduleName].enrolled +=1;
        };
    }

    console.log(moduleTrends);

    // Sort by enrollment
    const sortedByEnrollment = Object.entries(moduleTrends).sort(([, a], [, b]) => b.enrolled - a.enrolled).splice(0, 10);

    // Sort by completion
    const sortedByCompletion = Object.entries(moduleTrends).sort(([, a], [, b]) => b.complete - a.complete).splice(0, 10);

    const mostEnrolled = sortedByEnrollment.map(([moduleName, stats]) => ({ moduleName, enrolled: stats.enrolled }));
    const mostCompleted = sortedByCompletion.map(([moduleName, stats]) => ({ moduleName, completed: stats.complete }));

    console.log(mostCompleted);
    console.log(mostEnrolled);
    return { mostEnrolled, mostCompleted };
};