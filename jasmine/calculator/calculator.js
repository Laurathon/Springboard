// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let i = values.rate/100/ 12;
  let n = values.term *12; 
  let a = values.amount;
  let dividend = a * i * Math.pow(1 + i,n);
  let divisor = (Math.pow(1+ i,n))-1;
  let payment = Math.round((dividend/divisor)*100)/100;
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log( " in updateMonthly ", monthly);
  //document.getElementById("monthly-payment").value = monthly;
  if (monthly >=1){
    document.getElementById("monthly-payment").innerText = ` $`+monthly;
  }
  else 
    document.getElementById("monthly-payment").innerText = ` $`+0;
}
