class User
{
constructor(username)
{
    this.username=username
}
logMe()
{
    console.log(`username is ${this.username}`)
}
}
class Teacher extends User 
{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password
    }
addCourse()
{
    console.log(`a new course added by ${this.username}`)
}    
}
const teacher1=new Teacher ("akshat","akshatm196@gmail.com","123as")
console.log(teacher1)
teacher1.addCourse()