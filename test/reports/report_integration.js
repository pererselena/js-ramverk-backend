process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('GET /reports/week/1', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("object");
                    res.body.data.week.should.be.an("string");
                    res.body.data.week.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('GET /reports/week/2', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("object");
                    res.body.data.week.should.be.an("string");
                    res.body.data.week.length.should.be.above(0);

                    done();
                });
        });
    });
});