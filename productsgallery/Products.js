async function fetchProductData()
{
  try
  {
   const response= await fetch('https://course-api.com/react-store-products');
   const data=await response.json();

   const productCardsContainer=document.getElementById('product-cards');
   productCardsContainer.innerHTML = '';
   data.forEach((product=>
    {
      const productCard=document.createElement('div');
      productCard.classList.add('product-card');

      //image
      const productImage=document.createElement('img');
      productImage.src=product.image;
      productCard.appendChild(productImage);

      //name
      const productName=document.createElement('h3');
      productName.textContent=product.name;
      productCard.appendChild(productName);

      //price
      const productPrice=document.createElement('p');
      productPrice.textContent=product.price;
      productCard.appendChild(productPrice)
   
      //add desciption
      productCardsContainer.appendChild(productCard)
    }))

  }
  catch (error)
  {
    console.log('error fetching data',error)
  }   
}



fetchProductData()
