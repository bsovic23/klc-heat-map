// ===========================================================================
// Module Trends
// ===========================================================================

// ----------------------------------------------------------
// Module Completion and Enrollment Function
// ----------------------------------------------------------

export const moduleTrendsFx = (data, fyView) => {

    const moduleTrends = {};

    for (const obj of data) {
        let moduleYear = obj.year
        let moduleName = obj.moduleName;
        let moduleComplete = obj.moduleComplete;

        if (moduleYear === fyView || fyView === 'All Time') {
            moduleTrends[moduleName] = moduleTrends[moduleName] || {enrolled: 0, complete: 0 };

            if (moduleComplete) {
                moduleTrends[moduleName].enrolled +=1;
                moduleTrends[moduleName].complete +=1;
            } else {
                moduleTrends[moduleName].enrolled +=1;
            };
        } else {
            continue;
        }
    };

    // Sort by enrollment
    const sortedByEnrollment = Object.entries(moduleTrends).sort(([, a], [, b]) => b.enrolled - a.enrolled).splice(0, 10);

    // Sort by completion
    const sortedByCompletion = Object.entries(moduleTrends).sort(([, a], [, b]) => b.complete - a.complete).splice(0, 10);

    const mostEnrolled = sortedByEnrollment.map(([moduleName, stats]) => ({ moduleName, enrolled: stats.enrolled }));
    const mostCompleted = sortedByCompletion.map(([moduleName, stats]) => ({ moduleName, completed: stats.complete }));

    return { mostEnrolled, mostCompleted };
};


// ----------------------------------------------------------
// Repeat Learners
// ----------------------------------------------------------

export const learnerStatsFx = (data) => {
    const learnerStats = {
        totalLearnersCompletedCourse: 0,
        engagedLearnersCompletedCourse: 0,
        engagedFYLearnersCompletedCourse: 0,
    };

    const learnerMap = {};

    for (const obj of data) {
        const { dateRegistered, moduleComplete, identifier, fy } = obj;

        if (!moduleComplete) continue; // Only care about COMPLETED courses

        learnerMap[identifier] = learnerMap[identifier] || { dates: new Set(), fys: new Set() };

        learnerMap[identifier].dates.add(new Date(dateRegistered).toDateString());
        learnerMap[identifier].fys.add(fy);
    }

    for (const identifier in learnerMap) {
        const learner = learnerMap[identifier];

        if (learner.dates.size >= 1) {
            learnerStats.totalLearnersCompletedCourse += 1;
        }

        if (learner.dates.size >= 2) {
            learnerStats.engagedLearnersCompletedCourse += 1;
        }

        if (learner.dates.size >= 2 && learner.fys.size >= 2) {
            learnerStats.engagedFYLearnersCompletedCourse += 1;
        }
    }

    return learnerStats;
};