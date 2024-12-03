// Global State: Initialize Products
const products = JSON.parse(localStorage.getItem("products")) || [];

// Save to LocalStorage
const saveProducts = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

// Load Mock Data if no products exist
if (products.length === 0) {
  const mockData = [
    {
      category: "Electronics",
      name: "Smartphone",
      brand: "Samsung",
      modelName: "Galaxy S22",
      modelNumber: "SM-001",
      uom: "Piece",
      warranty: "1 Year",
      price: 999.99,
      gst: 18,
    },
    {
      category: "Home Appliance",
      name: "Refrigerator",
      brand: "LG",
      modelName: "FrostFree",
      modelNumber: "FF-201",
      uom: "Piece",
      warranty: "2 Years",
      price: 499.99,
      gst: 18,
    },
  ];
  products.push(...mockData);
  saveProducts();
}
