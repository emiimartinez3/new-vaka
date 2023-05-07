const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "block"

    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML =`
    <h1 class="modal-header-title">Tus Productos</h1>`

    modalContainer.append(modalHeader);

    const listaButton = document.createElement("h1");
    listaButton.innerText = "x";
    listaButton.className = "listabtn";
    listaButton.addEventListener("click",()=>{
      modalContainer.style.display = "none"
    })

    modalHeader.append(listaButton);


    carrito.forEach((product)=> {
     
     let carritoContent = document.createElement("div");
     carritoContent.className = "carrito-content";
     carritoContent.innerHTML = `
    <img src="${product.img}" alt="" srcset="">
    <h3>${product.nombre}</h3>
    <span class="price">$ ${product.precio}</span>
    <span class="restar"> - </span>
    <span class="stock">Cantidad ${product.stock}</span>
    <span class="sumar"> + </span>
    <span>Total:$ ${product.stock * product.precio}</span>
    <span class="delete-product">❌</span>
     `;

     modalContainer.append(carritoContent);

     let restar = carritoContent.querySelector(".restar")
     restar.addEventListener("click", () => {
      if(product.cantidad !== 1){
        product.cantidad--;
      }
      pintarCarrito();
     })

     let sumar = carritoContent.querySelector(".sumar")
     sumar.addEventListener("click", () => {
     product.cantidad++;
      pintarCarrito();
     });

   let eliminar = carritoContent.querySelector(".delete-product");
   eliminar.addEventListener("click", ()=>{
    eliminarProducto(product.id);
   })

    });

    const total = carrito.reduce((acc, el)=> acc + el.precio * el.stock, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `
    <h3>Total a pagar: ${total}</h3>
    `;
    modalContainer.append(totalCompra)}
  ;

  verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) => {
  const foundId = carrito.find((element)=> element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
   })
   carritoCounter();
   saveLocal();
   pintarCarrito();
};



const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter();


  
  