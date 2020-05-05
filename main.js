
var inputState = document.getElementById("inputText");
var showStatus = document.getElementById("showContend");

function show(){
    fetcher(inputState.value);
}

function fetcher(sn){
    fetch('http://127.0.0.1:8080/?stateName='+sn)
    .then(function(response){
        if(response.status == 200){
            response.json()
            .then(function (jsondata){
                console.log(jsondata)
                showNumber(jsondata);
            })
        }
        else{

        }
    }
    )
    .catch(function(err){
        alert("an error occured ");
    }
    );

}


function showNumber(jsondata){
    jsondata.forEach(state => {
        showStatus.innerHTML = ""
        showStatus.innerHTML += `
        <h2> ${state.sName}  </h2>
        <p id="active">Active:   ${state.active}</p>
        <p id="recovered">Recovered : ${state.recovered}</p>`
    })
};