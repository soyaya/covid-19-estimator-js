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
    getFactor = data.timeToElapse;
  }
  return getFactor;
};


const covid19ImpactEstimator = (data) => {
  const cofactor = Math.trunc(data.reportedCases * 10);
  const cisfactor = Math.trunc(data.reportedCases * 50);
  const rfactor = Math.trunc(2 ** factor(data));

  return {
    data,
    impact: {
      currentlyInfected: cofactor,
      infectionsByRequestedTime: cofactor * rfactor,
      severeCasesByRequestedTime: Math.ceil(0.15 * cofactor * rfactor),
      hospitalBedsByRequestedTime: (Math.ceil(0.35 * (data.totalHospitalBeds))) - (Math.ceil(0.15 * cofactor * rfactor)),
      casesForICUByRequestedTime: Math.trunc(0.05 * cofactor * rfactor),
      casesForVentilatorsByRequestedTime: Math.trunc(0.02 * cofactor * rfactor),
      dollarsInFlight: Math.trunc(((cofactor * rfactor * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / factor))
    },
    severeImpact: {
      currentlyInfected: cisfactor,
      infectionsByRequestedTime: (cisfactor * rfactor),
      severeCasesByRequestedTime: (Math.ceil(0.15 * cisfactor * rfactor)),
      hospitalBedsByRequestedTime: (Math.ceil(0.35 * (data.totalHospitalBeds))) - (Math.ceil(0.15 * cisfactor * rfactor)),
      casesForICUByRequestedTime: Math.trunc(0.05 * cisfactor * rfactor),
      casesForVentilatorsByRequestedTime: Math.trunc(0.02 * cisfactor * rfactor),
      dollarsInFlight: Math.trunc(((cisfactor * rfactor * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / factor))
    }
  };
};

export default covid19ImpactEstimator;
