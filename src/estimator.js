
const covid19ImpactEstimator = () => {
  const data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };
  const factor = () => {
    let getFactor;
    if (data.periodType.trim().toLowerCase() === 'days') {
      getFactor = Math.trunc((data.timeToElapse * 1) / 3);
    }
    else if (data.periodType.trim().toLowerCase() === 'weeks') {
      getFactor = Math.trunc((data.timeToElapse * 7) / 3);
    }
    else if (data.periodType.trim().toLowerCase() === 'weeks') {
      getFactor = Math.trunc((data.timeToElapse * 30) / 3);
    }
    else {
      getFactor = 1;
    }
    return getFactor;
  };
  const impact = (currentlyInfected, infectionsByRequestedTime) => { /*,
    severeCasesByRequestedTime, hospitalBedsByRequestedTime,
    casesForICUByRequestedTime, casesForVentilatorsByRequestedTime,
    dollarsInFlight*/
    this.currentlyInfected = currentlyInfected;
    this.infectionsByRequestedTime = infectionsByRequestedTime;
    /*this.severeCasesByRequestedTime = severeCasesByRequestedTime;
    this.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime;
    this.casesForICUByRequestedTime = casesForICUByRequestedTime;
    this.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime;
    this.dollarsInFlight = dollarsInFlight;*/
  };
  const severeImpact = (currentlyInfected, infectionsByRequestedTime) => {
    /* ,
    severeCasesByRequestedTime, hospitalBedsByRequestedTime,
    casesForICUByRequestedTime, casesForVentilatorsByRequestedTime,
    dollarsInFlight*/
    this.currentlyInfected = currentlyInfected;
    this.infectionsByRequestedTime = infectionsByRequestedTime;
    /* this.severeCasesByRequestedTime = severeCasesByRequestedTime;
    this.hospitalBedsByRequestedTime = hospitalBedsByRequestedTime;
    this.casesForICUByRequestedTime = casesForICUByRequestedTime;
    this.casesForVentilatorsByRequestedTime = casesForVentilatorsByRequestedTime;
    this.dollarsInFlight = dollarsInFlight;*/
  };
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * 2 ** factor;
  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 2 ** factor;
  /* impact.severeCasesByRequestedTime = Math.ceil(0.15 * impact.infectionsByRequestedTime);
  severeImpact.severeCasesByRequestedTime = Math.ceil(0.15 * severeImpact.infectionsByRequestedTime);
  impact.hospitalBedsByRequestedTime = Math.ceil(impact.severeCasesByRequestedTime - 0.35 * data.totalHospitalBeds);
  severeImpact.hospitalBedsByRequestedTime = Math.ceil(severeImpact.severeCasesByRequestedTime - 0.35 * data.totalHospitalBeds);
  impact.casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
  severeImpact.casesForICUByRequestedTime = 0.05 * severeImpact.infectionsByRequestedTime;
  impact.casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;
  severeImpact.casesForVentilatorsByRequestedTime = 0.02 * severeImpact.infectionsByRequestedTime;
  impact.dollarsInFlight = Math.trunc((impact.infectionsByRequestedTime * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30);
  severeImpact.dollarsInFlight = Math.trunc((severeImpact.infectionsByRequestedTime * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30);*/
  return {
    data: {},
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
