// Write your code here!
document.body.removeChild(document.body.querySelector('main'));
let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "YOUR-NAME is the champion";