const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];


// function createPost(post){
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     let output = '';
//     setTimeout(function() {
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// //Synchronous way
// console.log("Started!!!")
// createPost({title: 'Post Three', body: 'This is post three'});
// console.log("Post created!!!");
// getPosts();
// console.log('Completed!!!');


//Asynchronous callback function
function createPost(post, callback){
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
    console.log("Finished creating post");
}

function getPosts() {
    let output = '';
    setTimeout(function() {
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
console.log("Completed!!!");