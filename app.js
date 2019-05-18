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





// var posts = [];

// // Module Pattern
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
// class Post {
//     constructor(author, post, id) {
//         this.author =  author;
//         this.post = post;
//         this.id = id;
//     }
// }

// // Initialise instancePost object
// let instancePost = new Post('MemoriesRemain', 'Trying to be a happy person.....', 1);


// // Singleton iffy function for creating a single post
// const SingletonPost =  (function() {
    
//     const createPost =  function() {
//         return instancePost;
//     };
    
//     return {
//         getPost: function() {
//             if (!instancePost) {
//                 instancePost = createPost();
//             }
//             return instancePost;
//         }
//     };
    
// })();

// // Posts are the same
// const instancePost1 = SingletonPost.getPost();
// const instancePost2 = SingletonPost.getPost();
// console.log(instancePost1);
// console.log(instancePost2);