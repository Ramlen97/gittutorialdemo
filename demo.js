console.log('I love git');
const header=document.getElementById('main-header');
header.style.borderBottom="solid 3px #000";

const addItems=document.querySelector('.title');
console.log(addItems);
addItems.style.fontWeight='bold';
addItems.style.color='green';

const items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

for (let i of items){
    i.style.backgroundColor='#f4f4f4';
}

items[2].style.backgroundColor='green';

for (let i of items){
    i.style.fontWeight='bold';
}

const item=document.getElementsByTagName('li');
console.log(item);

for (let i of item){
    i.style.backgroundColor='#f4f4f4';
}