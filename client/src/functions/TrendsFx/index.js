// Trends Functions

export const fyStateChange = (data) => {

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

    console.log(stateChange);
    return stateChange;
};