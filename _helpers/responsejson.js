const errorHandler = require('./error-handler');

function buildJsonRes(status, message) {
  var resobj = {
    messageType: "CypherData",
    statusCode: (message.status) ? message.status : ((status === "Error") ? 404 : 200),
    messageData:
    {
      status: status,
      message: (status === "Error") ? errorHandler.errorHandler(message) : message
    }
  }
  return resobj;
}


module.exports = {
  buildJsonRes
}