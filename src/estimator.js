const covid19ImpactEstimator = (data) => {
  let getDays;
  if (data.periodType === 'days') {
    getDays = data.timeToElapse;
  }
  else if (data.periodType === 'weeks') {
    getDays = (data.timeToElapse * 7);
  }
  else if (data.periodType === 'months') {
    getDays = (data.timeToElapse * 30);
  }

  const cofactor = data.reportedCases * 10;
  const cisfactor = data.reportedCases * 50;
  const rfactor = 2 ** Math.trunc(getDays / 3);

  return {
    data,
    impact: {
      currentlyInfected: cofactor,
      infectionsByRequestedTime: cofactor * rfactor,
      severeCasesByRequestedTime: Math.trunc(0.15 * cofactor * rfactor),
      hospitalBedsByRequestedTime: Math.trunc((0.35 * data.totalHospitalBeds) - (0.15 * cofactor * rfactor)),
      casesForICUByRequestedTime: Math.trunc(0.05 * cofactor * rfactor),
      casesForVentilatorsByRequestedTime: Math.trunc(0.02 * cofactor * rfactor),
      dollarsInFlight: Math.trunc(((cofactor * rfactor * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation) / getDays))
    },
    severeImpact: {
      currentlyInfected: cisfactor,
      infectionsByRequestedTime: (cisfactor * rfactor),
      severeCasesByRequestedTime: Math.trunc(0.15 * cisfactor * rfactor),
      hospitalBedsByRequestedTime: Math.trunc((0.35 * data.totalHospitalBeds) - (0.15 * cisfactor * rfactor)),
      casesForICUByRequestedTime: Math.trunc(0.05 * cisfactor * rfactor),
      casesForVentilatorsByRequestedTime: Math.trunc(0.02 * cisfactor * rfactor),
      dollarsInFlight: Math.trunc(((cisfactor * rfactor * data.region.avgDailyIncomeInUSD * data.region.avgDailyIncomePopulation) / getDays))
    }
  };
};

export default covid19ImpactEstimator;
