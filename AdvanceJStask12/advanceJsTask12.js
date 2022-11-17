console.log('Hello');

// 'this' inside global space

this.table='window table';
// console.log(this.table);

this.garbage={
    table:'garbage table',
    // cleanTable(){
        // console.log(`cleaning ${this.table}`);
    // }
}
// console.log(this.garbage.table);

// 'this' inside an object

// let johnsRoom={
//     table:'johns table'
// }

// console.log(this.johnson.table)

// 'this' inside a method

let johnsRoom={
    table:'johns table',
    // cleanTable(){
        // console.log(`cleaning ${this.table}`);
    // }
}
// johnsRoom.cleanTable();
// this.garbage.cleanTable();

// 'this' inside a function (using call function):

// const cleanTable= function(soap){
//     console.log(`cleaning ${this.table} with ${soap}`);
// }
// cleanTable.call(this,'some soap');
// cleanTable.call(this.garbage,'some soap');
// cleanTable.call(johnsRoom,'some soap');

// 'this' inside inner function:

const cleanTable= function(soap){
        const innerfunction=(_soap) =>{
            console.log(`cleaning ${this.table} with ${_soap}`);
        }
        innerfunction(soap);    
}

cleanTable.call(this,'some soap');
cleanTable.call(this.garbage,'some soap');
cleanTable.call(johnsRoom,'some soap');

// 'this' inside a constructor:

let createRoom=function(name){
    this.table=`${name}s table`;
}

createRoom.prototype.cleanTable=function(soap){
    console.log(`cleaning ${this.table} with ${soap}`);
}

let jhill=new createRoom('jhill');
jhill.cleanTable('some soap');

// 'this' inside a class:

class create_Room{
    constructor(name){
        this.table=`${name}s table`;
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} with${soap}`);
    }
}

let philip=new create_Room('philip');
philip.cleanTable('some soap');

//Fat Arrow function :

let square = a => a*a;
console.log(square(2));

const a=1;
let obj=()=> a;
console.log(obj());

let multiply = (x,y) => {return x*y};
console.log(multiply(5,6));

var x = function(){
    this.val=2;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1);

}
var xx= new x();

// Arguments in fat arrow function can only be accessed with (...n)

var arg=(...n) => {
    console.log(n[0]);
}

arg(1,2,3);

// Student class :

class Student{
    static studentCount=0;

    constructor(name,age,phoneNumber,boardMarks){
        this.name=name;
        this.age=age;
        this.number=phoneNumber;
        this.marks=boardMarks;
        Student.studentCount++;
    }
    isEligibleForCollege(){
        if (this.marks>40) console.log('He is eligible');
        else console.log('He is not eligible');
    }

    eligibleForPlacements(minimumBoardMarks){
        return (minimumAge)=>{
            if (this.age>minimumAge && this.marks>minimumBoardMarks){
                console.log(this.name,'is eligible to sit for placement');
            }else{
                console.log(this.name,'is not eligible to sit for placement');
            }
        }
    }
}

const ajay=new Student('Ajay',25,9895487654,70);
const vijay=new Student('Vijay',22,9815887654,40);
const sandeep=new Student('Sandeep',21,9781287654,78);
const saif =new Student('Saif',19,9891237654,52);
const sanjay=new Student('Sanjay',22,8521087654,38);

ajay.eligibleForPlacements(40)(21);
vijay.eligibleForPlacements(40)(21);
sandeep.eligibleForPlacements(40)(21);
saif.eligibleForPlacements(40)(21);
sanjay.eligibleForPlacements(40)(21);