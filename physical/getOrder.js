var mysql = require('mysql');

exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const connection = mysql.createConnection({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  });

  let sql = "SELECT * FROM fashion_store.Purchase WHERE order_id = " + event.pathParameters.orderId;

  connection.query(sql, (error, results, fields) => {
    connection.end();

    if (error) {
      console.log("Error with SQL syntax");

      const response = {
        "statusCode": 404,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(results),
        "isBase64Encoded": false
      }

      callback(null, response);
    } else {
      const response = {
        "statusCode": 200,
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(results),
        "isBase64Encoded": false
      };

      context.succeed(response);
    }
  });
};