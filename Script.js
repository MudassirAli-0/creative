/////////LOADER//////////


let loader;

function loaderFunc() {
 loader = setTimeout(showCase, 1)
}



function showCase(){
  document.querySelector('.load').style.display = 'none'
  document.querySelector('#loader').style.display = 'block'

}




//NAVBAR DROPDOWNS
let dropdowns = document.querySelectorAll(".dropdown");
let nav_li = document.querySelectorAll(".nav-li");

nav_li.forEach((ele, indx) => {
  ele.addEventListener("mouseenter", () => {
    if (dropdowns[indx].classList.contains(".dropdown-js")) {
      dropdowns[indx].classList.remove("dropdown-js");
      ele.classList.remove("list-clr");
    } else {
      ele.classList.add("list-clr");
      dropdowns[indx].classList.add("dropdown-js");
    }
  });
});

nav_li.forEach((ele, indx) => {
  ele.addEventListener("mouseleave", function () {
    dropdowns[indx].classList.remove("dropdown-js");
    ele.classList.remove("list-clr");
  });
});

dropdowns.forEach((ele, indx) => {
  ele.addEventListener("mouseenter", function () {
    ele.classList.add("dropdown-js");
  });
});
dropdowns.forEach((ele, indx) => {
  ele.addEventListener("mouseleave", function () {
    ele.classList.remove("dropdown-js");
  });
});

////////////////// ON SCROLL

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add("fix-navbar");
  } else {
    navbar.classList.remove("fix-navbar");
    // navbar.style.width = '100%'
  }
});

///////////////SIDE BAR

let cartSidebar = document.querySelector(".cart-sidebar");
let cart = document.querySelector(".cart");
let cancel_cart = document.querySelector(".cart-icn");
let cart_back = document.querySelector(".cart-back-div");

cart.addEventListener("click", function () {
  cartSidebar.classList.add("cart-show");
  cart_back.classList.add("back-div-show");
  showEyeDiv.classList.remove("show-eye-div");
});

cancel_cart.addEventListener("click", () => {
  cartSidebar.classList.remove("cart-show");
  cart_back.classList.remove("back-div-show");
});

////////NAVBAR SIDEBAR

let bar = document.querySelector(".bar");
let cros_btn = document.querySelector(".cros-icn");
let nav_dropdown = document.querySelector(".nav-dropdown");

bar.addEventListener("click", function () {
  nav_dropdown.classList.add("show-nav-drop");
  cart_back.classList.add("back-div-show");
});
cros_btn.addEventListener("click", function () {
  nav_dropdown.classList.remove("show-nav-drop");
  cart_back.classList.remove("back-div-show");
});

let arrowdown = document.querySelectorAll(".arrow");
let dropdown2 = document.querySelectorAll(".dropdown2");

arrowdown.forEach((ele, indx) => {
  ele.addEventListener("click", () => {
    dropdown2[indx].classList.toggle("show-drop2");
  });
});

///////////////////SECTION1

let arrayData = [
  { name: "OLT Strawberry", img: "./images/09.png", price: "22.00" },
  { name: "OLT Juice", img: "./images/2 (1).png", price: "18.00" },
  { name: "Branch Apple", img: "./images/08-1.png", price: "12.00" },
  { name: "Red Strawberry", img: "./images/10.png", price: "12.00" },
  { name: "Orange Juice", img: "./images/3.png", price: "8.00" },
  { name: "Red Apple", img: "./images/03.png", price: "10.00" },
  { name: "Orange", img: "./images/13-1.png", price: "8.00" },
  { name: "Strawberry", img: "./images/12-150x150.png", price: "10.00" },
];

let box_parent = document.querySelector(".box-parent");

arrayData.forEach((ele) => {
  box_parent.innerHTML += `
  <div class="fruit-box">
                    <div class="frt-top-box">
                        <div class="add-fvrt-parent">
                            
                            <div class="eye"><i class="fa-solid fa-eye"></i></div>
                            <div class="hrt"><i class="fa-regular fa-heart"></i></div>

                        </div>
                        <img src="${ele.img}" alt="${ele.img}">
                    </div>
                    <div class="frt-img"></div>
                    <div class="btm-box">
                        <p id="name">${ele.name}</p>

                        <p id="pricee">$<span>${ele.price}</span></p>

                        <div class="add-to-cartbtn"><i class="fa-solid fa-basket-shopping"></i><span class='ad-text-cart'>Add to cart</span></div>
                    </div>
                </div>
  `;
});

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let count = document.querySelector(".count");
let price_counter = document.querySelector(".price-cnt");

let counter = 1;

