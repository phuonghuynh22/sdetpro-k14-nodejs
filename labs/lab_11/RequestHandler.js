const address = 'https://jsonplaceholder.typicode.com';
const slug = '/posts';
let url = `${address}${slug}`;

const Post = require("./Post");
const post = new Post();

class RequestHandler {

    sendRequest() {
        return fetch(url).then(function (response) {
            return response.json();
        });
    }

    async _getAllPosts(userId) {
        const allPosts = await this.sendRequest(url);
        return allPosts.filter(function (post) {
            return (post.userId === userId);
        })
    }

    async printRequestedPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const allUserPosts = await this._getAllPosts(userId);

        if (Object.keys(allUserPosts).length !== 0) {
            const requestedPost = allUserPosts.filter(function (post) {
                return (post.id === postId);
            })[0];

            if (requestedPost) {
                post._userId = requestedPost.userId;
                post._postId = requestedPost.id;
                post._title = requestedPost.title;
                post._body = requestedPost.body;
                console.log(post);
            } else {
                console.log(`PostID ${postId} of userID ${userId} is not found!`);
            }
        } else {
            console.log(`UserID: ${userId} is not found`);

        }

    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const allUserPosts = await this._getAllPosts(userId);

        if (Object.keys(allUserPosts).length !== 0) {
            console.log('\n****************');

            for (const aPost of allUserPosts) {
                post._userId = aPost.userId;
                post._postId = aPost.id;
                post._title = aPost.title;
                post._body = aPost.body;
                console.log(post);
            }
        }
    }

}
module.exports = RequestHandler;