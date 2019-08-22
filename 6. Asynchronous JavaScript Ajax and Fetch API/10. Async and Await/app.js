// async function myFunc(){

//     //return 'Hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'),2000);
//     });

//     const res = await promise;

//     //console.log(promise);
    
//     const error = false;

//     if(!error){
//         //wait untile promise is resolved
//         return res;
//     } else {
//        return Promise.reject(new Error('Something went wrong!'));
//     }
    
// }

// //console.log(myFunc());
// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

//Making function as async will return the promise
async function getUsers() {
    //await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    //only proceed once its resovlved
    const data = await response.json();
    console.log(data);
    //only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));
