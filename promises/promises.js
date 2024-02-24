//promise has 3 state reolve reject and pending


// const promise1=new Promise(function (resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log("Asynchronous task")
//         resolve()
//     },2000)

// })
// promise1.then(function ()
// {
//     console.log("promise resolved")
// })

//  new Promise((res,rej)=>
//  {
//    setTimeout(()=>
//    {
//     console.log("async task")
//     res()
//    },1000)
//  }).then(()=>
//  {
//     console.log("promise resolved")
//  })


 function fetchDataPromise()
 {
  return new Promise((resolve,reject)=>
  {
   fetch("https://course-api.com/react-store-products")
   .then(response=>
    {
        if(!response.ok)
        {
            throw new Error("not resolved")
        }
        return response.json() //.json() parse the reponse body as javascript object notation
    }).then(data=>
        {
           resolve(data) 
        })
        .catch(error=>
            {
               reject(error) 
            })
  })  
 }

 fetchDataPromise().then(data=>
    {
        console.log(data)
    })
    .catch(error=>
        {
        console.log(error) 
        })