alert('Hello World');
console.error('This is an error');
console.warn('This is a warning');

//var , let ,const 
//String , Numbers ,boolean, unfefined
const namex='Lina';
const age=30;
const isCool=true;
const x=null;
const y= undefined;
let z ;
console.log(typeof isCool);
console.log('My name is'+  namex +'and I am age' + age);
const s="Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0 , 5).toUpperCase);
console.log(s.split(''));
const  y1 ="technology, computers, it";
console.log(', ');

//Arrays
const numbers= new Array(1,2,3,4,5);
console.log(numbers);

const fruits =['apples','oranges' ,'pears'];
console.log(fruits[1]);
console.log(fruits);
fruits[3]= 'grapes';
console.log(fruits);
fruits.push('mangos');
fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));


const person = {
    firstname :'lina',
    lastname : 'Doe',
    age:30,
    hobbies:['music' , 'movies' ,'sports'],
    adress:{
        street: ' 50 main st',
        city:'Boston',
        state:'wo'
    }
    }
console.log(person);
console.log(person.firstname);

const { firstname, lastname}=person
console.log(firstname);
person.email='lina@gmail.com';


const todos = [
    {
    id :1,
    text:'Take out trash',  
    isCompleted:false  
    },
    {
      id :2,
    text:'Meeting with boss', 
    isCompleted:true   
     }, 
     {
      id :3,
     text:'Dentist apptTake out tras',    
     isCompleted:true
    }
]
console.log(todos[1].text);

const todoJson =JSON.stringify(todos);
console.log(todoJson);

//for
for(let i=0; i<10; i++){
    console.log(i);
    console.log(`For loop Number :${i}`);
}
//while
let i=0;
while(i<10){
    console.log(`while loop number${i}`);
    i++;
}
    
for(let todo of todos){
    console.log(todo.text);
}

todos.forEach(function (todo){
console.log(todo.text);
});

const todotext =todos.map(function (todo){
   return todo.text ;
});
console.log(todotext);
const todotext1 =todos.filter(function (todo){
    return todo.isCompleted===true ;
 }).map(function(todo){return todo.text});
 console.log(todotext1);

 const m = '10';
 const n = 4;
 if(m == 10 || n>5){
    console.log('m is 10');
 }
 if(m === 10){
    console.log('m is 10');
 }
 else{
     console.log('m is not 10');
 }


///////
const rm=11;
const color =rm>10 ?'red': 'blue';
console.log(color);

switch(color){
    case 'red':
    console.log('color is red ');
    break;
    case 'blue':
        console.log('cplor is blue');
    default:
          console.log('color is not redor blue');
          break;
}
function addNums(num1 =1,num2=2){
    console.log(num1 +num2);
    return num1 + num2
}
const addNums1 =(num=1 ,num3=6) =>{
    return num + num3

}
const addNums3 =(num=1 ,num3=6) => console.log(num + num3);

const addNums4 =num  => num +5;

addNums(4,5);
console.log(addNums(5,5));
console.log(addNums1());


////constructor function
function Person(firstname,lastname, age){
 this.firstname =firstname;
 this.lastname=lastname;
 this.age=new Date(age);
 this.getBirthYear=function(){
     return this.age.getFullYear();
 }
 this.getFullName=function(){
    return `${this.firstname} ${this.lastname}`;
}

}
Person.prototype

const person1=new Person('lina','doe','4-3-2000');
const person2=new Person('Yaman','doe','4-3-2013');
console.log(person1);
console.log(person1.age);
console.log( person1.getBirthYear());
console.log( person1.getFullName());




