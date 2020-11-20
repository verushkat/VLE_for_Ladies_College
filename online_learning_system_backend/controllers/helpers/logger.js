/*
* Log data to monitor errors and infos
*/
let logEnable = false;
let winston = require('winston');

let options = {
  file: {
    level: 'debug',
    filename: './logs/app.log',
    handleExceptions: true,
    json: false,
    maxsize: 1048574,
    maxFiles: 2,
    colorize: false,
    timestamp: true
  },
  console: {
    level: 'debug',
    handleExceptions: false,
    json: false,
    colorize: true,
    timestamp: true
  },
};

let logger = new winston.Logger({
  transports:[
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false,
});

exports.info = (data) => {
  if(logEnable){
    logger.info(data);
    // console.info(data);
  }
};

exports.error = (data) => {
  if(logEnable){
    logger.error(data);
    // console.error(data);
  }
};

exports.warn = (data) => {
  if(logEnable){
    logger.warn(data);
    // console.warn(data);
  }
};

exports.verbose = (data) => {
  if(logEnable){
    logger.verbose(data);
    // console.log(data);
  }
};

exports.debug = (data) => {
  if(logEnable){
    logger.debug(data);
    // console.debug(data);
  }
};

exports.LogDataEnable = (logEna) =>{
  logEnable = logEna;
};