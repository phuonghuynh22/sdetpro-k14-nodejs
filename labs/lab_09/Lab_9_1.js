const address = 'https://jsonplaceholder.typicode.com';
const slug = '/posts';
let url = `${address}${slug}`;
const userID = 1;
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
                console.log('\n****************');
                console.log(`UserID: ${userID}`);
                console.log(`PostID: ${postID}`);
                console.log(`Post content: "${requestedPost.body}"`);

            } else {
                console.log(`PostID ${postID} of userID ${userID} is not found!`);
            }
        }
    })
}

function printAllUserPosts(userID) {
    _getAllPosts(userID).then(function (allUserPosts) {
        if (Object.keys(allUserPosts).length !== 0) {
            console.log('\n****************');
            console.log(`All posts of UserID: ${userID}`, allUserPosts);
        }
    });
}

