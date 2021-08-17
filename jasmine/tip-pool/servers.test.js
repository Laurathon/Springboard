describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let tableData = document.querySelectorAll('#serverTable tbody tr td');
    expect(tableData[0].innerText).toEqual('Alice');
    expect(tableData[1].innerText).toEqual('$0.00');   
    
  });

  afterEach(function() {
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
