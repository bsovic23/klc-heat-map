// Trends Functions

// ----------------------------------------------------------
// FY Trends
// ----------------------------------------------------------

export const fyStateChangeFx = (data) => {
    const stateChange = {};

    const analysisData = data.filter(item => 
        (item.year === 'FY24' || item.year === 'FY23') &&
        item.country === 'United States');

    analysisData.forEach((item) => {
        const state = item.state;
        const year = item.year;

        stateChange[state] = stateChange[state] || { fy24: 0, fy23: 0 };

        if (year === 'FY24') {
            stateChange[state].fy24 += 1;
        } else if (year === 'FY23') {
            stateChange[state].fy23 += 1;
        }
    });

    // Calculate fyChange
    const stateChangeArray = Object.entries(stateChange).map(([state, values]) => ({
        state,
        fyChange: values.fy24 - values.fy23
    }));

    // Sort from most positive change to most negative change
    stateChangeArray.sort((a, b) => b.fyChange - a.fyChange);

    // Then take the first 5 and last 5 for mostChangeUp and mostChangeDown
    const mostChangeUp = stateChangeArray.slice(0, 5);
    const mostChangeDown = stateChangeArray.slice(-5).reverse();

    return { mostChangeUp, mostChangeDown };
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
    };

    // Sort by enrollment
    const sortedByEnrollment = Object.entries(moduleTrends).sort(([, a], [, b]) => b.enrolled - a.enrolled).splice(0, 10);

    // Sort by completion
    const sortedByCompletion = Object.entries(moduleTrends).sort(([, a], [, b]) => b.complete - a.complete).splice(0, 10);

    const mostEnrolled = sortedByEnrollment.map(([moduleName, stats]) => ({ moduleName, enrolled: stats.enrolled }));
    const mostCompleted = sortedByCompletion.map(([moduleName, stats]) => ({ moduleName, completed: stats.complete }));

    return { mostEnrolled, mostCompleted };
};