const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: '',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
const impact = {
  currentlyInfected: '',
  infectionsByRequestedTime: '',
  severeCasesByRequestedTime: '',
  hospitalBedsByRequestedTime: '',
  casesForICUByRequestedTime: '',
  casesForVentilatorsByRequestedTime: '',
  dollarsInFlight: '', };
let severeImpact;
let days;

if (data.periodType === 'days') { days = data.timeToElapse; }
else if (data.periodType === 'weeks') { days = 7 * data.timeToElapse; }
else if (data.periodType === 'months') { days = 30 * data.timeToElapse; }
else { days = data.timeToElapse; }

const n = Math.ceil(days / 3);
impact.currentlyInfected = data.reportedCases * 10; 
severeImpact.currentlyInfected = data.reportedCases * 50;
impact.infectionsByRequestedTime = impact.currentlyInfected * 2 ** n;
severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 2 ** n;
impact.severeCasesByRequestedTime = Math.ceil(0.15 * impact.infectionsByRequestedTime);
severeImpact.severeCasesByRequestedTime = Math.ceil(0.15 * severeImpact.infectionsByRequestedTime);
impact.hospitalBedsByRequestedTime = Math.ceil(impact.severeCasesByRequestedTime - 0.35 * data.totalHospitalBeds);
severeImpact.hospitalBedsByRequestedTime = Math.ceil(severeImpact.severeCasesByRequestedTime - 0.35 * data.totalHospitalBeds);
impact.casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
severeImpact.casesForICUByRequestedTime = 0.05 * severeImpact.infectionsByRequestedTime;
impact.casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;
severeImpact.casesForVentilatorsByRequestedTime = 0.02 * severeImpact.infectionsByRequestedTime;
impact.dollarsInFlight = Math.trunc((impact.infectionsByRequestedTime * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30);
severeImpact.dollarsInFlight = Math.trunc((severeImpact.infectionsByRequestedTime * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30);

const covid19ImpactEstimator = () => {
  return {
    data: {},
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
