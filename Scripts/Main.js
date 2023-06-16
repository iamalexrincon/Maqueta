/*=============== SCROLL REVEAL ANIMATION ===============*/
document.addEventListener('DOMContentLoaded', function () {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  sr.reveal('.cover', { delay: 200 });
  sr.reveal('.container', { delay: 250 });
  sr.reveal('.row', { delay: 300 });
});

var shoppingCart = [];

// Agrega un evento de escucha al documento cuando esté listo
document.addEventListener('DOMContentLoaded', function () {
  // Obtén todos los botones de "Agregar al carrito"
  var addToCartButtons = document.querySelectorAll('.btn-primary');

  // Agrega un evento de escucha a cada botón de "Agregar al carrito"
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Obtener los detalles del producto
      var productCard = button.closest('.card');
      var productName = productCard.querySelector('.card-title').innerText;
      var productPrice = productCard.querySelector('.card-text').innerText;

      // Crear un objeto que representa el producto
      var product = {
        name: productName,
        price: productPrice
      };

      // Agregar el producto al carrito (puedes utilizar un array o un objeto)
      // Por ejemplo, si utilizas un array:
      shoppingCart.push(product);

      // Actualizar la visualización del carrito
      updateCartView();
    });
  });

  // Función para actualizar la visualización del carrito
  function updateCartView() {
    var cartSection = document.querySelector('#cartSection');
    cartSection.innerHTML = '';

    // Verificar si hay productos en el carrito
    if (shoppingCart.length === 0) {
      cartSection.innerText = 'No hay productos en el carrito.';
    } else {
      var table = document.createElement('table');
      var tableHead = document.createElement('thead');
      var tableBody = document.createElement('tbody');

      // Crear la fila de encabezado de la tabla
      var headerRow = document.createElement('tr');
      var nameHeader = document.createElement('th');
      var priceHeader = document.createElement('th');

      nameHeader.innerText = 'Nombre';
      priceHeader.innerText = 'Precio';

      headerRow.appendChild(nameHeader);
      headerRow.appendChild(priceHeader);
      tableHead.appendChild(headerRow);
      table.appendChild(tableHead);

      // Agregar filas para cada producto en el carrito
      shoppingCart.forEach(function (product) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var priceCell = document.createElement('td');

        nameCell.innerText = product.name;
        priceCell.innerText = product.price;

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      cartSection.appendChild(table);
    }
  }

});

