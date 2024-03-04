const readLine = require('readline-sync');

const address = 'https://jsonplaceholder.typicode.com';
const slug = '/posts';
let url = `${address}${slug}`;
const userID = 43231;
const postID = 1;

printRequestedPost(userID, postID);
printAllUserPosts(userID);

function sendRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}

function _getAllPosts(userID) {
    return sendRequest(url).then(function (response) {
        return response.filter(function (posts) {
            return posts.userId === userID;
        })
    });
}

function printRequestedPost() {
    _getAllPosts(userID).then(function (posts) {
        if (Object.keys(posts).length === 0) {
            console.log(`UserID: ${userID} is not found`);
        }
        else {
            const requestedPost = posts.filter(function (post) {
                return (post.id === postID);
            })[0];

            if (requestedPost) {
                console.log(requestedPost);
            } else {
                console.log(`PostID ${postID} not found!`);
            }
        }
    })
}

function printAllUserPosts(userID) {
    _getAllPosts(userID).then(function (allUserPosts) {
        console.log(allUserPosts);
    });
}

