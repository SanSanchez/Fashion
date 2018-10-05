const mysql = require('mysql');
const  express = require('express');
const service = express();
const bodyParser = require('body-parser');

service.use(bodyParser.urlencoded({extended: true}));
service.use(bodyParser.json());

const port = process.env.PORT || 9000;
const router = express.Router();

const con = mysql.createConnection({
    host: "fashion-store-db.c2ec5yovuho5.us-east-1.rds.amazonaws.com",
    user: "root",
    password: "gcitproject"
});


router.get('/', function (req, res) {
    con.connect(function (err) {
        if(err){
            console.log("Cant connect to the database!!!!");
        }
        else {
            console.log("Connected");
            const sql = "SELECT * from fashion_store.Product";
            con.query(sql, function (err, result) {
                if(err){console.log("SQL error")}
                else{
                    res.json(result);
                }
            })
        }
    });
});

service.use('/api', router);
service.listen(port);
console.log('Magic happens on port ' + port);
