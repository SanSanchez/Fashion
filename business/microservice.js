const mysql = require('mysql');
const  express = require('express');
const service = express();
const bodyParser = require('body-parser');


service.use(bodyParser.urlencoded({extended: true}));
service.use(bodyParser.json());

const port = process.env.PORT || 9000;
const router = express.Router();

const con = mysql.createConnection({
    host: process.env.RDS_URL,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASS
});

router.get('/orders/completed/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE status = 'Completed' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){console.log(err)}
        else{
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/orders/cancelled/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE status = 'Cancelled' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){console.log(err)}
        else{
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/orders/processing/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE status = 'Processing' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){console.log(err)}
        else{
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/orders', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase";
    con.query(sql, function (err, result) {
        if(err){console.log(err)}
        else{
            res.status(200);
            res.json(result);
        }
    });
});



service.use('/inStore', router);
var server = service.listen(port);
module.exports = server;
console.log('Magic happens on port ' + port);
