document.getElementById('button').addEventListener('click',loadData);

function loadData(){
   
    //Create XHR object
    const xhr = new XMLHttpRequest();

    if(xhr.readyState === 0){
        console.log('0. Request not initialized');
    }

    //Open method
    xhr.open('GET','data.txt',true);

    if(xhr.readyState === 1){
        console.log('1. Server connection established');
    }

    //Optional - userd for spinners/loaders
    xhr.onprogress = function() {
        console.log(this.readyState);
    }

    //Onload
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `
                <h3>${this.responseText}</h3>
            `;
        }
    }

    //XHR onReadyState change
    //readyState Values
    //0. request not initialized
    //1. server connection established
    //2. request received
    //3. processing request
    //4. request finished and response ready
    // xhr.onreadystatechange = function() {
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(xhr.responseText);
    //     }
        
    //     if(this.readyState === 2){
    //         console.log('2. Request received');
    //     }
    //     if(this.readyState === 3){
    //         console.log('3. Processing request');
    //     }
    // };

    //Send request
    xhr.send();
}