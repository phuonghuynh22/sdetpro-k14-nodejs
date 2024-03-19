const Request = require('./Request');
// reuse: dung lai
// Child class/ concrete class

class PostRequest extends Request{

    // viet them
    setMethod(){
        //console.log('setMethod in POST request...');; // copy lai het property
        super.setMethod("POST");
    }
}

module.exports = PostRequest;