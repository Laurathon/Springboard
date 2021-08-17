describe("Helpers Test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 50;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });


it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
  expect(sumPaymentTotal('tipAmt')).toEqual(20);
  });


    
it('should convert bill and tip amount into tip percent calculateTipPercent()', function () {
    expect(calculateTipPercent(100,20)).toEqual(20);
 });





 it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
  let tableRow = document.createElement('tr');

  appendTd(tableRow, 'laura');

  expect(tableRow.innerText).toEqual('laura');
  //expect(newTr.firstChild.innerHTML).toEqual('test');
});

if('should add a td for delete button when adding a server  appendDeleteBtn(tr, type)', function (){
    let tr = document.createElement('tr');
   expect(appendDeleteBtn(tr, 'Laura')).toEqual('Laura');
})
afterEach(function() {
  billAmtInput.value = '';
  tipAmtInput.value = '';
  paymentTbody.innerHTML = '';
  serverTbody.innerHTML = '';
  paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
 
});
});