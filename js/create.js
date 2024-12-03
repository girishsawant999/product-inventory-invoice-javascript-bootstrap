document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const newProduct = {
    category: document.getElementById("category").value,
    name: document.getElementById("productName").value,
    brand: document.getElementById("brandName").value,
    modelName: document.getElementById("modelName").value,
    modelNumber: document.getElementById("modelNumber").value,
    uom: document.getElementById("uom").value,
    warranty: document.getElementById("warranty").value,
    price: parseFloat(document.getElementById("price").value),
    gst: parseFloat(document.getElementById("gst").value),
  };

  // Add the new product to the array
  products.push(newProduct);

  // Save to local storage
  saveProducts();

  // Redirect to product list page
  window.location.href = "list.html";
});
