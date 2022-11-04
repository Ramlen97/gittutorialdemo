var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    var item=document.getElementById('item').value;

    var newItem=document.createElement('li');
    newItem.className='list-group-item';
    newItem.append(document.createTextNode(item));

    editBtn=document.createElement('button');
    editBtn.className='btn btn-sm float-right';
    editBtn.append(document.createTextNode('Edit'));
    newItem.append(editBtn);

    deleteBtn=document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.append(document.createTextNode('X'));
    newItem.append(deleteBtn);

    itemList.append(newItem);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

