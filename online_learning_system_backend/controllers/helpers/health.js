let totalRequests = 0;
let serverStartTime;

const getTotalRequests = () => {
  return totalRequests;
};

const addRequestCount = () => {
totalRequests += 1;
};

const setStartTime = (time) =>{
    serverStartTime = time;
};

const getUpTime = () => {
    return Math.round((Date.now() - serverStartTime)/1000) + "s";
};

module.exports = {
    getTotalRequests,
    addRequestCount,
    setStartTime,
    getUpTime
};