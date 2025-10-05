// Auto assign images to products dynamically
const productImages = {
  watch: './images/watch.jpg',
  bag: './images/bag.webp',
  dress: './images/dress.webp',
  jewellery: './images/earning.jpg',
  electronics: './images/electronic.jpg',
  grocery: './images/growssary.webp',
  makeup: './images/makeup.jpeg',
  shoe: './images/shoe.png',
  stationery: './images/station.jpg',
};

// Example product data
const products = [
  { name: 'Golden Watch', category: 'watch', price: '$120' },
  { name: 'Printed Dress', category: 'dress', price: '$60' },
  { name: 'Leather Bag', category: 'bag', price: '$80' },
  { name: 'Earrings', category: 'jewellery', price: '$40' },
  { name: 'Laptop', category: 'electronics', price: '$900' },
  { name: 'Face Cream', category: 'makeup', price: '$25' },
  { name: 'Running Shoes', category: 'shoe', price: '$100' },
  { name: 'Notebook Set', category: 'stationery', price: '$15' },
  { name: 'Organic Banana', category: 'grocery', price: '$3' },
];

const grid = document.getElementById('productGrid');
if (grid) {
  products.forEach((p) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${productImages[p.category] || './images/default.jpg'}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button class="btn">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}
