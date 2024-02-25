class User 
{
   constructor(username,email,password)
   {
    this.username=username
    this.email=email
    this.password=password
   } 
    encryptPassword()
   {
    return `12m${this.password}ab`
   }
}
const user1=new User ("shubham","shubham23@gmail.com","shubham");

console.log(user1);

console.log(user1.encryptPassword())