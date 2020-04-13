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
      hospitalBedsByRequestedTime: (Math.ceil(0.15 * (data.reportedCases * 10) * (2 ** factor(data)))) - (Math.ceil(0.35 * (data.totalHospitalBeds)))
    },
    severeImpact: {
      currentlyInfected: (data.reportedCases * 50),
      infectionsByRequestedTime: (data.reportedCases * 50) * (2 ** factor(data)),
      severeCasesByRequestedTime: Math.ceil(0.15 * (data.reportedCases * 50) * (2 ** factor(data))),
      hospitalBedsByRequestedTime: (Math.ceil(0.15 * (data.reportedCases * 50) * (2 ** factor(data))) - (Math.ceil(0.35 * data.totalHospitalBeds)))
    }
  };
};

export default covid19ImpactEstimator;