minus.addEventListener("click", function () {
  counter--;
  if (counter <= 0) {
    counter = 0;
    count.innerHTML = counter;
    // price_counter.innerHTML = counter
  } else {
    count.innerHTML = "0" + counter;
    // price_counter.innerHTML = '0'+counter
  }
});

plus.addEventListener("click", function () {
  counter++;

  if (counter < 10) {
    count.innerHTML = "0" + counter;
    // price_counter.innerHTML = counter
  } else {
    // count.innerHTML = counter;
  }
});

///////////////SECTION3/////////////////

let Nav_tabs = [
  [
    { name: "Green Apple", img: "./images/07-2-150x150.png", price: "11.00" },
    { name: "Sillicon Orange Juice", img: "./images/3-150x150.png", price: "14.00" },
    { name: "Organic Cherry", img: "./images/14-1.png", price: "10.00" },
    { name: "OLT Strawberry", img: "./images/09-150x150.png", price: "22.00" },
    { name: "OLT Juice", img: "./images/2-150x150.png", price: "18.00" },
    { name: "Branch Apple", img: "./images/08-1-150x150.png", price: "12.00" },
    { name: "Red Strawberry", img: "./images/10-150x150.png", price: "12.00" },
    { name: "Red Apple", img: "./images/03-150x150.png", price: "10.00" },
  ],
  [
    { name: "Mini 3D Glass", img: "./images/40.png", price: "220.00" },
    { name: "Bluetooth Gamepad", img: "./images/45.png", price: "199.00" },
    { name: "Apple iPhone 6s", img: "./images/21.png", price: "299.00" },
    { name: "Kotion Headset", img: "./images/49.png", price: "29.00" },
    { name: "Waterproof Camera", img: "./images/06.png", price: "520.00" },
    { name: "Moving Camera", img: "./images/07.png", price: "230.00" },
    { name: "Core i7 Laptop", img: "./images/01.png", price: "125.00" },
    {
      name: "Stereo Headset",
      img: "./Bluetooth-Headphones-Wireless-Stereo-Headset.jpg",
      price: "16.00",
    },
  ],
  [
    { name: "Summer Casual Cotton", img: "./images/36-1.png", price: "19.00" },
    { name: "Women Tops", img: "./images/35-1.png", price: "19.00" },
    { name: "Women Tops Solid Color", img: "./images/34-1.png", price: "19.00" },
    { name: "Black Solid Color Full Sleeve", img: "./images/30.png", price: "29.00" },
    { name: "Men’s Solid Color Short Sleeve", img: "./images/31.png", price: "29.00" },
    {
      name: "Pionner Men Casual Short Sleeve",
      img: "./26.png",
      price: "29.00",
    },
    {
      name: "Pionner Men Casual Short Sleeve",
      img: "./39-1.png",
      price: "29.00",
    },
    {
      name: "Pionner Men Casual Short Sleeve",
      img: "./38-1.png",
      price: "29.00",
    },
  ],
  [
    { name: "OLT Strawberry", img: "./images/09.png", price: "22.00" },
    { name: "OLT Juice", img: "./images/2 (1).png", price: "18.00" },
    { name: "Branch Apple", img: "./images/08-1.png", price: "12.00" },
    { name: "Red Strawberry", img: "./images/10.png", price: "12.00" },
    { name: "Orange Juice", img: "./images/3.png", price: "8.00" },
    { name: "Red Apple", img: "./images/03.png", price: "10.00" },
    { name: "Orange", img: "./images/13-1.png", price: "8.00" },
    { name: "Strawberry", img: "./images/12-150x150.png", price: "10.00" },
  ],
];

let sec_li = document.querySelectorAll(".sec3-li");
let btom_div = document.querySelectorAll(".btom-div");
let sec3_parent = document.querySelector(".sec3-parent");

let filterdArray;

sec_li.forEach((ele, ind) => {
  ele.addEventListener("click", function () {
    sec_li.forEach((elem, indx) => {
      elem.classList.remove("color");
      btom_div[indx].classList.remove("btom-div-show");
    });
    ele.classList.add("color");
    btom_div[ind].classList.add("btom-div-show");
  });
});

update();

