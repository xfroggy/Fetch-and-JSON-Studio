// TODO: add code here
window.addEventListener("load", function () {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function (json) {
            const container = document.getElementById("container");
            json.sort((a,b) =>(a.hoursInSpace < b.hoursInSpace) ? 1 : -1);
            container.innerHTML=`<p>There are ${json.length} Astronauts`;
           
            for (let obj = 0; obj < json.length; obj++) {
                let status = "";
                if (json[obj].active === true) {
                    status = "green";                    
                } 
                
                container.innerHTML = container.innerHTML+ ` 
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[obj].firstName} ${json[obj].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[obj].hoursInSpace}</li>
                                    <li class =${status}> Active: ${json[obj].active}</li>
                                    <li>Skills: ${json[obj].skills}</li>
                                </ul>
                        </div>
                        <img class="avatar" src="images/${json[obj].picture}">
                    </div>
                `;
            }
        });
    });
});