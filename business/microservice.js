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


router.get('/purchases/completed/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE status = 'Completed' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){
            res.status(503);
        }
        else if(result.size === 0){
            res.status(404);
            res.json(result);
        }
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/purchases/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){
            res.status(503);
        }
        else if(result.size === 0){
            res.status(404);
            res.json(result);
        }
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);
            res.json(result);
        }
    });
});


router.get('/purchases/cancelled/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE status = 'Cancelled' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){
            res.status(503);
        }
        else if(result.size === 0){
            res.status(404);
            res.json(result);
        }
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/purchases/processing/:from/:to', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase WHERE status = 'Processing' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){
            res.status(503);
        }
    else if(result.size === 0){
            res.status(404);
            res.json(result);
        }
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);
            res.json(result);
        }
    });
});

router.get('/purchases', function (req, res) {
    const sql = "SELECT * from fashion_store.Purchase";
    con.query(sql, function (err, result) {
        if(err){
            res.status(503);
        }
        else if(result.size === 0){
            res.status(404);
            res.json(result);
        }
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);
            res.json(result);
        }
    });
});



service.use('/taxes', router);
var server = service.listen(port);
module.exports = server;
console.log('Magic happens on port ' + port);
