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
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            //change error value to test error scenario
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error : Somthing went wrong!!');
            }
            
        }, 2000);
    });    
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

createPost({title: 'Post Three', body: 'This is post three'})
          .then(getPosts)
          .catch(function(err) {
              console.log(err);
          });
console.log("Completed!!!");