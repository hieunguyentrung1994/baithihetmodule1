let cotaikhoan = document.getElementById("cotaikhoan");
let chuataikhoan = document.getElementById("chuataikhoan");
let title = document.getElementById("title");
let accounts = JSON.parse(localStorage.getItem("accounts"));
let tentaikhoan = document.getElementById("tentaikhoan")

cotaikhoan.style.display="none"

for (let i = 0; i < accounts.length; i++) {
if(accounts[i].check == true){
    cotaikhoan.style.display="block"
    tentaikhoan.innerHTML = accounts[i].username
    chuataikhoan.style.display = "none";
    break;
}
}

title.onclick = function(e){
    if(e.target.classList.contains("btn-dangxuat"))
    for (let i = 0; i < accounts.length; i++) {
        if(accounts[i].check == true){
           accounts[i].check = false;
           localStorage.setItem("accounts", JSON.stringify(accounts))
           window.location.href = "/Case/trang chủ/duantrangchu.html" 
        }
    }
}


const content = document.getElementById("content-sanpham");
const product = JSON.parse(localStorage.getItem("products"));
const checksanpham = JSON.parse(localStorage.getItem("check-sanpham")) || [];

for (i = 0; i < product.length; i++) {
  content.innerHTML =
    content.innerHTML +
  `<div >
      <div id="${product[i].id}">
        <a href="./sanphamcon.html"><img class="clicksanpham" src="${product[i].image}" style="width:350px;height:350px;"></a>
      </div>
      <h5 style="width:350px;">${product[i].name}</h5>
      <p>${product[i].phanloai}</p>
      <p>giá: ${product[i].gia} đ</p>
    <div id="${product[i].id}">
      <a href="./giohang.html" class="btn-buy-sanphamtong"}>
        <span class="btn-buy">
          Mua Ngay
        </span>
      </a>
      <button style="margin-left: 150px; background-color:white; font-size: 2em;color: #34B4E0;border:none;">
        <span class="themgiohang"style="background-color:white;border:none;font-size: 2em">
            <ion-icon name="bag-check-outline"></ion-icon>
        </span>
      </button>
    </div>
  </div>`;
}
//khi ấn hình ảnh chuyển trang con
content.onclick = function (e) {
  let check = -1;
  if (e.target.classList.contains("clicksanpham")) {
    let id = e.target.parentElement.parentElement.id;
    check = id;
    console.log(check);
    localStorage.setItem("check-trangcon", JSON.stringify(check));
  };

// khi ấn nút mua chuyển sang trang giỏ hàng kèm thêm cho sản phảm mua thêm vào


  if (e.target.classList.contains("btn-buy")) {
    let id = -1;
    console.log(e.target.parentElement.parentElement);
    id = e.target.parentElement.parentElement.id; //bắt id
    let checksanpham = JSON.parse(localStorage.getItem("check-sanpham")) || [];
    let slsp = JSON.parse(localStorage.getItem("slsp")) || [];
    let check = false;
    for (let i = 0; i < checksanpham.length; i++) {
      if (id === checksanpham[i]) {
        check = true;
        break;
      }
    }
    if (!check) {
      sl = 1
      slsp.push(sl)
      localStorage.setItem("slsp", JSON.stringify(slsp));
      checksanpham.push(id);
      localStorage.setItem("check-sanpham", JSON.stringify(checksanpham));
    } else {
      alert("Sản phẩm đã tồn tại trong giỏ hàng");
    }
  };
// khi ấn vào giỏ hàng 
  // Xử lý sự kiện click của nút "Giỏ hàng"
if (e.target.parentElement.classList.contains("themgiohang")) {
  let id = e.target.parentElement.parentElement.parentElement.id;
  console.log(id);
  let checksanpham = JSON.parse(localStorage.getItem("check-sanpham")) || [];
  let slsp = JSON.parse(localStorage.getItem("slsp")) || [];
  let check = false;
  for (let i = 0; i < checksanpham.length; i++) {
    if (id === checksanpham[i]) {
      check = true;
      break;
    }
  }
  console.log(id);
  if (!check) {
    sl = 1
    slsp.push(sl)
    localStorage.setItem("slsp", JSON.stringify(slsp));
    checksanpham.push(id);
    localStorage.setItem("check-sanpham", JSON.stringify(checksanpham));
    alert("Thêm sản phẩm vào giỏ hàng thành công!");
  } else {
    alert("Sản phẩm đã tồn tại trong giỏ hàng!");
  }
}

};
     