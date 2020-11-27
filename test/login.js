// jshint esversion:6
const expect = require('chai').expect,
   chaiHttp = require('chai-http');
const login = require('../routes/home.js');

//chai.use(chaiHttp);

it('Test login with database', function() {
   const req = {
      body: {
         username: "Lukas",
         password: "password"
      }
   };
   /*expect(login.bind(this, req, {}, () => {})).to.throw(
      'Not authenticated.'
   );*/
});
