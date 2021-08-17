describe("Payments Test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 50;
    tipAmtInput.value = 20;
   
   });

   it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    //expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('50');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(40);
  });

  //it('should add to the payment table on appendPaymentTable()', function () {
   // appendPaymentTable();

     //   expect(allServers['server' + serverId].serverName).toEqual('Alice');
 // });

  it('should create a payment on createCurPayment()', function(){
      let payment ={
        billAmt: '50',
        tipAmt: '20',
        tipPercent: 40
      }
      expect(createCurPayment()).toEqual(payment);
  })

  it('should create a table row element with calculated sum of all payment', function(){
    let paymentTotal = '100';
    let numberOfPayments = '';
      updateSummary();
      expect(summaryTds[2].innerHTML).toEqual('0%');
  })

 
  afterEach(function() {
    serverTbody.innerHTML = '';
    billAmtInput.value = '';
    tipAmtInput.value = '';
    summaryTds[2].innerHTML ='';
    paymentTbody.innerHTML = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