function update() {
  sec_li.forEach((ele, ind) => {
    ele.addEventListener("click", function () {
      sec3_parent.innerHTML = "";
      Nav_tabs[ind].forEach((ele) => {
        sec3_parent.innerHTML += `
      <div class="fruit-box">
                    <div class="frt-top-box">
                        <div class="add-fvrt-parent">
                            
                            <div class="eye"><i class="fa-solid fa-eye"></i></div>
                            <div class="hrt"><i class="fa-regular fa-heart"></i></div>

                        </div>
                        <img src="${ele.img}" alt="${ele.img}">
                    </div>
                    <div class="frt-img"></div>
                    <div class="btm-box">
                        <p id="name">${ele.name}</p>

                        <p id="pricee">$<span>${ele.price}</span></p>

                        <div class="add-to-cartbtn"><i class="fa-solid fa-basket-shopping"></i><span class='ad-text-cart'>Add to cart</span></div>
                    </div>
                </div>
      `;
      });
    });
  });
}

method();

function method() {
  sec3_parent.innerHTML = "";
  Nav_tabs[0].forEach((ele) => {
    sec3_parent.innerHTML += `
    <div class="fruit-box">
                  <div class="frt-top-box">
                      <div class="add-fvrt-parent">
                          
                          <div class="eye"><i class="fa-solid fa-eye"></i></div>
                          <div class="hrt"><i class="fa-regular fa-heart"></i></div>

                      </div>
                      <img src="${ele.img}" alt="${ele.img}">
                  </div>
                  <div class="frt-img"></div>
                  <div class="btm-box">
                      <p id="name">${ele.name}</p>

                      <p id="pricee">$<span>${ele.price}</span></p>

                      <div class="add-to-cartbtn"><i class="fa-solid fa-basket-shopping"></i><span class='ad-text-cart'>Add to cart</span></div>
                  </div>
              </div>
    `;
  });
}

////////////////////

let eyebtn = document.querySelectorAll(".eye");
let showEyeDiv = document.querySelector(".f2-eye-added-div");
let heading = document.querySelector(".f2-heading");
let price = document.querySelector(".f2-price");
let img = document.querySelector(".f2-img");
let cancel_btn = document.querySelector(".cancel-btn");

eyebtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    cartSidebar.classList.remove("cart-show");
    showEyeDiv.classList.add("show-eye-div");

    let getname =
      ele.parentElement.parentElement.nextElementSibling.nextElementSibling
        .firstElementChild.innerHTML;
    console.log(getname);
    let getprice =
      ele.parentElement.parentElement.nextElementSibling.nextElementSibling
        .firstElementChild.nextElementSibling.firstElementChild.innerHTML;
    console.log(getprice);

    let getimg = ele.parentElement.nextElementSibling.src;

    heading.innerHTML = getname;
    price.innerHTML = getprice;
    img.src = getimg;

    cancel_btn.addEventListener("click", () => {
      showEyeDiv.classList.remove("show-eye-div");
    });

    /////////////Add to cart btn////////////
    add_to_btn.addEventListener("click", function () {
      let total_price = counter * getprice;
      console.log(total_price);
      console.log(counter);

      addtocart(getimg, getname, getprice, total_price);
    });
  });
});

///////////////
let hrt = document.querySelectorAll(".hrt");
let main = document.querySelector(".main");
let heart_span = document.querySelector(".heart-span");


let hrt_cnt = 0;


hrt.forEach((ele, ind)=>{
  ele.addEventListener('click', function(){
  
      

      if(ele.firstElementChild){
        ele.innerHTML = ''
        ele.classList.add("fa-solid")
        ele.classList.add("fa-heart-circle-check")
        // ele.style.color = 'rgb(0, 123, 255)'
        hrt_cnt++
        heart_span.innerHTML = hrt_cnt

        adfav()
        
        
      }
      
    })
  })
  
  function adfav(){
    let addlist = document.createElement('div');
    addlist.classList.add("adlist")

    let adtext = document.createElement('p');
    adtext.classList.add('adtext')
    adtext.innerHTML = 'Add Product!'

    addlist.appendChild(adtext)
    main.appendChild(addlist)
    
    setInterval(() => {
      addlist.style.display = 'none'
    }, 1000);
  }



//////////////////

let add_to_btn = document.querySelector(".add-btn");
let cart_span = document.querySelector(".cart-span span");
let cart_sidebar = document.querySelector(".show-boxes");
let prod_show = document.querySelector("#prod-show");

let cart_count = 0;

