var http = require('http');
var url = require('url');

var stateData = [
    {
        sName: 'India',
        active: 24670,
        recovered: 9074,
        death: 1154
    },
    {
        sName: 'Maharshtra',
        active: 8266,
        recovered: 1773,
        death: 459
    },
    {
        sName: 'Gujarat',
        active: 3568,
        recovered: 613,
        death: 214
    }

];


var server = http.createServer(function(request , response)
{
    response.writeHead(200, {'Access-Control-Allow-Origin':'null'});
    
    var queryString = url.parse(request.url, true).query;
    var stateName = queryString.stateName;

    var responseObject = [];
    console.log(stateName)
    if (stateName !== undefined )
    {   
        stateData.forEach(state=>{
            if(stateName === state.sName){
                responseObject.push(state);
            }
        });
        if (responseObject.length == 0) {
            response.writeHead(404 , {'Access-Control-Allow-Origin':'null'});
        }           
    }
    else {
        stateData.forEach(state => {
            responseObject.push(state);            
        });
    }
    response.write(JSON.stringify(responseObject));
    response.end();
}
);
 server.listen(8080);
