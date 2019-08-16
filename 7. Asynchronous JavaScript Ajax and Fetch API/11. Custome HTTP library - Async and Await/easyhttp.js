class EasyHTTP {
    //make http request
    async get(url) {
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });
        
        const response = await fetch(url);
        const resData = await response.json();
        return resData;

    }

    //Make http post
    async post(url, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     }) 
        //      .then(res => res.json())
        //      .then(data => resolve(data))
        //      .catch(err => reject(err));
        // });   
        
        const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;        
    }

    //Put call
    async put(url, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     }) 
        //      .then(res => res.json())
        //      .then(data => resolve(data))
        //      .catch(err => reject(err));
        // });    
        
        const respone = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const resData = await respone.json();
        return resData;
    }

    //Delete
    async delete(url) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-type': 'application/json'
        //         }
        //     }) 
        //      .then(res => res.json())
        //      .then(data => resolve('Resource deleted!!'))
        //      .catch(err => reject(err));
        // });     
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        
        const resData = await "Resource Deleted!!!";

        return resData;
    }
}