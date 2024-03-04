// Asynchronous
function sendRequest(url, callback) {
    console.log('1. Sending request to ', url);
    fetch(url).then(function (response) {
        callback(response)
    });

}

// Synchronous
function processResponse(response) {
    console.log('2. Processing response ....');
    return response.status;
}

// Synchronous
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
    const statusCode = processResponse(result);
    validateResponse(statusCode);
});
