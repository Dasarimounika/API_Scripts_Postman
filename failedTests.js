// API call "http://api.planefinder.net/api/airport/times/UME!@#"
//Status code should be shown as 400 but it is giving 200 OK
//Actual = 200 OK
//Expecetd  = 400 BAD REQUEST

pm.test("Status code should be 400 because of client side error", function () {
    pm.response.to.have.status(400); 
});

    
//As wrong API is called the success key in body should have false
//Actual = true
//Expecetd  = false

pm.test("success key in the body Should have the value false", function () { 
    pm.expect(jsonData.success).to.eql(false);
});

//As wrong API is called ther shouldnt be any data in Departures and Arrivals
pm.test("Checking the response body does not have airport key in Departures and airlineCode key in arrivals because of wrong API call", function () {
    pm.response.to.have.jsonBody(jsonData.payload.departures.airport)
     .and.have.jsonBody(jsonData.payload.arrivals.airlineCode);
     });
