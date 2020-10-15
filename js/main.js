(() => {

    // make an AJAX request using Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())//This line becomes json into js
    .then(data => {
        
        debugger;
        console.log(data);

        //handleData
        // here is where you would call the function that puts the pieces on the page


    })
    .catch((err) => {
        console.log(err);
    })

})();