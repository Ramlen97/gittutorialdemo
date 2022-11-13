let printFullName = function (hometown,state){
    console.log(this.firstName,this.lastName,'from',hometown+',',state);
}

let name={
    firstName:'Rameshwar',
    lastName:'Lenka',
}

printFullName.call(name,'Mumbai','Maharashtra');

arr=['Mumbai','Maharashtra'];

printFullName.apply(name,arr);

let printName=printFullName.bind(name,'Mumbai','Maharashtra');
printName();

let printAge = function(){
    console.log(this.age);
}

let student={age:20};

printAge.call(student);

function multiplyTwoNumbers(x,y){
    console.log(x*y);
}

multiplyByTwo = multiplyTwoNumbers.bind(this,2);
multiplyByThree=multiplyTwoNumbers.bind(this,3);
multiplyByThree(5);
multiplyByTwo(5);

multiply=function(x){
    return function (y){
        console.log(x*y);
    }
}

multiplyToTwo=multiply(2);
multiplyToThree=multiply(3);
multiplyToThree(5);
multiplyToTwo(5);

