let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
let serverUrl = "http://localhost:3000";
chai.use(chaiHttp);

describe("Users", ()=>{
    // get users route
    describe("GET /users", ()=>{
        it('Should get all the users', (done)=>{
            chai.request(serverUrl)
            .get("/users")
            .end((err, res)=>{
                expect(err).equals(null);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('users');
                done();
            })
        })
    })

    // create user
    describe("POST /users", ()=>{
        it('Should create a new user', (done)=>{
            chai.request(serverUrl)
            .post("/users")
            .send({ //sending json typ body params
                "firstname": "Test",
                "lastname":"Users",
                "email":`test_${new Date().getTime()}@gmail.com`,
                "dept":"Department1"
            })
            .end((err, res)=>{
                expect(err).equals(null);
                expect(res).to.have.status(200);
                done();
            })
        })
    })
})