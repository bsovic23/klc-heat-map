// ==================================================================================================
// FY Trends
// ==================================================================================================

// ----------------------------------------------------------
// State Count Changes
// ----------------------------------------------------------

export const fyStateChangeFx = (data) => {
    const stateChange = {};

    const analysisData = data.filter(item => 
        (item.year === 'FY25' || item.year === 'FY24') &&
        item.country === 'United States'
    );

    analysisData.forEach((item) => {
        const state = item.state;
        const fy = item.year;

        stateChange[state] = stateChange[state] || { fy25: 0, fy24: 0, allTime: 0 };

        if (fy === 'FY25') {
            stateChange[state].fy25 += 1;
        } else if (fy === 'FY24') {
            stateChange[state].fy24 += 1;
        }
        // allTime is sum of all fiscal years counted
        stateChange[state].allTime += 1;
    });

    const createSortedChange = (key) => {
        const changeArray = Object.entries(stateChange).map(([state, values]) => ({
            state,
            count: values[key]
        }));

        // Sort from highest count to lowest
        changeArray.sort((a, b) => b.count - a.count);

        const mostChangeUp = changeArray.slice(0, 5);
        const mostChangeDown = changeArray.slice(-5).reverse();

        return { mostChangeUp, mostChangeDown };
    };

    return {
        FY24: createSortedChange('fy24'),
        FY25: createSortedChange('fy25'),
        AllTime: createSortedChange('allTime')
    };
};



// ----------------------------------------------------------
// Repeat Learners
// ----------------------------------------------------------