describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should be able to instruct planes to land at the airport", function() {
    plane.land(airport);
    expect(airport.planes).toInclude(plane);
  });

});
