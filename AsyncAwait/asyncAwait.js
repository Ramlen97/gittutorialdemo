console.log('Hello AsyncAwait');

console.log('person1: shows ticket');
console.log('person2: shows ticket');

// const getPopcorn=wifeBringingTicket.then((t)=>{
//     console.log('wife: I have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife : I am hungry');
//     return new Promise((resolve,reject)=>{
//         resolve('ticket popcorn');
//     });
// });

// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: I have got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife : I want butter on my popcorn');
//     return new Promise((resolve, reject) => {
//         resolve('ticket butter');
//     })    
// })

// getButter.then(t=>console.log(t));

const premovie=async()=>{
    const wifeBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('tickets'),300);
    });
    
    const getPopcorn=new Promise((resolve, reject) => resolve('popcorn'));

    const getButter=new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks=new Promise((resolve, reject) => resolve('cold drinks') );

    let ticket= await wifeBringingTicket;

    let [popcorn,butter,coldDrink]=await Promise.all([getPopcorn,getButter,getColdDrinks]);

    console.log(popcorn,butter,coldDrink);
    return ticket;
};

premovie().then(m=>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

function buycar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('buy a car');
        }, 3000);
    })    
}

function planmanalitrip(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Met with an accident');
        }, 2000);
    })
    
}

function reachedmanali(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('reached manali');
        }, 1000);
    })
    
}

function gotomountain(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Met with an accident');        
        }, 500);
    })    
}

const manalitrip=async()=>{

    try {
        const msg=await buycar();
        console.log(msg);

        const msg1=await planmanalitrip();
        console.log(msg1);

        const msg2=await reachedmanali();
        console.log(msg2);

        const msg3=await gotomountain();
        console.log(msg3);
        
    } catch (err){
        console.log(err);
    }     
}

manalitrip();

// buycar()
// .then(r=>{
//     console.log(r);
//     return planmanalitrip();
// })
// .then(r=>{
//     console.log(r);
//     return reachedmanali();
// })
// .then(r=>{
//     console.log(r);
//     return gotomountain();
// })
// .then(r=>console.log(r))
// .catch(e=>console.log(e));
