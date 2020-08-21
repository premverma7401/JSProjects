document.getElementById('single').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      const output = `<ul> <li> Author: ${customer.author}</li><li> Contributor: ${customer.contributor}</li></ul>`;
      document.getElementById('output1').innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
document.getElementById('multiple').addEventListener('click', loadCustomers);

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      let output = '';
      customer.forEach(function (custom) {
        output += `<ul> <li> Author: ${custom.author}</li><li> Contributor: ${custom.contributor}</li></ul>`;
      });

      document.getElementById('output2').innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
