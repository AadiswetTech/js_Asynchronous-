
//if we  directly try to access username in above function 
// //local mermory me isko pta hi nhi kha se lena hai username to ye point karega curent context me


// const bill={
//     category:"grocery",
//     name:"detergent",
//     price:50,
//     quantity:4,
//     total:function()
//     {
//        console.log(this.price * this.quantity) 
//     }
// }

// console.log(bill.total())

// const bill={
//     category:"grocery",
//     item:"detergent",
//     price:40,
//     quantity:4,
//     totalBill:function()
//     {
//        console.log(price*quantity) 
//     }
// }

// console.log(bill.totalBill())

const bill2=
{
    category:"grocery",
    item:"beverage",
    price:80,
    quantity:3,
    totalBill:()=>
    {
        console.log(`${this.item}`)
    }
}
bill2.totalBill()

// console.log(this)


//constructor function


function userInfo(username,email,isLoggedIn)
{
  this.username=username;
  this.email=email;
  this.isLoggedIn=isLoggedIn;
  return this;  
}

const userOne=new userInfo("akshat","devakr@gmail.com",true);
console.log(userOne.constructor)
const userTwo=new  userInfo("shubham","deshubham@gmail.com",false);
console.log(userTwo)