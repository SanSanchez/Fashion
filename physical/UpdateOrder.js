var mysql = require('mysql');

exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const connection = mysql.createConnection({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,

  });

  const parsedEvent = JSON.parse(event.body);
  const sql = "UPDATE fashion_store.Purchase SET status = '" +
    parsedEvent.newStatus +"' WHERE order_id = " +
    event.pathParameters.orderId

  connection.query(sql, function(error, results, fields) {

    connection.end();

    if (error) {
      const response = {
        statusCode : 500,
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(error),
        isBase64Encoded: false
      };

      callback(null, response);
    } else {
      const response = {
        "statusCode": 202,
        "headers": {
          "Content-Type" : "application/json"
        },
        "body": JSON.stringify(results),
        "isBase64Encoded": false
      };

      context.succeed(response);
    }
  });


};