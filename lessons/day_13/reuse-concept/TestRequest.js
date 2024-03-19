const GetRequest = require('./GetRequest');
const PostRequest = require('./PostRequest');

const url = "https://test-api.com";

// GET
const request = new GetRequest(url);
request.setMethod();
request.send();
request.veriryResponseStatus();


// POST
const postRequest = new PostRequest(url);
postRequest.setMethod();
postRequest.send();
postRequest.veriryResponseStatus();
postRequest.sayHello();