function addtocart(getimg, getname, getprice, total_price) {
  cart_count++;
  cart_span.innerHTML = cart_count;

  prod_show.innerHTML = "";
  console.log(getimg, getname, getprice);

  showEyeDiv.classList.remove("show-eye-div");

  //   cart_sidebar.innerHTML +=
  //   `
  //   <div class="add-to-cart-box">
  //   <div class="add-cancel-btn"><i class="fa-solid fa-xmark"></i></div>
  //   <img class="add-img" src = "${getimg}"></img>
  //   <div class="add-name">${getname}</div>
  //   <div class="add-price">${getprice}</div>
  // </div>
  //   `
  // cart_sidebar.innerHTML = ''

  let addtocartbox = document.createElement("div");
  addtocartbox.classList.add("add-to-cart-box");
  cart_sidebar.appendChild(addtocartbox);

  let addcancelbtn = document.createElement("div");
  addcancelbtn.classList.add("add-cancel-btn");
  addcancelbtn.classList.add("fa-solid");
  addcancelbtn.classList.add("fa-xmark");
  addtocartbox.appendChild(addcancelbtn);
  addcancelbtn.addEventListener("click", () => {
    cart_count--;
    cart_span.innerHTML = cart_count;
    addtocartbox.remove();
  });

  let addimg = document.createElement("img");
  addimg.classList.add("add-img");
  addimg.src = getimg;
  addtocartbox.appendChild(addimg);

  let addname = document.createElement("p");
  addname.classList.add("add-name");
  addname.innerHTML = getname;
  addtocartbox.appendChild(addname);

  let addprice = document.createElement("p");
  addprice.classList.add("add-price");
  addprice.innerHTML = getprice;
  addtocartbox.appendChild(addprice);

  let total = document.createElement("div");
  total.classList.add("total");
  if (total == "") {
    total.innerHTML = getprice;
  } else {
    total.innerHTML = "SubTotal: $ " + total_price;
  }
  addtocartbox.appendChild(total);
}

let addbytex = document.querySelectorAll(".add-to-cartbtn span");

addbytex.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.innerHTML === "Add to cart") {
      // ele.style.color = 'blue'
      ele.innerHTML = " View cart";
      console.log("ok");
      let getimg =
        ele.parentElement.parentElement.previousElementSibling
          .previousElementSibling.lastElementChild.src;
      let getname = ele.parentElement.parentElement.firstElementChild.innerHTML;
      let getprice =
        ele.parentElement.parentElement.firstElementChild.nextElementSibling
          .firstElementChild.innerHTML;
      console.log(getprice);
      addtocart(getimg, getname, getprice);
    } else if (ele.innerHTML === "View cart") {
      ele.style.color = "red";

      //work pending
    }
  });
});

///////////////SECTION5/////////////

let arives = [
  [
    { name: "Green Apple", price: "11.00", img: "./images/07-2-150x150.png" },
    { name: "Silicon Orange Juice", price: "14.00", img: "./images/1-150x150.png" },
    { name: "Organic Cherry", price: "10.00", img: "./images/14-1-150x150.png" },
    { name: "OLT Strawberry", price: "22.00", img: "./images/09-150x150.png" },
  ],

  [
    { name: "OLT Juice", price: "18.00", img: "./images/2-150x150.png" },
    { name: "Branch Apple", price: "12.00", img: "./images/08-1-150x150.png" },
    { name: "Red Strawberry", price: "12.00", img: "./images/10-150x150.png" },
    { name: "Strawberry", price: "10.00", img: "./images/12-150x150.png" },
  ],
];

let ariv_btn = document.querySelectorAll(".ariv-btn");
// console.log(ariv_btn);

let sec5_prod_1 = document.querySelector(".sec5-prod-1");

arives2();

function arives2() {
  ariv_btn.forEach((ele, ind) => {
    ele.addEventListener("click", function () {
      console.log("ok");
      sec5_prod_1.innerHTML = "";
      arives[ind].forEach((ele, ind) => {
        console.log(ele);
        sec5_prod_1.innerHTML += `
      <div class="prod-box">
          <div class="prod-side-bx">
          </div>
          <div class="prod-img">
          <img src= "${ele.img}" alt= "${ele.img}">
          </div>
          <div class="prod-name-price">
          <div class= 'prod-name'>${ele.name}</div>
          <div class= 'prod-price'>$${ele.price}</div>
          </div>
       </div>
      `;
      });
    });
  });
}

arives1();
function arives1() {
  arives[0].forEach((ele, ind) => {
    // console.log(ele);
    sec5_prod_1.innerHTML += `
<div class="prod-box">
    <div class="prod-side-bx">
    </div>
    <div class="prod-img">
    <img src= "${ele.img}" alt= "${ele.img}">
    </div>
    <div class="prod-name-price">
    <div class= 'prod-name'>${ele.name}</div>
    <div class= 'prod-price'>$${ele.price}</div>
    </div>
 </div>
`;
  });
}

