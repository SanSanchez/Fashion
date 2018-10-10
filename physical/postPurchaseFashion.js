var mysql = require('mysql');

// TODO: Shouldn't we also have a query that updates the Order_has_Product table?
// TODO: Make it so that no coupon need be added.
// TODO: Look more into the context object.
exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  var connection = mysql.createConnection({
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,

  });

  const parsedEvent = JSON.parse(event.body);
  const date = new Date().toISOString().slice(0, 10);
  const sql = "INSERT INTO fashion_store.Purchase " +
    "VALUES(null, '" + parsedEvent.price + "', " +
    "'" + date + "', " +
    "'Processing', " +
    "'" + parsedEvent.coupon + "', " +
    "'" + parsedEvent.userId + "')";


  connection.query(sql, (error, results, fields) => {
    connection.end();

    if (error) {
      console.log(error);

      const response = {
        statusCode : 500,
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(error),
        isBase64Encoded: false
      };

      callback(null, response);
    }
    else {
      const Purchase = {
        Price : parsedEvent.price,
        DateOfPurchase : date,
        Status : "Processing",
        Coupon : parsedEvent.coupon,
        UserID : parsedEvent.userId
      };

      const response = {
        statusCode : 201,
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(Purchase),
        isBase64Encoded : false
      };

      context.succeed(response);
    }
  });
};