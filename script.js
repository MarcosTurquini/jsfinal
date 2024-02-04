const mainData = [ 
  {
    id: 2,
    image: "images/anime.jpg",
    title: "MousePad",
    price: "16000",
    iprice: "20",
    desc: "Mousepad Personalizado Berserk 90x40"

  },
  {
    id: 3,
    image: "images/dbz.jpg",
    title: "MousePad",
    price: "16000",
    desc: "Mousepad Personalizado Goku Black - MANGA 90x40"
  },
  {
    id: 4,
    image: "images/dragon.jpg",
    title: "MousePad",
    price: "16000",
    desc: "Mousepad Personalizado Dragon 90x40"
  },
  {
    id: 4,
    image: "images/duko.jpg",
    title: "MousePad",
    price: "16000",
    desc: "Mousepad Personalizado Duko 2.0 90x40"
  },
  {
    id: 4,
    image: "images/gengar.jpg",
    title: "MousePad",
    price: "16000",
    desc: "Mousepad perzonalidado Gengar 90x40"
  },
  {
    id: 2,
    image: "images/hollow.jpg",
    title: "MousePad",
    price: "16000",
    iprice: "20",
    desc: "Mousepad Personalizado hollow knight 90x40"
  },
  {
    id: 2,
    image: "images/japan.jpg",
    title: "MousePad",
    price: "16000",
    iprice: "20",
    desc: "Mousepad Personalizado Sakura tree invert Rosa 90x40"
  },
  {
    id: 2,
    image: "images/luna.jpg",
    title: "MousePad",
    price: "14000",
    iprice: "20",
    desc: "Mousepad Personalizado Sailor Moon v2 82x32"
  },
  {
    id: 2,
    image: "images/messi.jpg",
    title: "MousePad",
    price: "16000",
    iprice: "20",
    desc: "Mousepad Personalizado Messi 90x40"
  },
  {
    id: 2,
    image: "images/zorro.jpg",
    title: "MousePad",
    price: "16000",
    iprice: "20",
    desc: "Mousepad Personalizado El zorro explosivo 90x40"
  },
  

];

const containerData = document.getElementById("containerData");
let i = 0;

containerData.innerHTML = mainData.map(function (data) {
    var { image, title, price, desc } = data;
    return `<div class="col">
    <div class="card h-100">
      <img
        src="${image}"
        class="card-img-top card-img"
        alt="..."
      />
      <div class="card-body">
        <div class="clearfix mb-3">
          <span class="float-start badge rounded-pill bg-primary"
            >${title}</span
          >
          <span class="float-end price price-hp">$${price}</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
          <div class="btn btn-warning" onclick="addToCart(${i++})">Agregar</div>
        </div>
      </div>
    </div>
  </div>`;


  })
  .join("");

var cart = [];
function addToCart(a) {
  cart.push({ ...mainData[a] });
  display();
}

function deleteFromCart(a) {
  cart.splice(a, 1);
  
  display();
  
}

function display() {
  let j = 0;
  var total = 0;
  
  document.getElementById("badge").innerText = cart.length;
  document.getElementById("totalItem").innerText ="Total Productos : " + cart.length;
  
  
  if (cart.length == 0) {
    document.getElementById("cartContainer").innerHTML ="<h3>Tu carrito esta vacio</h3>";
    document.getElementById("totalPrice").innerHTML = "Precio Total: " + "00.00" + '';

  } else {
    
    const cartContainer = document.querySelector('.cartContainer');
    cartContainer.innerHTML = cart.map(function (item) {
      
      var { image, title, price } = item;
      total=total+parseInt(price);
      document.getElementById("totalPrice").innerHTML = "Precio Total: $" + total + '';
        return `<div class="cartItem">
    <img src="${image}" class="cartImg" alt="" />
    <h5 class="cartTitle title">${title}</h5>
    <div class="d-flex align-items-center">
    <p class="cartPrice text-success my-1">$${price}</p>
    <i class="fa-solid fa-trash button mx-3" onclick="deleteFromCart(${j++})"></i>
    <button class="btn btn-primary">Buy</button>
    </div>
    </div>`
  }).join("");
  }
}



const openCartButtons = document.querySelectorAll("[data-cart-target]");
const closeCartButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cart = document.querySelector(button.dataset.cartTarget);
    openCart(cart);
  });
});
closeCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cart = button.closest(".cartMainContainer");
    closeCart(cart);
  });
});

overlay.addEventListener("click", () => {
  const closeOverlay = document.querySelectorAll(".cartMainContainer.active");
  closeOverlay.forEach((close) => {
    closeCart(close);
  });
});

function openCart(cart) {
  if (cart == null) return;
  cart.classList.add("active");
  overlay.classList.add("active");
}

function closeCart(cart) {
  if (cart == null) return;
  cart.classList.remove("active");
  overlay.classList.remove("active");
}



