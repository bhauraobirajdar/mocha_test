/*
//During the test the env variable is set to test
process.env.NODE_ENV = 'test';



//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();
global.should = chai.should();
global.expect = chai.expect;
chai.use(chaiHttp);

//Our parent block
describe('Todo', () => {
    beforeEach((done) => { //Before each test we empty the database
    console.log("Before eatch here. ");
    done();
});
/!*
  * Test the /GET route
  *!/
describe('/GET todo with id', () => {
    it('it should GET todo with id', (done) => {
    chai.request(server)
        .get('/api/todos/2')
        .end((err, res) => {
        expect(res).have.status(200);
    expect(res.body).be.a('object');

    done();
});
});
});



describe('/GET hot todos with User ID', () => {
    it('it should GET todos which are hot to do for user id', (done) => {
    chai.request(server)
        .get('/api/todos/hot/2')
        .end((err, res) => {

        expect(res).have.status(200);
    expect(res.body).be.a('object');
    expect(res.body).have.property('user_id');
    expect(res.body).have.property('hot_items');
    done();
});
});
});



});
*/

process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
//let should = chai.should();
let should = require('should')
global.should = chai.should();
global.expect = chai.expect;
var request = require('supertest');
chai.use(chaiHttp);


describe('Todo()', () => {
    beforeEach((done) => {
        done();
    });
    describe('/GET todo with id', () => {
        it("get user todos", (done) => {
            chai.request(server)
                .get('/api/todos/2')
                .end((req, res) => {
                    expect(res).have.status(200);
                    expect(res.body).be.an('object');
                    done();
                })
        })

    });

    describe('Get All todo list', () => {
        it('Get All todos',(done) => {
            chai.request(server)
                .get('/api/todos/all_to_dos')
                .end((req,res) =>{
                console.log("All todos are",typeof res.body);
                    expect(res).have.status(200);
                    expect(res.body).be.an('object')
                    done()
                ///
            })
        })
    });

    describe("delete todo by id", () => {
        it("Deleting todo", (done) => {
            chai.request(server)
                .get('/api/todos/delete/3')
                .end((req,res) => {
                    expect(res).have.status(200);
                    done();
                })
        })
    })


})
    /* describe('/Get to with id',() => {
         it("should get with id",(done) => {
           chai.request('127.0.0.3:8093')
               .get('/api/Category2gs')
                .end((err,res) => {
               console.log("resssss ",JSON.stringify(res));
               if(err){
                   console.log("eeeeeeeeeeeeerrrrrrrrrrr");
                   console.log(err);
               }
                 expect(res).have.status(200);

                // expect(res.body).be.a('object');
                 done();
                })
         })
     })

     describe('/check post request()',() => {
         it("Check post request is working or not",(done) =>{
             chai.request(server)
                 .post('/api/todos/savepost')
                 .send({name : "bhaurao",lname : "bbbb"})
                 .end(function(err,res){
                     console.log("resssssssssss");
                    console.log(res.data);https://intra-api.psprint-uat.com/api/InvoiceItems/list2?params=%7B%22criteria%22:%7B%22communityID%22:%22%2733,15,13,1,12,11,19%27%22,%22orderStartDate%22:%22%272017-11-11+00:00:00%27%22,%22orderEndDate%22:%22%272018-02-09+23:59:59%27%22,%22openHoldsCount%22:%22null%22%7D,%22offset%22:0,%22limit%22:30%7D
                     expect(res).to.have.status(200);
                     expect(res.body).be.a('object');
                     done();
                 })
         });

     });*/

    /*describe('/Job list API',() => {
       it("Check ",(done) => {
         chai.request('127.0.0.3:8093')
             .get('/api/InvoiceItems/list2')
             .query(params:{"criteria":{"communityID":"'33,15,13,1,12,11,19'","orderStartDate":"'2017-11-11 00:00:00'","orderEndDate":"'2018-02-09 23:59:59'"},"offset":0,"limit":30})
              .end((err,res) => {
             console.log("resssss ",JSON.stringify(res));
             if(err){
                 console.log("eeeeeeeeeeeeerrrrrrrrrrr");
                 console.log(err);
             }
               expect(res).have.status(200);

              // expect(res.body).be.a('object');
               done();
              })
       })
   })*/
    /*try {
        var authenticatedUser = request.agent(server);
        before(function (done) {
            authenticatedUser
            request('127.0.0.3:8091')
                .post('/api/internal/internaluser/intra-login')
                .send({"UserName": "SudhaP", "Password": "Test@123", "HostAddress": '::ffff:127.0.0.1'})
                .end(function (err, response) {
                    console.log(err);
                    console.log("Statussssssss ", response.status)
                    expect(res).have.status(200);
                    //expect('Location', '/home');
                    done();
                });
        });
    }catch(e){
        console.log(e.stack);
    }*/


//let's set up the data we need to pass to the login method

//this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
//after the POST has completed, make sure the status code is 200
//also make sure that the user has been directed to the /home page

/*describe('array',function(){
    describe('#indexOf()',function () {
        beforeEach(function() {
            console.log('before every test in every file');
        });



    })
})*/

/*
const userCredentials = {
    email: 'SudhaP',expect(res).have.status(200);
    password: 'Test@123'
}
//now let's login the user before we run any tests
var authenticatedUser = request.agent(server);
before(function(done){
    authenticatedUser
    request(app)
        .post('127.0.0.3:8093/api/todos/savepost')

        .end(function(err, response){
            console.log("ressssssssssss");
            //console.log(response);
            expect(response.statusCode).to.equal(200);
            expect('Location', '/dashboard');
            done();
        });
});*/

/*

describe('Functional Test <Sessions>:', function () {
    var authenticatedUser = request.agent(server);

    it('should create user session for valid user', function (done) {
        request('127.0.0.3:8093')
            .post('/api/internal/internaluser/Job2CMPSettings')
            .set('Accept', 'application/json')
            .send({"UserName": "SudhaP", "Password": "Test@123","HostAddress" : '::ffff:127.0.0.1'})
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                expect(res).have.status(200);
                console.log("STtatus is ",res.status);
                console.log(res.body);
                done();
            });
    });

    /!*var authenticatedUser = request.agent(server);
    before(function(done){
        it('should create user session for valid user', function (done) {
            authenticatedUser
            request('127.0.0.3:8091')
                .post('/api/internal/internaluser/intra-login')
                .send(userCredentials)
                .end(function (err, response) {
                    expect(res).have.status(200);
                    //expect('Location', '/home');
                    done();
                });
        });
    });*!/
});
*/
