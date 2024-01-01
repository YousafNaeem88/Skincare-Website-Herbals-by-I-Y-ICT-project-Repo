// JavaScript functionality for product page image slideshow
const menProducts = document.querySelector('.men-products');
const womenProducts = document.querySelector('.women-products');

function displayProductImage(products, images) {
  products.addEventListener('click', function(event) {
    const targetProduct = event.target.getAttribute('data-product');
    if (targetProduct) {
      const productImage = images[targetProduct];
      if (productImage) {
        products.style.backgroundImage = `url('${productImage}')`;
      }
    }
  });
}

// Define product images for men and women
const menImages = {
  'Serums': 'product1.jpeg',
  'Beard Oil': 'product2.jpeg',
  'Sunblock': 'product3.jpeg',
  'Moisturizer': 'product4.jpeg'
};

const womenImages = {
  'Serums': 'product5.jpeg',
  'Herbal Shampoo': 'product6.jpeg',
  'Conditioner': 'product7.jpeg',
  'Acne Facewash': 'product8.jpeg'
};

// Display product images when clicked for men and women
displayProductImage(menProducts, menImages);
displayProductImage(womenProducts, womenImages);
