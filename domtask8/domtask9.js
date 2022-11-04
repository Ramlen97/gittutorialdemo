var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

let i=0;
while(itemList.children[i]!=null){
    let editBtn=document.createElement('button');
    editBtn.className='btn  btn-sm float-right ';
    editBtn.append(document.createTextNode('Edit'));
    itemList.children[i].appendChild(editBtn);
    i++;
}

var newInput=document.createElement('input');
newInput.setAttribute('type','text');
newInput.className='form-control mr-2';
newInput.id='itemdescription';

form.insertBefore(newInput,form.children[1]);

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    var item=document.getElementById('item').value;
    var itemDescription=document.getElementById('itemdescription').value;

    var newItem=document.createElement('li');
    newItem.className='list-group-item';
    newItem.appendChild(document.createTextNode(item));
    newItem.appendChild(document.createTextNode(' '));
    newItem.appendChild(document.createTextNode(itemDescription));

    var deleteBtn=document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.append(document.createTextNode('X'));
    newItem.append(deleteBtn);

    var editBtn=document.createElement('button')
    editBtn.className='btn  btn-sm float-right ';
    editBtn.append(document.createTextNode('Edit'));
    newItem.append(editBtn);    
    
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

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=document.getElementsByTagName('li');
    Array.from(items).forEach(element => {
        itemName=element.childNodes[0].textContent+element.childNodes[2].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            element.style.display='block';
        }else{
            element.style.display='none';
        }
        });
}