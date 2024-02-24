
 function fetchDataCallback(callback)
 {
   fetch("https://course-api.com/react-store-products").
   
  //  1st callback
   then(response=>
   {
    if(!response.ok)
    {
       throw new Error("could not fetch") 
    }
    return response.json()
   })
  //  second cllback for response body
   .then(data=>
    {
      callback(null,data)  
    })
    .catch(error=>
        {
          callback(error,null)  
        })
 }

 fetchDataCallback ((error,data)=>
 {
     if(error)
     {
         console.error('Error',error)
     }
     else{
         console.log(data);
     }
 })
