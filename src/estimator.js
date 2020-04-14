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
  const cofactor = data.reportedCases * 10;
  const cisfactor = data.reportedCases * 50;
  const rfactor = (2 ** factor(data));

  return {
    data,
    impact: {
      currentlyInfected: cofactor,
      infectionsByRequestedTime: cofactor * rfactor,
      severeCasesByRequestedTime: (Math.ceil(0.15 * cofactor * rfactor)),
      hospitalBedsByRequestedTime: ((Math.ceil(0.35 * (data.totalHospitalBeds))) - (Math.ceil(0.15 * cofactor * rfactor))),
      casesForICUByRequestedTime: 0.05 * cofactor * rfactor,
      casesForVentilatorsByRequestedTime: 0.02 * cofactor * rfactor,
      dollarsInFlight: (Math.trunc((cofactor * rfactor * (data.avgDailyIncomeInUSD) * (data.avgDailyIncomePopulation)) / factor))
    },
    severeImpact: {
      currentlyInfected: cisfactor,
      infectionsByRequestedTime: (cisfactor * rfactor),
      severeCasesByRequestedTime: (Math.ceil(0.15 * cisfactor * rfactor)),
      hospitalBedsByRequestedTime: ((Math.ceil(0.35 * (data.totalHospitalBeds))) - (Math.ceil(0.15 * cisfactor * rfactor))),
      casesForICUByRequestedTime: 0.05 * cisfactor * rfactor,
      casesForVentilatorsByRequestedTime: 0.02 * cisfactor * rfactor,
      dollarsInFlight: (Math.trunc((cisfactor * rfactor * (data.avgDailyIncomeInUSD) * (data.avgDailyIncomePopulation)) / factor))
    }
  };
};

export default covid19ImpactEstimator;
