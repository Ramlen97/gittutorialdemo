console.log('Hello Promises');

const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()},
]

function getPosts(){   
    setTimeout(()=>{
        let output='';
        for (let i of posts){
            output+=`<li>${i.title} last edited ${Math.floor((new Date().getTime()-i.createdAt)/1000)} seconds ago</li>`;
        }
        document.body.innerHTML=output;
    },2000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});

            const error=false;
            if (!error){
                return resolve(post);
            }else{
                return reject('Error : Something is wrong');
            }
        },1000)        
    })    
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.length>0){
                const lastPost=posts.pop();
                resolve(lastPost);
            }else{
                reject('Array is Empty now');
            }
        }, 1000);
    })
}

// createPost({title:'Post Three',body:'This is post three'})
// .then(()=>{
//     getPosts()
//     deletePost().then(()=>{
//         getPosts()
//         deletePost().then(()=>{
//             getPosts()
//             deletePost().then(()=>{
//                 getPosts()
//                 deletePost().then(()=>{})
//                 .catch(err=> console.log('Inside catch block',err))
//             }).catch(err => console.log(err))
//         }).catch(err => console.log(err))
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err)) ;

// createPost({title:'Post Four',body:'This is post four'})
// .then(()=>{
//     getPosts()
//     deletePost()
//     .then(getPosts)
//     .catch(err=>console.log(err))
// })
// .catch(err=>console.log(err))

// Promises.all

// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'Goodbye'));

// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));

updateLastUserActivityTime=new Promise((resolve,reject)=>{
    setTimeout(() => {
            userLastActivityTime=new Date().getTime();
            resolve(userLastActivityTime);            
        }, 1000);
    })

function userupdatesapost(post){
    Promise.all([createPost(post),updateLastUserActivityTime])
    .then(([resolve1,resolve2])=>{
        for(let i of posts){
            console.log(i);
        }
        console.log('User last activity time :',resolve2);
    })
    .catch(err=>console.log(err))
}

userupdatesapost({title:'Post Three',body:'This is post three'});
deletePost()
.then(()=>{
    for(let i of posts){
        console.log(i);
    }
}).catch(err=>console.log(err));
