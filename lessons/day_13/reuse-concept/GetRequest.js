const Request = require('./Request');
// reuse: dung lai
// Child class/ concrete class

class GetRequest extends Request{

    setMethod(){
        //console.log('setMethod in GET request...');; // copy lai het property
        super.setMethod("GET");
    }
}

module.exports = GetRequest;