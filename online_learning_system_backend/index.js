const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const configs = require('./controllers/helpers/config');
const logger = require('./controllers/helpers/logger');
var cookieParser = require('cookie-parser');


/**
 * @description Custom imports
 */
const app = express();


const health = require('./controllers/helpers/health');
const healthHandler = require('./routes/health-routes');
const studentRoutes = require('./routes/student-routes');
const teacherRoutes = require('./routes/teacher-routes');
const userRoutes = require('./routes/user-routes');
const socketHandler = require('./controllers/socket-handler/socket-handler');
const assignmentRoutes = require('./routes/assignment-routes');
const reportRoutes = require('./routes/report-routes');
const paymentRoutes = require('./routes/payment-routes');
const reportController = require('./controllers/report-controller/report-controller');


/**
 * @description Initialize Configs
 */
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

/**
 * @description Initialize Global Middleware
 */
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json());                         // Parse application/json
app.use(express.static(__dirname + '/public'));
 // pdf generate lib
app.use(cookieParser());


// --------------------------- Auth TimeOut -----------------------------

const apiTimeout = 10 * 1000;
app.use((req, res, next) => {
  // Set the timeout for all HTTP requests
  req.setTimeout(apiTimeout, () => {
    let err = new Error('UnAuthorized Request.');
    err.status = 401;
    next(err);
  });
  next();
});

// --------------------------- [Routes - START] ---------------------------

app.get('/test', (req, res) => res.status(200).json({msg: 'PetCare Buddy Web Service is online'}));
app.use('/health',healthHandler);
app.use('/api/v1/students',studentRoutes);
app.use('/api/v1/teachers',teacherRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/assignments',assignmentRoutes);
app.use('/api/v1/reports',reportRoutes);
app.use('/api/v1/payment',paymentRoutes);


// --------------------------- [Routes - END] ---------------------------



// Init report service

reportController.setupReportService(app);


// Custom Error Pages

//The 404 Route (ALWAYS Keep this as the last route)
// app.get('*', function(req, res){
//   res.writeHead(302, {
//     'Location': 'http://localhost:4201/login'
//     //add other headers here...
//   });
//   res.end();
// });
//
// app.get('/',function (req,res) {
//   res.writeHead(302,{
//     'Location': 'http://localhost:4201/login'
//     //add other headers here...
//   })
// });


const PORT = process.env.PORT || configs.port;

logger.LogDataEnable(configs.isLogEnabled);

/**
 * @description Start Express Server
 */

let http = require('http').Server(app);
let io = require('socket.io')(http);

socketHandler.initSocket(io);

http.listen(PORT, function(){
  logger.info('WeddingEkak.LK Server listening on port ' + configs.port);
  console.log('Configs loaded: ', configs);
  health.setStartTime(Date.now());
});
