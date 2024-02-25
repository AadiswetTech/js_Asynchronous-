 

 function userInfo (username,logginCount,isLoggedIn)
 {
    this.username=username;
    this.logginCount=logginCount;
    this.isLoggedIn=isLoggedIn;
    return this
 }

const user1= new userInfo("shubham",4,true)
console.log(user1);

const user2=new userInfo("sachin",5,false)
console.log(user2)
const user3=new userInfo("sadia",6,false)
console.log(user3)
