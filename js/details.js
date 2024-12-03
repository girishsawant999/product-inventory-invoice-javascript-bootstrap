// Load selected product
const selectedIndex = localStorage.getItem("selectedProductIndex");

if (selectedIndex !== null) {
  const product = products[selectedIndex];

  // Populate product details
  document.body.innerHTML = `
        <div class="d-flex flex-column p-4">
            <h2>Product Details</h2>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Model Name:</strong> ${product.modelName}</p>
            <p><strong>Model Number:</strong> ${product.modelNumber}</p>
            <p><strong>UOM:</strong> ${product.uom}</p>
            <p><strong>Warranty:</strong> ${product.warranty}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>GST Percentage:</strong> ${product.gst}</p>
            <button class="btn btn-secondary" onclick="goBack()">Back to List</button>
        </div>
    `;
}

// Navigate back to the product list
const goBack = () => {
  window.location.href = "list.html";
};
