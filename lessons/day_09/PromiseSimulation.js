function asyncFunction01(param){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Processing 1: ', param);
            const returnedValue = 'value from function 1 and ' + param;
            resolve(returnedValue);
        }, 1000)
    })
}

function asyncFunction02(param){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Processing 2: ', param);
            const returnedValue = 'value from function 2 and ' + param;
            resolve(returnedValue);
        }, 1000)
    })
}

function asyncFunction03(param){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Processing 3: ', param);
            const returnedValue = 'Final: value from function 3 and ' + param;
            resolve(returnedValue);
        }, 1000)
    })
}

asyncFunction01('initial param')
    .then(function(returnedValue1){
        return asyncFunction02(returnedValue1);
    })
    .then(function(returnedValue2){
        return asyncFunction03(returnedValue2);
    })
    .then(function(returnedValue3){
        console.log(returnedValue3);
    })