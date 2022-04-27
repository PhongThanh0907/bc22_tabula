var services = new Service();

function getListProducts() {
  document.getElementById("loading").style.display = "block";
  var promise = services.fetchData();
  promise
    .then(function (result) {
      document.getElementById("loading").style.display = "none";
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListProducts();

function renderHTML(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var product = arr[i];
    content += `
        <div class="item">
        <div class="item__img">
          <img src="./images/${product.hinhAnh}" alt="" />
        </div>
        <div class="item__main">
          <h3>${product.ngonNgu}</h3>
          <h1>${product.hoTen}</h1>
          <p>${product.moTa}</p>
        </div>
      </div>
        `;
  }
  document.getElementById("carouselItem").innerHTML = content;
}
