const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11() {
    // Given params
    const userId = 5;
    const postId = 50;

    const requestHandler = new RequestHandler();
    await requestHandler.printRequestedPost(userId, postId);
    await requestHandler.printAllPosts(userId);

}