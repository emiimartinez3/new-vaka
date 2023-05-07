/*---PRODUCTOS---*/
const shopContent = document.getElementById("shopContent");

const verCarrito = document.getElementById("nav-cart");

const modalContainer = document.getElementById("listaCompra");

const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}" alt="" srcset="">
    <h3>${product.nombre}</h3>
    <span class="price">$ ${product.precio}</span>
    `;
    shopContent.append(content);


    let comprar = document.createElement("button");
    comprar.innerText = "COMPRAR";
    content.append(comprar);
    comprar.className = "comprar"

    comprar.addEventListener("click", ()=>{

      const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id)
      
      if (repeat){
        carrito.map((prod)=>{
          if(prod.id === product.id){
            prod.stock++;
          }
        })
      } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        stock: product.stock,
      })
    }
      console.log(carrito);
      carritoCounter()
      saveLocal()
    })
  });

  const saveLocal = ()=> {
    localStorage.setItem("carrito",JSON.stringify (carrito));
  };

  

 




  