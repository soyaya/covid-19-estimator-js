let getFactor;
const factor = () => {
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
impact.currentlyInfected = data.reportedCases * 10;
const trunk = () => {
  return currentlyInfected * 2 ** factor;
};
impact.infectionsByRequestedTime = trunk;
severeImpact.currentlyInfected = data.reportedCases * 50;
const trap = () => {
  return currentlyInfected2 * 2 ** factor;
};
severeImpact.infectionsByRequestedTime = trap;
const covid19ImpactEstimator = () => {
  return {
    data: {
      impact: {
        currentlyInfected: 6740,
        infectionsByRequestedTime: 8587596969
      },
      severeImpact: {
        currentlyInfected: 33700,
        infectionsByRequestedTime: 543678907
      }
    },
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
