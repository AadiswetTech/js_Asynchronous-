// const body=document.body;
// const btn=document.querySelector('button')
// const colorInterval=setInterval(()=>
// {
//     const red=Math.floor(Math.random()*126);
//     const blue=Math.floor(Math.random()*126);
//     const green=Math.floor(Math.random()*126);
//     const rgb=`rgb(${red},${blue}, ${green})`

//     body.style.backgroundColor=rgb

// },1000)

// btn.addEventListener("click",()=>
// {
//     clearInterval(colorInterval);
//     btn.textContent=body.style.backgroundColor;
// })



// console.log(Math.random()*10)

// console.log("first text");
// setTimeout(()=>
// {
// console.log("text2")
// },2000);
// console.log("text 3")

//  function myFunc1 ()
//  {
//    console.log("doing task1")  
//  }

 function myFunc2()
 {
    console.log("doing task2")
 }

 //callback function ==callback function is a function which run after another function has finished execution 

 //here im providing a callback to the parameter and passing myfunc2 as argument
 function myFunc(callback)
 {
  console.log("doing task 1");
  callback();
 }
 myFunc(myFunc2);

 //function to add a number 

 //this function will invoke the function onSuccess after checking the type condition
 //and then addTwoNumber will be execute after checking
 function getTwoAndAdd(number1,number2,onSuccess,onFailure)
 {
     if(typeof number1 ==='number' && typeof number2 ==="number")
     {
        onSuccess(number1,number2)
     }
     else
     {
       onFailure()  
     }
 }

 function addTwoNumbers(num1,num2)
 {
    console.log(num1+num2)
 }
 function onFail()
 {
    console.log("wrong type")
 }
 getTwoAndAdd(4,3,addTwoNumbers,onFail)


//  const sum=(num1,num2=>
//  {
//     return num1+num2
//  })


 function sumNum(num1,num2)
 {
    return num1+num2
 }
 let a=12;
 let b=13;
 
 console.log(sumNum(a,b))


//  function Add(a,b,callback)
//  {
//    callback()
//  }
//  function Sum()
//  {
//    console.log(a+b) 
//  }
//  Add(3,4,Sum)