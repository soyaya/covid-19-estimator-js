import { data } from './server'

const futureTime = data.comp.timeToElapse;
const dateNow = new Date();
const nowday = dateNow.getDate();
const period = ({ nowday, futureTime }) => { return futureTime - nowday }
const n = maths.round({ period } / 3);

const impact = () => {
    return {
        currentlyInfected = ({ reportedCases }) => {
            return reportedCases * 10
        }
    }
};

const severeImpact = () => {
    return {
        currentlyInfected = ({ reportedCases }) => {
            return reportedCases * 50
        }
    }
};

const infectionsByRequestedTime1 = ({ n, impact }) => { return (impact * 2 ^ n) };

const impactrate = infectionsByRequestedTime1;

const infectionsByRequestedTime2 = ({ n, severeImpact }) => {
    return (severeImpact * 2 ^ n)
};

const severeImpactrate = infectionsByRequestedTime2;

const covid19ImpactEstimator = ({ data, impact, severeImpact }) => {

    return {
        data: {}, // the input data you got
        impact: {}, // your best case estimation
        severeImpact: {} // your severe case estimation
    }
};
//case 1
//currently infected reported cases*10
//output impact{currentlyInfected:reportedCases*10}
//output severeImpact{severeImpact.currentlyInfected is reportedCases * 50)}
//To estimate the number of infected people 28 days from now, note that currentlyInfected doubles
//every 3 days, so you'd have to multiply it by a factor of 2.
//currentlyInfected x (2 to the power of *factor*) where factor is 9 for a 28 day
//currentlyInfected x (2 to the power of 9)
//This computation should be saved as infectionsByRequestedTime, and should done both for impact
//and severeImpact, using their respective currentlyInfected values.


export default covid19ImpactEstimator;
