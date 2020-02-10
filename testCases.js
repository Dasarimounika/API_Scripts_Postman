
//API call "​http://api.planefinder.net/api/airport/times/UME"

const jsonData = pm.response.json(); //saving the json response globally 


//Checking the status code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//Checking the response value
pm.test("response success ", function () { 
    pm.expect(jsonData.success).to.eql(true);
});


//checking the response time 
pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});


//checking if the headers are having the key content-type 
pm.test("Content-Type is present as the key value in Headers", function () {
    pm.response.to.have.header("Content-Type");
});


//checking if the response include departures
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("departures");
});


//checking if the payload response is having both arrivlas and departures
pm.test("Checking the response body has both Departures and arrivals", function () {
    pm.response.to.have.jsonBody(jsonData.payload.departures)
     .and.have.jsonBody(jsonData.payload.arrivals);
     });


//Checking the response body has id key in Departures and airport key in arrivals
pm.test("Checking the response body has id key in Departures and airport key in arrivals", function () {
    pm.response.to.have.jsonBody(jsonData.payload.departures.id)
     .and.have.jsonBody(jsonData.payload.arrivals.airport);
    });
    
