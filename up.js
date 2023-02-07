const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");
const products = [
  {name: "after effect", description: "description1", category: "category1"},
  {name: "product2", description: "description2", category: "category2"},
  ...]
searchButton.addEventListener("click", function() {
  let searchTerm = searchInput.value.toLowerCase().trim();
  let filteredProducts = products.filter(function(product) {
    return product.name.toLowerCase().includes(searchTerm) ||
           product.description.toLowerCase().includes(searchTerm) ||
           product.category.toLowerCase().includes(searchTerm);
  });

  results.innerHTML = "";
  if (filteredProducts.length > 0) {
    for (let i = 0; i < filteredProducts.length; i++) {
      results.innerHTML += "<p>" + filteredProducts[i].name + "</p>";
    }
  } else {
    results.innerHTML = "<p>No results found</p>";
  }
});
