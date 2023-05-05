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
           window.location.href = "./duantrangchu.html" 
        }
    }
}

const sanphamcon = document.getElementById("sanphamcon");
const product = JSON.parse(localStorage.getItem("products"));
const checktrangcon = JSON.parse(localStorage.getItem("check-trangcon"));
console.log(product);
console.log(checktrangcon);



for (i = 0; i < product.length; i++) {
  if (product[i].id === +checktrangcon) {
    console.log(product[i]);
    sanphamcon.innerHTML =
      sanphamcon.innerHTML +
      `<div>
        <img
          style="width: 800px; height: 800px"
          src="${product[i].image}"
        />
        </div>
        <div class="sanphamcon-content">
        <h2>${product[i].name}</h2>
        <h3><b>${product[i].gia} đ</b></h3>
        <label>Size</label>
        ${
          ["Giày", "Dép"].includes(product[i].phanloai)
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
        <div>
          Đơn hàng được xác nhận sau khi xác nhận thanh toán. Không đổi hàng,
          trả hàng hay hoàn tiền trừ trường hợp pháp luật có quy định khác. Sản
          phẩm này không áp dụng bất kỳ chương trình ưu đãi và khuyến mãi nào.
          Giới hạn số lượng 1 sản phẩm trên mỗi đơn hàng.
        </div>
        <div id="${product[i].id}">
        <a href="./giohang.html"><button class="btn-mua" style="background-color: black;color:white; padding: 5px; width: 300px;"
            >Mua Ngay</button></a>
        </div>
        </div>`;
  }
}

let checksanpham = JSON.parse(localStorage.getItem("check-sanpham"));

sanphamcon.onclick = function(e){
  if(e.target.classList.contains("btn-mua")){
    let id = -1;
    console.log(e.target.parentElement.parentElement);
    id = e.target.parentElement.parentElement.id; //bắt id
    let checksanpham = JSON.parse(localStorage.getItem("check-sanpham")) || [];
    let check = false;
    for (let i = 0; i < checksanpham.length; i++) {
      if (id === checksanpham[i]) {
        check = true;
        break;
      }
    }
    if (!check) {
      checksanpham.push(id);
      localStorage.setItem("check-sanpham", JSON.stringify(checksanpham));
    }
}
}
