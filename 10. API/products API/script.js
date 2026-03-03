const productsAPI = "https://dummyjson.com/products";

const products = document.getElementById("products");

const loader = document.getElementById('loader');

fetchAllProducts();

function fetchAllProducts() {
    fetch(productsAPI).then((res) => res.json())
        .then((data) => {
            console.log("Whole Data", data);
            console.log("All Products", data.products);

            displayAllProductsInUi(data.products);
        }).catch((err) => {
            console.log(err);
        });
}

function displayAllProductsInUi(allProducts) {
    products.innerHTML = "";

    loader.innerHTML = "";

    allProducts.forEach((product) => {
        products.innerHTML += `<div class="col-12 col-md-6 col-lg-3 my-3">
            <div class="card position-relative" tabindex="0">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                
                <div class="card-body">
                    <h5 class="card-title text-truncate">${product.title}</h5>
                    <p class="card-text mb-1">
                        <span class="fw-bold text-dark">₹${product.price}</span>
                        <small class="text-success ms-2 fw-semibold">
                            ${product.discountPercentage}% off
                        </small>
                    </p>
                    <p class="text-muted small mb-0">
                        ⭐ ${product.rating} | Stock: ${product.stock}
                    </p>
                </div>

                <div class="overlay position-absolute top-0 start-0 w-100 h-100 p-3">
                    <h6 class="fw-bold border-bottom pb-2">Product Details</h6>
                    <p class="small text-muted mb-2" style="font-size: 0.8rem;">
                        ${product.description}
                    </p>

                    <div class="small mb-2">
                        <div class="d-flex justify-content-between"><strong>Brand:</strong> <span>${product.brand}</span></div>
                        <div class="d-flex justify-content-between"><strong>SKU:</strong> <span>${product.sku}</span></div>
                        <div class="d-flex justify-content-between"><strong>Warranty:</strong> <span>${product.warrantyInformation}</span></div>
                    </div>

                    <div class="mt-2">

                        <p class="small mb-1">
                            <strong>Tags:</strong> 
                            ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join("")}
                        </p>
                    </div>

                    <div class="mt-3">
                        <span class="badge ${product.availabilityStatus === 'In Stock' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'} w-100">
                            ${product.availabilityStatus}
                        </span>
                    </div>
                </div>
            </div>
        </div>`;
    })
}