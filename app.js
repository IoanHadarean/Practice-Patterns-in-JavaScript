const PostsCtrl =  (function() {
    let posts = [];

    const addPost = function(author, post, id) {
        posts.push({author: author, post: post, id: id});
        console.log('Post has been added');
        console.log(posts);
    };

    const deletePost = function(author, id) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].author === author && posts[i].id === id) {
                posts.splice(i, 1);
            }
        }

        console.log(posts);
    };

    return {
        addPost: addPost,
        deletePost: deletePost
    };


})();


PostsCtrl.addPost('John', 'Hello, this is my post', 1);
PostsCtrl.deletePost('John', 1);
console.log(PostsCtrl.posts);