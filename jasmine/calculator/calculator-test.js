
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:100000, term:20, rate: 3.5})).toEqual(579.96);
  expect(calculateMonthlyPayment({amount:100000, term:30, rate: 3})).toEqual(421.6);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:100000, term:20, rate: 3.5})).toBeCloseTo(579.96,2);
});

/// etc