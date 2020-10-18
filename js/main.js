(() => {

    // make an AJAX request using Fetch API
    fetch('./data/classData.json')
    .then(res => res.json())//This line becomes json into js
    .then(data => {


        let classinfo = document.querySelector(".profPanelText").children;
            times = document.querySelector(".list-inline").children;

            classinfo[0].innerHTML =  data.coursename + " - " + data.coursecode;
            classinfo[1].innerHTML =  "Professor" + " - " + data.profname;

            times[0].innerHTML =  data.classtime[0];
            times[1].innerHTML =  data.classtime[1];

    

        
        //debugger;
        console.log(data);

        //handleData
        // here is where you would call the function that puts the pieces on the page
    
        

            



    })
    .catch((err) => {
        console.log(err);
    })

})();