let arivesarray2 = [
  [
    { name: "OLT Strawberry", price: "22.00", img: "./images/09-150x150.png" },
    { name: "OLT Juice", price: "18.00", img: "./images/2-150x150.png" },
    { name: "Branch Apple", price: "12.00", img: "./images/08-1-150x150.png" },
    { name: "Green Apple", price: "11.00", img: "./images/07-2-150x150.png" },
  ],

  [
    { name: "Orange Juice", price: "8.00", img: "./images/3-150x150.png" },
    { name: "Red Apple", price: "10.00", img: "./images/03-150x150.png" },
    { name: "Orange", price: "8.00", img: "./images/13-1-150x150.png" },
    { name: "Strawberry", price: "10.00", img: "./images/12-150x150.png" },
  ],
];

let ariv_btn2 = document.querySelectorAll(".ariv-btn2");
// console.log(ariv_btn);

let sec5_prod_2 = document.querySelector(".sec5-prod-2");

arives4();

function arives4() {
  ariv_btn2.forEach((ele, ind) => {
    ele.addEventListener("click", function () {
      console.log("ok");
      sec5_prod_2.innerHTML = "";
      arivesarray2[ind].forEach((ele, ind) => {
        console.log(ele);
        sec5_prod_2.innerHTML += `
      <div class="prod-box">
          <div class="prod-side-bx">
          </div>
          <div class="prod-img">
          <img src= "${ele.img}" alt= "${ele.img}">
          </div>
          <div class="prod-name-price">
          <div class= 'prod-name'>${ele.name}</div>
          <div class= 'prod-price'>$${ele.price}</div>
          </div>
       </div>
      `;
      });
    });
  });
}

arives3();
function arives3() {
  arivesarray2[0].forEach((ele, ind) => {
    // console.log(ele);
    sec5_prod_2.innerHTML += `
<div class="prod-box">
    <div class="prod-side-bx">
    </div>
    <div class="prod-img">
    <img src= "${ele.img}" alt= "${ele.img}">
    </div>
    <div class="prod-name-price">
    <div class= 'prod-name'>${ele.name}</div>
    <div class= 'prod-price'>$${ele.price}</div>
    </div>
 </div>
`;
  });
}

let arivesarray3 = [
  [
    { name: "Silicon Orange Juice", price: "14.00", img: "./images/1-150x150.png" },
    { name: "Organic Cherry", price: "10.00", img: "./images/14-1-150x150.png" },
    { name: "OLT Strawberry", price: "22.00", img: "./images/09-150x150.png" },
    { name: "OLT Juice", price: "18.00", img: "./images/2-150x150.png" },
  ],

  [
    { name: "Branch Apple", price: "12.00", img: "./images/08-1-150x150.png" },
    { name: "Orange Juice", price: "8.00", img: "./images/3-150x150.png" },
    { name: "Red Apple", price: "10.00", img: "./images/03-150x150.png" },
    { name: "Strawberry", price: "10.00", img: "./images/12-150x150.png" },
  ],
];

let ariv_btn3 = document.querySelectorAll(".ariv-btn3");
// console.log(ariv_btn);

let sec5_prod_3 = document.querySelector(".sec5-prod-3");

arives6();

function arives6() {
  ariv_btn3.forEach((ele, ind) => {
    ele.addEventListener("click", function () {
      console.log("ok");
      sec5_prod_3.innerHTML = "";
      arivesarray3[ind].forEach((ele, ind) => {
        console.log(ele);
        sec5_prod_3.innerHTML += `
      <div class="prod-box">
          <div class="prod-side-bx">
          </div>
          <div class="prod-img">
          <img src= "${ele.img}" alt= "${ele.img}">
          </div>
          <div class="prod-name-price">
          <div class= 'prod-name'>${ele.name}</div>
          <div class= 'prod-price'>$${ele.price}</div>
          </div>
       </div>
      `;
      });
    });
  });
}

arives5();
function arives5() {
  arivesarray3[0].forEach((ele, ind) => {
    // console.log(ele);
    sec5_prod_3.innerHTML += `
<div class="prod-box">
    <div class="prod-side-bx">
    </div>
    <div class="prod-img">
    <img src= "${ele.img}" alt= "${ele.img}">
    </div>
    <div class="prod-name-price">
    <div class= 'prod-name'>${ele.name}</div>
    <div class= 'prod-price'>$${ele.price}</div>
    </div>
 </div>
`;
  });
}


///////////////////////

let counters = document.querySelectorAll("#sec6-num");
// console.log(counters);

let speed = 200;

counters.forEach((counter) => {
  function updateCount() {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;
    // console.log(count,  typeof count);
    let inc = (target / speed);
    // console.log(inc, typeof inc);

    if (count < target) {
      counter.innerText = Math.round(count + inc);

      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  }
  updateCount();
});
