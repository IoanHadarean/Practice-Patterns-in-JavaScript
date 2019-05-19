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
// class Post {
//     constructor(author, post, id) {
//         this.author =  author;
//         this.post = post;
//         this.id = id;
//     }
// }


// // Initialise instancePost object
// let instancePost1 = new Post('MemoriesRemain', 'Trying to be a happy person.....', 1);
// let instancePost2 = new Post('Ioan1997', 'A random post', 2);
// let instancePost3 = new Post('MemoriesRemain', 'Trying to be a happy person.....', 3);

// // Initialise instancePosts array
// let instancePosts = [];
// instancePosts.push(instancePost1);
// instancePosts.push(instancePost2);
// instancePosts.push(instancePost3);

// // Singleton iffy function for creating a single post
// const SingletonPost =  (function() {
    
//     const createPost =  function(index) {
//         for (var index = 0; index < instancePosts.length; index++) {
//             return instancePosts[index];
//         }
//     };
    
//     return {
//         getPost: function(index) {
//             if (!instancePosts[index]) {
//                 instancePosts[index] = createPost();
//             }
//             return instancePosts[index];
//         }
//     };
    
// })();

// // Posts are the same
// const instancePostCall1 = SingletonPost.getPost();
// const instancePostCall2 = SingletonPost.getPost();





// Factory pattern

// Create StandardAccount class for player
// class StandardAccount {
//     constructor(player) {
//         this.player =  player;
//         this.cost = '£0';
//         this.days = 0;
//     }
// }

// // Create PremiumAccountDays class for player
// class PremiumAccountDays {
//     constructor(player, days) {
//         this.player =  player;
//         this.cost = '£5';
//         this.days = days;
//     }
// }

// Create PremiumAccountYear class for player
// class PremiumAccountYear {
//     constructor(player, year) {
//         this.player =  player;
//         this.cost = '£5';
//         this.year = year;
//     }
// }

// function createMember() {
//     this.createMembership = function(player, type, days, year) {
//         let member;
        
//         if (type == 'standard') {
//             member =  new StandardAccount(player);
//         }
//         else if (type == 'premiumaccountyear') {
//             member = new PremiumAccountYear(player, days, year);
//         }
//         else if (type == 'premiumaccountdays') {
//             member =  new PremiumAccountDays(player, days, year);
//         }
        
//         return member;
//     };
// }

// let players = [];
// let member = new createMember();
// players.push(member.createMembership('goagl', 'standard'));
// players.push(member.createMembership('RyanC00per', 'premiumaccountdays', '30'));
// players.push(member.createMembership('SuperSaiyanGokuandVegeta', 'premiumaccountyear', '1'));
// console.log(players);

let countSubscriptions = 0;

class SubscriptionTwitch {
    constructor() {
        this.subscriptions = [];
    }

    subscribe(fn) {
        if (countSubscriptions < 1) {
            if (this.subscriptions.length !== 1) {
                this.subscriptions.push(fn);
                alert("You are now subscribed to Twitch");
            }
            countSubscriptions += 1;
        }
    }
    
    unsubscribe(fn) {
        if (countSubscriptions > 0) {
            countSubscriptions -= 1;
            if (this.subscriptions.length !== 0) {
                this.subscriptions.pop();
                alert("You are now unsubscribed from Twitch");
                
            }
        }
    }
    
    fireEvent() {
        alert(`You are subbed to ${countSubscriptions} channels on Twich`);
    }
}

const subscription = new SubscriptionTwitch();

// Add event listeners for buttons
document.querySelector('.sub-twitch').addEventListener('click', function() {
    subscription.subscribe(sendSubscribeEmail);
});

document.querySelector('.unsub-twitch').addEventListener('click', function() {
    subscription.unsubscribe(sendUnsubscribeEmail);
});

document.querySelector('.show-subscriptions').addEventListener('click', function() {
    subscription.fireEvent();
});


// Add subscribe and unsubscribe callback functions
const sendSubscribeEmail = function() {
    console.log("Now send an email to the user, letting him know that he is subscribed using an email API service");
};

const sendUnsubscribeEmail = function() {
    console.log("Now send an email to the user, letting him know that he is unsubscribed using an email API service");
};