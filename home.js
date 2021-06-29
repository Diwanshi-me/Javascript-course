console.log('hello');
//alert('hello this is d');
//variables
var b='smoothy';
console.log(b);
var someNumber=45;
console.log(someNumber);

//change html with js
document.getElementById('someText').innerHTML="Heyyyyy";

//var age=prompt('What is your age?');
//document.getElementById('someText').innerHTML=age;

//numbers in js
var num1=50;

//var num2=5.6;
console.log(5*10);
console.log(50/10);

//increment decrement
num1++;
console.log(num1);
num1--;
console.log(num1);

//div,mul,remainders
console.log(num1%5);
console.log(num1/4);

//increment decrement by any number
num1+=10;
console.log(num1);

//functions steps 1.create 2.call 
function fun()
{
    console.log('this is a function');
}
//fun();
/*function that takes your name and says hello followed by name*/
function namee()
{
    var na=prompt('what is your name');
    console.log('hello '+na);
}
//namee();

//functions with arguments
function add(a ,b )
{
    console.log(a+b);
}
//add('hello ','qazi');

//loops
/*while loops
var n=20;
while(n<100)
{
    n+=1;
    console.log(n);
}*/

/*for looop
for(let no=0;no<10;no++)
{
    console.log(no);
}*/

//datatypes
let agee=18;//number
let nameee='non';//string
let nameeee={first:'jane',last:'Doe'};//object
let truth=false;//boolean
let groceries=['apple','banana','orange'];//array
let random;//undefined
let nothing=null;//null value

//string methods
let stringg='banana';
let more='banana\nappple';
console.log(more);
console.log(stringg.length);//counts overall length
console.log(stringg.indexOf('q'));//find something and its index
console.log(stringg.indexOf('nan'));//find something and its index
console.log(stringg.slice(2,6));
console.log(stringg.replace('ban','123'));
console.log(stringg.toUpperCase());
console.log(stringg.toLowerCase());
console.log(stringg.charAt(2));
console.log(stringg[2]);
console.log(stringg.split(''));//split

//array
let aaa=['a','b','c','d','e'];
let aa=new Array('a','b','c','d','e');
//alert(aa[1]);//access value at index 1

aa[0]='pear';
console.log(aa);

for(let i=0;i<aa.length;i++)
{
    console.log(aa[i]);
}

//array common methods
console.log('to string',aa.toString());
console.log(aa.join(' - '));
console.log(aa.pop(),aa);
console.log(aa.push('e'),aa);
aa[aa.length]='f';
console.log(aa);

aa.shift();//remove first element of list
console.log(aa);
aa.unshift('first');
console.log(aa);

let veg=['aa','aaa','aaaa'];
 //combine two arrays
let com=aa.concat(veg);
console.log(com);
console.log(com.slice(1,4));
console.log(com.reverse());
//sort
console.log(com.sort());
//sort descending
let arr=[1,65,77,0,987,6666,75,23];
console.log(arr.sort(function(a,b){return b-a;}));
//sort ascending
arr=[1,65,77,0,987,6666,75,23];
console.log(arr.sort(function(a,b){return a-b;}));

let emptyarray=new Array();
for(let i=0;i<5;i++)
{
    emptyarray.push(i);
}
console.log(emptyarray);

//objects in JS
//dictionaries

let student={
    first:'rahe',
    last:'razi',
    age:25,
    height:580,
    studentinfo: function()
    {
        return this.first +" is " + this.age;
    }
};
/*console.log(student.first);
console.log(student.last);
console.log(student.height);
console.log(student.age);*/

//change
student.age=90;
console.log(student.age);
console.log(student.studentinfo());

//conditionals , control flows if else
//let doesnt work with prompt
/*let age=prompt('what is your age');
if((age>=18)&&(age<=35))
{
    status="target";
}
else
{
    status="non-target";
}
console.log(status);*/

//switch statement
let day=2;
switch(day)
{
    case 0:
        text='weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';
        break;
}
console.log(text);