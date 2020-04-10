const data = {
    region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: 'day',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};

let days;
if (data.periodType === 'days') {
    days = data.timeToElapse;
}
if (data.periodType === 'week') {
    days = 7 * data.timeToElapse
}
if (data.periodType === 'month') { days = 30 * data.timeToElapse };

const n = Math.ceil(days / 3)

impact.currentlyInfected = data.reportedCases * 10;
severeImpact.currentlyInfected = data.reportedCases * 50;
impact.infectionsByRequestedTime = impact.currentlyInfected * 2 ^ n;
severeImpact.infectionsByRequestedTime = severImpact.currentlyInfected * 2 ^ n;

impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;


const covid19ImpactEstimator = ({ data, impact, severeImpact }) => {

    return {
        data: {}, // the input data you got
        impact: {}, // your best case estimation
        severeImpact: {} // your severe case estimation
    }
};
//case 1
//currently infected reported cases*10
//output impact{currentlyInfected:reportedCases*10}
//output severeImpact{severeImpact.currentlyInfected is reportedCases * 50)}
//To estimate the number of infected people 28 days from now, note that currentlyInfected doubles
//every 3 days, so you'd have to multiply it by a factor of 2.
//currentlyInfected x (2 to the power of *factor*) where factor is 9 for a 28 day
//currentlyInfected x (2 to the power of 9)
//This computation should be saved as infectionsByRequestedTime, and should done both for impact
//and severeImpact, using their respective currentlyInfected values.


export default covid19ImpactEstimator;
