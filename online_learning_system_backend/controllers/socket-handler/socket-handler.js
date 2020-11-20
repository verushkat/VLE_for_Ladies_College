const logger = require('../helpers/logger');
let HashMap = require('hashmap');

let socketFrontendMap = new HashMap();
let socketSmartBoardApp = new HashMap();

const initSocket = (ioServer) => {
    logger.info("Socket Server Started");
    ioServer.on('connection', (socket) => {
        logger.info('A user is connected to Server');
        socket.on('smartBoard', (msg) => {
            logger.info("getting msg from smartBoard");
            if (msg.event === "INIT") {
                let id = random(111111, 999999);
                socketSmartBoardApp.set(id, socket);
                socket.emit('smartBoard',
                    {
                        "event": "INIT_REPLY",
                        "sessionId": id,
                    }
                );
                logger.info("Added SmartBoard - " + id);
            } else {
                let id = msg.sessionId;
                if (socketFrontendMap.get(id) !== undefined) {
                    socketFrontendMap.get(id).emit("dashboard", msg);
                }
            }
        });

        socket.on('dashboard', (msg) => {
            logger.info("getting msg from dashboard");
            if (msg.event === "CONNECT" && socketSmartBoardApp.get(msg.sessionId) !== undefined) {
                console.log(msg.sessionId);
                socket.emit("dashboard",{
                    event:"PAIRED_SUCCESS",
                    sessionId: msg.sessionId
                });
                socketFrontendMap.set(msg.sessionId, socket);
            }
            if (socketSmartBoardApp.get(msg.sessionId) !== undefined) {
                socketSmartBoardApp.get(msg.sessionId).emit("smartBoard", msg)
                logger.info("data transmitted to smartboard")
            }
        })
    })
};


function random(low, high) {
    return Math.round(Math.random() * (high - low) + low);
}

module.exports = {
    initSocket
};


