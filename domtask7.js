var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1'

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4'

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className='hello';
newDiv.id='hello2';
newDiv.setAttribute('title','Hello Div');

var newdivText=document.createTextNode('Hello World');
newDiv.appendChild(newdivText);
console.log(newDiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var ul=document.querySelector('.list-group');
var item1=document.querySelector('.list-group-item');

var newli=document.createElement('li');
newli.className='list-group-item';
var newliText=document.createTextNode('Hello World');
newli.appendChild(newliText);
console.log(newli);

ul.insertBefore(newli,item1);






 