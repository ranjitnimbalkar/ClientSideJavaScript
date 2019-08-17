const http = new easyHTTP();

//Get Posts - without callback
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
// console.log(posts)

// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
//    if(error){
//         console.log(error);
//    } else {
//         console.log(posts);
//    }
// });

// http.get('https://jsonplaceholder.typicode.com/posts/20', function(error, posts){
//    if(error){
//         console.log(error);
//    } else {
//         console.log(posts);
//    }
// });

const data = {
    "userId": 7416,
    "title": "Custome post",
    "body": "Custome post"
  };

// http.post('https://jsonplaceholder.typicode.com/posts/', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// //Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});



