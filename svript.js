var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var tableBody = document.getElementById('tbody')
var productsContainer = [];

function test(){
    var product = {
        productName: productNameInput.value,
        productPrice: productPriceInput.value,
        productCategory: productCategoryInput.value,
        productDescription: productDescInput.value,
    }

    productsContainer.push(product)
    console.log(productsContainer);
    clear();
    displayProducts(productsContainer)
}

function clear() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDescInput.value = '';
}

// function displayProducts(arr) {
//     var cartoona = ``;
//     for(var i = 0; i < arr.length; i++) {
//         cartoona += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${arr[i].productName}</td>
//             <td>${arr[i].productPrice}</td>
//             <td>${arr[i].productCategory}</td>
//             <td>${arr[i].productDescription}</td>
//             <td><button class="btn btn-outline-primary">Update</button></td>
//             <td><button class="btn btn-outline-warning">Delete</button></td>
//         </tr>
//         `
//     }
//         tableBody.innerHTML = cartoona;
// }


function displayProducts(arr) {
    var cartoona = ``;
    for(var i = 0; i < arr.length; i++) {
        cartoona += `
    <tr>
        <td>${i + 1}</td>
        <td>${arr[i].productName}</td>
        <td>${arr[i].productPrice}</td>
        <td>${arr[i].productCategory}</td>
        <td>${arr[i].productDescription}</td>
        <td><button class="btn btn-outline-primary">Update</button></td>
        <td><button class="btn btn-outline-warning">Delete</button></td>
    </tr>
        `
    }
    tableBody.innerHTML = cartoona;

}


