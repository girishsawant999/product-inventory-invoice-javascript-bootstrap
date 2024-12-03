// Load products from local storage
const renderProducts = () => {
  const tableBody = document.getElementById("productTable");
  tableBody.innerHTML = "";

  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${product.category}</td>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>${product.modelName}</td>
            <td>${product.uom}</td>
            <td>${product.warranty}</td>
            <td>${product.price}</td>
            <td>${product.gst}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewDetails(${index})">View</button>
            </td>
        `;
    tableBody.appendChild(row);
  });
};

// View details
const viewDetails = (index) => {
  localStorage.setItem("selectedProductIndex", index);
  window.location.href = "details.html";
};

// Render products on page load
renderProducts();
