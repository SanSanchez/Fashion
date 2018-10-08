let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../microservice');
let should = chai.should();

process.env.NODE_ENV = 'test';
chai.use(chaiHttp);

describe('/GET Orders', ()=> {
    it('It should get all orders', (done) => {
        chai.request(server)
            .get('/business/orders')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })
});

describe('/GET Completed Orders', ()=> {
    it('It should get all completed orders', (done) => {
        chai.request(server)
            .get('/business/orders/completed/2018-10-01/2018-10-05')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })
});

describe('/GET Cancelled Orders', ()=> {
    it('It should get all orders that have been cancelled', (done) => {
        chai.request(server)
            .get('/business/orders/completed/2018-10-01/2018-10-05')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    })
});