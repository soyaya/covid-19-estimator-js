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
const impact = {
  currentlyInfected: '',
  infectionsByRequestedTime: '',
  severeCasesByRequestedTime: '',
  hospitalBedsByRequestedTime: '',
  casesForICUByRequestedTime: '',
  casesForVentilatorsByRequestedTime: '',
  dollarsInFlight: ''
};
const severeImpact = {
  currentlyInfected: '',
  infectionsByRequestedTime: '',
  severeCasesByRequestedTime: '',
  hospitalBedsByRequestedTime: '',
  casesForICUByRequestedTime: '',
  casesForVentilatorsByRequestedTime: '',
  dollarsInFlight: ''
};
let days;
let currentlyInfected;
let infectionsByRequestedTime;
let severeCasesByRequestedTime;
let hospitalBedsByRequestedTime;
let casesForICUByRequestedTime;
let casesForVentilatorsByRequestedTime;
let dollarsInFlight;
if (data.periodType === 'days') { days = data.timeToElapse; }
else if (data.periodType === 'weeks') { days = 7 * data.timeToElapse; }
else if (data.periodType === 'months') { days = 30 * data.timeToElapse; }
else { days = data.timeToElapse; }

const n = Math.ceil(days / 3);
currentlyInfected = data.reportedCases * 10;
currentlyInfected = data.reportedCases * 50;
infectionsByRequestedTime = impact.currentlyInfected * 2 ** n;
infectionsByRequestedTime = severeImpact.currentlyInfected * 2 ** n;
severeCasesByRequestedTime = Math.ceil(0.15 * impact.infectionsByRequestedTime);
severeCasesByRequestedTime = Math.ceil(0.15 * severeImpact.infectionsByRequestedTime);
hospitalBedsByRequestedTime = Math.ceil(impact.severeCasesByRequestedTime - 0.35 * data.totalHospitalBeds);
hospitalBedsByRequestedTime = Math.ceil(severeImpact.severeCasesByRequestedTime - 0.35 * data.totalHospitalBeds);
casesForICUByRequestedTime = 0.05 * impact.infectionsByRequestedTime;
casesForICUByRequestedTime = 0.05 * severeImpact.infectionsByRequestedTime;
casesForVentilatorsByRequestedTime = 0.02 * impact.infectionsByRequestedTime;
casesForVentilatorsByRequestedTime = 0.02 * severeImpact.infectionsByRequestedTime;
dollarsInFlight = Math.trunc((impact.infectionsByRequestedTime * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30);
dollarsInFlight = Math.trunc((severeImpact.infectionsByRequestedTime * data.avgDailyIncomeInUSD * data.avgDailyIncomePopulation) / 30);


  return {
    data: {},
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
