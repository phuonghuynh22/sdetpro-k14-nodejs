const address = 'https://jsonplaceholder.typicode.com';
const slug = '/posts';
let url = `${address}${slug}`;
const userId = 3;
const postId = 1;

printRequestedPost(userId, postId);
printAllUserPosts(userId);

function sendRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    });
}

async function _getAllPosts(userID) {
    const allPosts = await sendRequest(url);
    return allPosts.filter(function (post) {
        return (post.userId === userID);
    })
}

async function printRequestedPost(userID, postID) {
    const allUserPosts = await _getAllPosts(userID);
    if (Object.keys(allUserPosts).length !== 0) {
        const requestedPost = allUserPosts.filter(function (post) {
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
    } else {
        console.log(`UserID: ${userID} is not found`);

    }
}

async function printAllUserPosts(userID) {
    const allUserPosts = await _getAllPosts(userID);
    if(Object.keys(allUserPosts).length !== 0){
        console.log('\n****************');
        console.log(`All posts of UserID: ${userID}`, allUserPosts);
    }
}



