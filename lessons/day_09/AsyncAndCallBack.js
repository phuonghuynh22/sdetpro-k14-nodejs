// Asynchronous
function sendRequest(url, callback) {
    console.log('1. Sending request to ', url);
    let result = { statusCode: 200 };
    setTimeout(function () {
        callback(result);
    }, 1000)
}

// Asynchronous
function processResponse(response, callback) {
    console.log('2. Processing response ....');
    setTimeout(function () {
        callback(response.statusCode);
    }, 1000)
}

// Asynchronous
function validateResponse(statusCode) {
    console.log('3. Validating...');
    if (statusCode === 200) {
        console.log('Passed');
    }
    else {
        console.log('Failed, status code', statusCode);
    }
}

// Usage
const url = 'https://jsonplaceholder.typicode.com/'
sendRequest(url, function (result) {
    processResponse(result, function (statusCode) {
        validateResponse(statusCode);
    })
});