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
    const sql = "SELECT * from fashion_store.Order WHERE status = 'Completed' AND date >= '" + req.params.from +"' AND date <= '" + req.params.to + "'";
    con.query(sql, function (err, result) {
        if(err){console.log(err)}
        else{
            res.json(result);
        }
    });
});



service.use('/business', router);
service.listen(port);
console.log('Magic happens on port ' + port);
