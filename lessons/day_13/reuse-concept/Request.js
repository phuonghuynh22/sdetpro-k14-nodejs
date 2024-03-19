const RequestParent = require("./RequestParent");

// Super class
class Request extends RequestParent {
    constructor(url, headers = {}) {
        super(); // must call super before calling this.
        this.url = url;
        this.headers = headers;
    }

    setMethod(method) {
        // ...spread syntax
        this.headers = { ...this.headers, method: method }; // copy lai het property
    }

    send() {
        console.log(`Sending request with header ${JSON.stringify(this.headers)}`);
        this.response = { statusCode: 200 };
    }

    veriryResponseStatus() {
        console.log(`Status code ${this.response.statusCode}`);
    }
}

module.exports = Request;