
function region(name, avgAge, avgDailyIncomeInUsd, avgDailyIncomePopulation) {
    this.name = "name";
    this.avgAge = 19.7;
    this.avgDailyIncomeInUsd = 5;
    this.avgDailyIncomePopulation = 0.71
};

function period(periodType, timeToElapse, reportedCases, population, totalHospitalBeds) {
    this.periodType = "days",
        this.timeToElapse = 58,
        this.reportedCases = 674,
        this.population = 66622705,
        this.totalHospitalBeds = 1380614
}


const covid19ImpactEstimator = (inputData) => {
    return { region, period }
};

export default covid19ImpactEstimator;
