process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

let token = "";

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

    describe('POST /reports', () => {

        it('should get 201 HAPPY PATH', (done) => {
            let user = {
                email: "test2@example.com",
                password: "123test",
                name: "Test",
                birthday: "2000-10-10"
            };

            chai.request(server)
                .post("/register")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    res.body.should.have.property("data");
                    res.body.data.should.have.property("message");
                    res.body.data.message.should.equal("User successfully registered.");

                    done();
                });
        });

        it('should get 200 HAPPY PATH', (done) => {
            let user = {
                email: "test2@example.com",
                password: "123test"
            };

            chai.request(server)
                .post("/login")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.should.have.property("data");
                    res.body.data.should.have.property("type");
                    res.body.data.type.should.equal("success");
                    res.body.data.should.have.property("type");
                    token = res.body.data.token;

                    done();
                });
        });

        it('should get 400 as we do not supply week', (done) => {
            let report = {
                report: "test",
            };

            chai.request(server)
                .post("/reports")
                .set("x-access-token", token)
                .send(report)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an("object");
                    res.body.should.have.property("errors");
                    res.body.errors.should.have.property("status");
                    res.body.errors.status.should.be.equal(400);
                    res.body.errors.should.have.property("detail");

                    done();
                });
        });

        it('should get 401 not providing token', (done) => {
            let report = {
                week: 3,
                report: "test",
            };

            chai.request(server)
                .post("/reports")
                // .set("x-access-token", token)
                .send(report)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.an("object");
                    res.body.should.have.property("errors");
                    res.body.errors.should.have.property("status");
                    res.body.errors.status.should.be.equal(401);
                    res.body.errors.should.have.property("detail");

                    done();
                });
        });

        it('should get 201 HAPPY PATH', (done) => {
            let report = {
                week: 3,
                report: "test",
            };

            chai.request(server)
                .post("/reports")
                .set("x-access-token", token)
                .send(report)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    res.body.should.have.property("data");

                    done();
                });
        });

        it('should get 204 HAPPY PATH', (done) => {
            let report = {
                week: 3,
                report: "test",
            };

            chai.request(server)
                .put("/reports")
                .set("x-access-token", token)
                .send(report)
                .end((err, res) => {
                    res.should.have.status(204);

                    done();
                });
        });

        it('should get 204 HAPPY PATH', (done) => {
            let report = {
                week: 3,
                report: "test",
            };

            chai.request(server)
                .delete("/reports")
                .set("x-access-token", token)
                .send(report)
                .end((err, res) => {
                    res.should.have.status(204);

                    done();
                });
        });
    });
});