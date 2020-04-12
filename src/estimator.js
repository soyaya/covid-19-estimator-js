
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
  const impact = (currentlyInfected, infectionsByRequestedTime) => {
    this.currentlyInfected = currentlyInfected;
    this.infectionsByRequestedTime = infectionsByRequestedTime;
  };
  const severeImpact = (currentlyInfected, infectionsByRequestedTime) => {
    this.currentlyInfected = currentlyInfected;
    this.infectionsByRequestedTime = infectionsByRequestedTime;
  };
  impact.currentlyInfected = data.reportedCases * 10;
  const trunk = () => {
    return impact.currentlyInfected * 2 ** factor;
  };
  impact.infectionsByRequestedTime = trunk;
  severeImpact.currentlyInfected = data.reportedCases * 50;
  const trap = () => {
    return severeImpact.currentlyInfected * 2 ** factor;
  };
  severeImpact.infectionsByRequestedTime = trap;
  return {
    data: {
      impact: {
        currentlyInfected = reportedCases * 10,
        infectionsByRequestedTime = currentlyInfected * 2 ** factor,
      },
      severeImpact: {
        currentlyInfected = reportedCases * 50,
        infectionsByRequestedTime = currentlyInfected * 2 ** factor
      }
    },
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
