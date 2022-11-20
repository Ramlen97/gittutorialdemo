console.log('Hello Expense Tracker');

document.addEventListener('DOMContentLoaded',()=>{
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i);
        obj=JSON.parse(localStorage.getItem(key));
        showExpense(obj);
    }
    
})

function storeExpense(e){
    e.preventDefault();
    let amount=document.getElementById('amount').value;
    let description=document.getElementById('description').value;
    let category=document.getElementById('category').value;
    if (localStorage.getItem(`${description}-${amount}`)===null){
        let obj={
            amount:amount,
            description:description,
            category:category
        }
    
        localStorage.setItem(`${description}-${amount}`,JSON.stringify(obj));
        showExpense(obj);
    }
     
    document.getElementById('amount').value='';
    document.getElementById('description').value='';
    document.getElementById('category').value='';
}

function showExpense(obj){
    let ul=document.querySelector('ul');
    ul.innerHTML+=`<li id=${obj.description}-${obj.amount}>${obj.amount} - ${obj.description} - ${obj.category} <button onclick="deleteExpense('${obj.description}-${obj.amount}')">Delete Expense</button><button onclick="editExpense(${obj.amount},'${obj.description}','${obj.category}')">Edit Expense</button></li>`
}

function deleteExpense(obj){
    node=document.getElementById(obj);
    parentNode=node.parentNode;
    parentNode.removeChild(node);
    localStorage.removeItem(obj);
}

function editExpense(amount,description,category){
    document.getElementById('amount').value=amount;
    document.getElementById('description').value=description;
    document.getElementById('category').value=category;
}