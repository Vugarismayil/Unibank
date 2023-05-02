let productList = JSON.parse(localStorage.getItem("products"));

if (productList.length === 0) {
  document.querySelector("table").classList.add("d-none");
  document.querySelector(".message").classList.remove("d-none");
} else {
  document.querySelector("table").classList.remove("d-none");
  document.querySelector(".message").classList.add("d-none");
}

function ShowProduct() {
  let productList = JSON.parse(localStorage.getItem("products"));

  let x = "";
  productList.forEach((element) => {
    x += `
   <tr data-id="${element.productId}" >
   <td> <span id="dlt"><i class="fa-solid fa-trash" style="color: #ff9500; cursor: pointer;"></i></span> </td>
   <td> <img src="${element.image}" alt=""></td>
   <td>${element.productName}</td>
   <td>${element.productPrice}</td>
   <td><input id="${element.productId}" type="number" value="${
      element.productCount
    }" onchange="handleCountChange('${element.productId}', this.value)"></td>
   <td> ${element.productPrice.split(" ")[0] * element.productCount} ₼  </td>
</tr>
   `;
  });

  document.querySelector("tbody").innerHTML = x;

  DeleteItem();
}

ShowProduct();

function DeleteItem() {
  let productList = JSON.parse(localStorage.getItem("products"));

  let deleteElement = document.querySelectorAll("#dlt");

  for (let dltElement of deleteElement) {
    dltElement.addEventListener("click", function () {
      let dataId = this.parentElement.parentElement.getAttribute("data-id");
      let existPr = productList.find((pr) => pr.productId === dataId);
      let index = productList.indexOf(existPr);
      productList.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(productList));

      if (existPr.productCount >= 0) {
        this.parentElement.parentElement.remove();
      }

      if (productList.length === 0) {
        document.querySelector("table").classList.add("d-none");
        document.querySelector(".message").classList.remove("d-none");
      } else {
        document.querySelector("table").classList.remove("d-none");
        document.querySelector(".message").classList.add("d-none");
      }

      document.querySelector("#count").innerHTML = productList.length;
    });
  }
  ShowCountProduct();
}

function handleCountChange(productId, newCount) {
  let productList = JSON.parse(localStorage.getItem("products"));
  if (newCount >= 0) {
    productList.forEach((element) => {
      if (element.productId === productId) {
        element.productCount = newCount;
        let productPrice = parseFloat(element.productPrice.split(" ")[0]);
        let totalPrice = productPrice * newCount;
        document.getElementById(
          element.productId
        ).parentNode.nextElementSibling.innerHTML = totalPrice + " AZN";
      }
    });
    localStorage.setItem("products", JSON.stringify(productList));
  } else {
    alert("Minimum deyer 1 ola biler");
  }
  DeleteItem();
  ShowProduct();
}

function ShowCountProduct() {
  let product_list = JSON.parse(localStorage.getItem("products"));
  document.querySelector("#count").innerHTML = product_list.length;
}

ShowCountProduct();
