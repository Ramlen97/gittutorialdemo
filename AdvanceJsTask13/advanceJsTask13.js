console.log('Hello Task 13');

function gettingClicked(){
    let count=1;
    document.getElementById('clickMe').addEventListener('click',()=>{
        console.log('Clicked Me',count++);
    })
}
gettingClicked();
console.log('a');

addEventListener('DOMContentLoaded',()=>{
    console.log('DOM has loaded');
})

