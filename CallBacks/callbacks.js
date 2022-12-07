console.log('Hello Callbacks');

const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
]
let intervalId;
function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(() => {
        let output='';
        for (let i of posts){
            output+=`<li>${i.title} last edited ${Math.floor((new Date().getTime()-i.createdAt)/1000)} seconds ago </li>`;
        }
        document.body.innerHTML=output;
        console.log('interval id is =',intervalId);
    }, 1000);
}


function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    }, 2000);    
}

createPost({title:'Post Three',body:'This is post three'},getPosts);

function create4thPost(post,callback){
    callback(post,getPosts);
}

create4thPost({title:'Post Four',body:'This is post four'},createPost);













