class EasyHTTP {
    //make http request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });        
    }

    //Make http post
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }) 
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err));
        });        
    }

    //Put call
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }) 
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err));
        });        
    }

    //Delete
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            }) 
             .then(res => res.json())
             .then(data => resolve('Resource deleted!!'))
             .catch(err => reject(err));
        });        
    }
}