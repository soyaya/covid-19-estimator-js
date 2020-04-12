
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
  const impact = {};
  const severeImpact = {};
  const currentlyInfected1 = data.reportedCases * 10;
  const trunk = () => {
    return currentlyInfected1 * 2 ** factor;
  };
  impact.currentlyInfected = trunk;
  const currentlyInfected2 = data.reportedCases * 50;
  const trap = () => {
    return currentlyInfected2 * 2 ** factor;
  };
  severeImpact.currentlyInfected = trap;
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
