//function addnumbers(){
     //var one=parseINt(document.getElementById("value1").value);
     //var two=parseINt(document.getElementById("value2").value);
     //var adds=document.getElementById("answer");
     //adds.value= one+ two;
    
      
    //  var n=(document.getElementById("value1").value);
    //  var s=(document.getElementById("value2").value);
  
     
     
    //  if(isNaN(n)||isNaN(s)){
    //        alert('enter a number')
    //     }else{
    //     var add=document.getElementById("answer");
    //    add.value=parseInt(n)+parseInt(s);
    //  }
    //  }
    /*******************callback functon***************** */
/*A callback is a function that is to be executed after another function 
has finished executing-hence the name 'call back'. more
cp*/
function show()
{
  console.log('hello java script')
}

function anotherfunction(callback){
  callback();
}
anotherfunction(show);//calling function
/********function has a constructor********** object Types (Blueprints) (Classes) 
 The regular {...} synatx allows to create one object.
 But often we need to create many similar objects, like multiple users or menu items and so on/

That can be done using constructor functions and the "new" opeator.

sometimes we need a "blueprint" for
creating */
function user(name, age,company, salary){
  this.name=name;
  this.age=age;
  this.company=company;
  this.salary=salary;
}
let user1=new user("manu",20,"qspiders",3000);
console.log(user1);

/**********ARRAY METHODS*******/
var lang=["java","python","ruby"];
//lang.pop();//it removes the last element from an array and returns it
//console.log(lang);
//lang.shift();//it delets first element in the array
//lang.push("java");//push method is adding new elemet to array an returns the new length of the array
//lang.unshift("c")//it inserst new element at the start of the array
/*lang.splice(1,1);/*Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.*/
//lang.splice(1,0,"react")//if there is one parameter than it will delete remaining all 
//**foreach***/
/*The forEach method executes a provided 
function once for each array element

syntax 
arr.forEach(callback(currentvalue [,index [,array]])[,thisArg]);

foreach() calls a provide callback function once for each
element in an array in asecending order. it is not invoked for index 
properties that have been deleted or are unintialized

callback is invoked with three arguments:

the value of the element

the index of the element

the array of the element
lang.forEach(function ( value,index,array){
  console.log(`${index}:${value}`)
})//it will accept upto three arguments to iterate each and every method  forEach(value,index,array) if the array as a function we need to call callback function
console.log(lang)*/
 var employees=[
   { emp_id:301,
     emp_name:"kiran",
     emp_age:20,
     emp_gender:'male',
     emp_company:30000,
     emp_designation:"web developer",
     emp_doj:new Date('2015/05/05'),
     emp_location:"mandya",
     emp_education:"BE",
     emp_photo:'https://image.shutterstock.com/image-photo/side-view-male-blogger-browsing-600w-1027895221.jpg',
   },
    

   { emp_id:100,
     emp_name:"vishala",
   emp_age:20,
   emp_gender:'female',
   emp_company:30000,
   emp_designation:"web developer",
   emp_doj:new Date('2015/05/05'),
   emp_location:"mandya",
   emp_education:"BE",
   emp_photo:'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg',},
   
   { 
     emp_id:101,
    emp_name:"pratheep",
   emp_age:20,
   emp_gender:'male',
   emp_company:30000,
   emp_designation:"web developer",
   emp_doj:new Date('2015/05/05'),
   emp_location:"mandya",
   emp_education:"BE",
   emp_photo:'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg',},
   
   { 
     emp_id:201,
    emp_name:"shipla",
   emp_age:20,
   emp_gender:'female',
   emp_company:30000,
   emp_designation:"web developer",
   emp_doj:new Date('2015/05/05'),
   emp_location:"mandya",
   emp_education:"BE",
   emp_photo:'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg',}
 ]
 var emp=[];
 employees.forEach(empdata=>{
     emp.push(
    `<div class="container">
    <div class="card">
    <img src="${empdata.emp_photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${empdata.emp_name}</h5><br>
      <span class="badge badge-success float-right">${empdata.emp_id}</span><br>
      <hr class="hr">
      <span class="badge badge-primary float-left">${empdata.emp_designation}</span><br>
      <li class="list-group-item">company:${empdata.emp_company}</li>
      <li class="list-group-item">location:${empdata.emp_location}</li>
      <li class="list-group-item">education:${empdata.emp_education}</li>
      <li class="list-group-item">designation:${empdata.emp_designation}</li>
      <li class="list-group-item">gender:${empdata.emp_gender}</li>
      <li class="list-group-item">date_of_joining:${empdata.emp_doj.toString()}</li>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>`);

 });
 document.getElementById('template').innerHTML=emp;

 var names=["manu","anu","kiran","varun"];
 var namesort=names.sort();//sort method works only for string not for number
 var test=names.reverse();

 var num=[10,20,30,40,50];//sorting number function have to called by callback method
 var numsort=num.sort(function(a,b){
   return b-a;
 });

 
 console.log(numsort);
 console.log(namesort);

 //REVERSE A STRING(without function)
 var str="hello world";
 var stringrev=[...str].reverse().join("");
 console.log(stringrev);
//REVERSE STRING WITH FUNCTION
 function username1(str){
   return [...str].reverse().join();
 }
 console.log(username1("kiran"));


