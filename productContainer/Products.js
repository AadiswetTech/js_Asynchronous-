async function fetchProductData() {
    try {
      const response = await fetch('https://course-api.com/react-store-products');
      const data = await response.json();
  
      const productCardsContainer = document.getElementById('product-cards');
  
      // Clear existing cards before adding new ones
      productCardsContainer.innerHTML = '';
  
      data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
  
        const productImage = document.createElement('img');
        productImage.src = product.image; // Assuming the API provides an "image" property
        productCard.appendChild(productImage);
  
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productCard.appendChild(productName);
  
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productCard.appendChild(productPrice);
  
        productCardsContainer.appendChild(productCard);
      });
    } catch (error) {
      console.error('Error fetching API data:', error);

    }
  }
  
  fetchProductData();

