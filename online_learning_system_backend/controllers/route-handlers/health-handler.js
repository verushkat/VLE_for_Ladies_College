 let health = require('../helpers/health');

const getHealth = (req,res) => {
    let healthObject = {
        "health":"uptime",
        "uptimeTotalRequests":health.getTotalRequests(),
        "upTime":health.getUpTime()
    };

    res.send(healthObject);
};

module.exports = {
    getHealth
};