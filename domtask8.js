var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    var item=document.getElementById('item').value;
    var newItem=document.createElement('li');
    newItem.className='list-group-item';
    newItem.append(document.createTextNode(item));
    console.log(newItem);
}
