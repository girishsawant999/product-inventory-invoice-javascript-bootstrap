document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productSelect");
  const quantityInput = document.getElementById("quantity");
  const priceInput = document.getElementById("price");
  const gstInput = document.getElementById("gst");
  const totalPriceInput = document.getElementById("totalPrice");

  // Populate product options
  products.forEach((product, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${product.name} (${product.modelName})`;
    productSelect.appendChild(option);
  });

  // Handle product selection
  productSelect.addEventListener("change", function () {
    const selectedProduct = products[this.value];
    document.getElementById("productCategory").value = selectedProduct.category;
    document.getElementById("productName").value = selectedProduct.name;
    document.getElementById("brandName").value = selectedProduct.brandName;
    document.getElementById("modelName").value = selectedProduct.modelName;
    document.getElementById("modelNumber").value = selectedProduct.modelNumber;
    document.getElementById("uom").value = selectedProduct.uom;
    document.getElementById("warranty").value = selectedProduct.warranty;
    priceInput.value = selectedProduct.price;
    gstInput.value = selectedProduct.gst;
    updateTotalPrice();
  });

  // Handle quantity change
  quantityInput.addEventListener("input", updateTotalPrice);

  function updateTotalPrice() {
    const quantity = parseFloat(quantityInput.value) || 0;
    const price = parseFloat(priceInput.value) || 0;
    const gst = parseFloat(gstInput.value) || 0;
    const totalPrice = (price + (price * gst) / 100) * quantity;
    totalPriceInput.value = totalPrice.toFixed(2);
  }

  // Handle form submission
  document
    .getElementById("invoiceForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const customerName = document.getElementById("customerName").value;
      const productIndex = document.getElementById("productSelect").value;
      const quantity = document.getElementById("quantity").value;

      const selectedProduct = products[productIndex];

      const newInvoice = {
        customerName,
        product: selectedProduct,
        quantity,
        totalPrice: parseFloat(totalPriceInput.value),
        date: new Date().toLocaleDateString(),
      };

      // Add the new invoice to the array
      invoices.push(newInvoice);

      // Save to local storage
      saveInvoices();

      // Redirect to product list page
      window.location.href = "list.html";
    });
});
