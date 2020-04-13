const factor = (data) => {
  let getFactor;
  if (data.periodType.trim().toLowerCase() === 'days') {
    getFactor = Math.trunc((data.timeToElapse) / 3);
  }
  else if (data.periodType.trim().toLowerCase() === 'weeks') {
    getFactor = Math.trunc((data.timeToElapse * 7) / 3);
  }
  else if (data.periodType.trim().toLowerCase() === 'months') {
    getFactor = Math.trunc((data.timeToElapse * 30) / 3);
  }
  else {
    getFactor = 1;
  }
  return getFactor;
};
const covid19ImpactEstimator = (data) => {
  return {
    data,
    impact: {
      currentlyInfected: (data.reportedCases * 10),
      infectionsByRequestedTime: (data.reportedCases * 10) * (2 ** factor(data)),
      severeCasesByRequestedTime: Math.ceil(0.15 * (data.reportedCases * 10) * (2 ** factor(data))),
      hospitalBedsByRequestedTime: (Math.ceil(0.35 * (data.totalHospitalBeds))) - (Math.ceil(0.15 * (data.reportedCases * 10) * (2 ** factor(data)))),
      casesForICUByRequestedTime: 0.05 * (data.reportedCases * 10) * (2 ** factor(data)),
      casesForVentilatorsByRequestedTime: 0.02 * (data.reportedCases * 10) * (2 ** factor(data)),
      dollarsInFlight: Math.trunc(((data.reportedCases * 10) * (2 ** factor(data)) * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30)
    },
    severeImpact: {
      currentlyInfected: (data.reportedCases * 50),
      infectionsByRequestedTime: ((data.reportedCases * 50) * (2 ** factor(data))),
      severeCasesByRequestedTime: Math.ceil(0.15 * (data.reportedCases * 50) * (2 ** factor(data))),
      hospitalBedsByRequestedTime: ((Math.ceil(0.35 * data.totalHospitalBeds)) - (Math.ceil(0.15 * (data.reportedCases * 50) * (2 ** factor(data))))),
      casesForICUByRequestedTime: 0.05 * (data.reportedCases * 50) * (2 ** factor(data)),
      casesForVentilatorsByRequestedTime: 0.02 * (data.reportedCases * 50) * (2 ** factor(data)),
      dollarsInFlight: Math.trunc(((data.reportedCases * 50) * (2 ** factor(data)) * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30)
    }
  };
};

export default covid19ImpactEstimator;
