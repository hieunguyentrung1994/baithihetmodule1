let cotaikhoan = document.getElementById("cotaikhoan");
let chuataikhoan = document.getElementById("chuataikhoan");
let title = document.getElementById("title");
let accounts = JSON.parse(localStorage.getItem("accounts"));
let tentaikhoan = document.getElementById("tentaikhoan");

cotaikhoan.style.display = "none";

for (let i = 0; i < accounts.length; i++) {
  if (accounts[i].check == true) {
    cotaikhoan.style.display = "block";
    tentaikhoan.innerHTML = accounts[i].username;
    chuataikhoan.style.display = "none";
    break;
  }
}

title.onclick = function (e) {
  if (e.target.classList.contains("btn-dangxuat"))
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].check == true) {
        accounts[i].check = false;
        localStorage.setItem("accounts", JSON.stringify(accounts));
        window.location.href = "/Case/trang chủ/duantrangchu.html";
      }
    }
};
// kiểm tra tài khoản đăng nhập

const checksanpham = JSON.parse(localStorage.getItem("check-sanpham"));
// console.log(checksanpham);
const giosp = document.getElementById("gio-SP");
// console.log(checksanpham[0].gia);

function renderChecksanpham() {
  giosp.innerHTML = "";
  for (i = 0; i < checksanpham.length; i++) {
    let gia = Number(checksanpham[i].gia.split(",").join(""));
    console.log(gia);
    giosp.innerHTML =
      giosp.innerHTML +
      `<div class="giay-dep">
    <div>
    <img style="width: 200px;" src="${checksanpham[i].image}">
    </div>
    <div class="font-giohang">
    <div class="name-sanpham">${checksanpham[i].name}</div>
    <div class="gia-sanpham">giá: ${checksanpham[i].gia} đ</div>
      <div>
      ${
        ["Giày", "Dép"].includes(checksanpham[i].phanloai)
          ? `
          <select name="size" class="size-giay-dep">
          <option value="size">size</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    </select>
                    `
          : `
                    <select name="size" class="sze-quan-ao">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    </select>
                    `
      }
                </div>
                <div id = "${checksanpham[i].id}">
                <label>sốlượng</label>
                <input 
                class="sl-sanpham"
                type="number" 
                min="1"
                max="10"
                id="input"
                value="0"
                
                >
                </div>
                <div id="tong" class="tong"></div>
                </div>
                <div style="margin-left: 200px;" id="${checksanpham[i].id}" >
                <button style="font-size: 2em;padding:2px;border:none; background-color:white"class="btn-delete";> 
                <ion-icon name="close-outline" ></ion-icon>
                </button>
                </div>
                </div>`;
  }
}
renderChecksanpham();

const tong = document.querySelector(".tong");
console.log(tong);
console.log(checksanpham[0].id);
giosp.onclick = function (e) {
  let id = -1;
  let sl = 0;
  if (e.target.classList.contains("sl-sanpham")) {
    id = e.target.parentElement.id;
    sl = e.target.value;
    for (let i = 0; i < checksanpham.length; i++) {
      if (Number(id) == Number(checksanpham[i].id)) {
        let sum = Number(checksanpham[i].gia.split(",").join("")) * Number(sl);
        tong.textContent = `Tổng ${sum}`;
      }
    }
  }
  console.log(id);
};

// tong.innerHTML=
