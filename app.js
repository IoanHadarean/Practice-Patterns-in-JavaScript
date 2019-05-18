// Revealing Module Pattern
// const PostsCtrl =  (function() {
//     let posts = [];

//     const addPost = function(author, post, id) {
//         posts.push({author: author, post: post, id: id});
//         console.log('Post has been added');
//         console.log(posts);
//     };

//     const deletePost = function(author, id) {
//         for (var i = 0; i < posts.length; i++) {
//             if (posts[i].author === author && posts[i].id === id) {
//                 posts.splice(i, 1);
//             }
//         }

//         console.log(posts);
//     };

//     return {
//         addPost: addPost,
//         deletePost: deletePost
//     };


// })();


// PostsCtrl.addPost('John', 'Hello, this is my post', 1);
// PostsCtrl.deletePost('John', 1);
// console.log(PostsCtrl.posts);






// // Module Pattern

// Initialise posts array
// var posts = [];

// const AddPostsCtrl =  (function() {


//     const addPost = function(author, post, id) {
//         posts.push({author: author, post: post, id: id});
//         console.log('Post has been added');
//         console.log(posts);
//     };

//     // const deletePost = function(author, id) {
//     //     for (var i = 0; i < posts.length; i++) {
//     //         if (posts[i].author === author && posts[i].id === id) {
//     //           posts.splice(i, 1);
//     //         }
//     //     }
//     // };

//     return  {
//         callAddPost : function(author, post, id) {
//             addPost(author, post, id);
//             posts = posts;
//         }
//     };
// })();


// AddPostsCtrl.callAddPost('John', 'Valar morghulis', 1);
// AddPostsCtrl.callAddPost('Ioan', 'Valar dohaeris', 1);
// AddPostsCtrl.callAddPost('Ioan', 'I feel alone again', 2);
// AddPostsCtrl.callAddPost('Andrei', 'I wish I was an eagle', 1);

// const DeletePostsCtrl = (function() {
    
//     const deletePost = function(author, id) {
//         for (var i = 0; i < posts.length; i++) {
//             if (posts[i].author === author && posts[i].id === id) {
//               posts.splice(i, 1);
//             }
//         }
//     };
    
//     return {
//         callDeletePost: function(author, id) {
//             deletePost(author, id);
//         }
//     };
// })();


// DeletePostsCtrl.callDeletePost('John', 1);






// Singleton Pattern

// Class for creating posts
class Post {
    constructor(author, post, id) {
        this.author =  author;
        this.post = post;
        this.id = id;
    }
}


// Initialise instancePost object
let instancePost1 = new Post('MemoriesRemain', 'Trying to be a happy person.....', 1);
let instancePost2 = new Post('Ioan1997', 'A random post', 2);
let instancePost3 = new Post('MemoriesRemain', 'Trying to be a happy person.....', 3);

// Initialise instancePosts array
let instancePosts = [];
instancePosts.push(instancePost1);
instancePosts.push(instancePost2);
instancePosts.push(instancePost3);

// Singleton iffy function for creating a single post
const SingletonPost =  (function() {
    
    const createPost =  function(index) {
        for (var index = 0; index < instancePosts.length; index++) {
            return instancePosts[index];
        }
    };
    
    return {
        getPost: function(index) {
            if (!instancePosts[index]) {
                instancePosts[index] = createPost();
            }
            return instancePosts[index];
        }
    };
    
})();

// Posts are the same
const instancePostCall1 = SingletonPost.getPost();
const instancePostCall2 = SingletonPost.getPost();
console.log(instancePostCall1);
console.log(instancePostCall2);