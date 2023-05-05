let cotaikhoan = document.getElementById("cotaikhoan");
let chuataikhoan = document.getElementById("chuataikhoan");
let title = document.getElementById("title");
let accounts = JSON.parse(localStorage.getItem("accounts"));
let tentaikhoan = document.getElementById("tentaikhoan")
let usernameID =-1
cotaikhoan.style.display="none"

for (let i = 0; i < accounts.length; i++) {
if(accounts[i].check == true){
    cotaikhoan.style.display="block"
    tentaikhoan.innerHTML = accounts[i].username
    chuataikhoan.style.display = "none";
    usernameID = accounts[i].id
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

const checksanpham = JSON.parse(localStorage.getItem("check-sanpham"));
const giosp = document.getElementById("gio-SP");
const product = JSON.parse(localStorage.getItem("products"));
const btnthanhtoan = document.getElementById("btn-thanhtoan")

// const sl = new Array(checksanpham.length).fill(1);
const sl =
  JSON.parse(localStorage.getItem("slsp")) ||
  new Array(checksanpham.length).fill(1);

// console.log(Number(checksanpham[0]));
let sumSl = 0;
let lichsu = JSON.parse(localStorage.getItem("lichsu")) || [];
let soluong = document.querySelector(".sl-sanpham");
// console.log(product);

draw();
// ấn nút x để xóa toaanf bộ sản phẩm đã thêm vào giở hàng
giosp.onclick = function (e) {
  if (e.target.parentElement.classList.contains("btn-delete")) {
    console.log("xoa di 1 sp");
    let id = e.target.parentElement.parentElement.id;
    console.log("id ", id);
    for (i = 0; i < checksanpham.length; i++) {
      if (id == Number(checksanpham[i])) {
        sl.splice(i, 1);
        checksanpham.splice(i, 1);
      }
    }

    console.log("sau khi xoa");
    console.log(checksanpham);
    giosp.innerHTML = "";
    localStorage.setItem("check-sanpham", JSON.stringify(checksanpham));
    localStorage.setItem("slsp", JSON.stringify(sl));
    draw();
  }
};
//in sản phẩm mà khách hàng đã chọn
function draw() {
  console.log("drawing");
  console.log("checksanpham", checksanpham);
  for (let i = 0; i < product.length; i++) {
    let gia = parseInt(product[i].gia.split(",").join(""));
    for (let j = 0; j < checksanpham.length; j++) {
      // console.log(product[1].id);
      // console.log(Number(checksanpham[j]));
      if (product[i].id === Number(checksanpham[j])) {
        console.log("gia  ", gia);

        console.log("sl tai " + j, sl[j]);
       
        giosp.innerHTML =
          giosp.innerHTML +
          `<div class="giay-dep">
        <div>
        <img style="width: 200px;" src="${product[i].image}">
        </div>
          <div class="font-giohang">
          <div class="name-sanpham">${product[i].name}</div>
          <div class="gia-sanpham">giá: ${product[i].gia} đ</div>
          <div>
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
                  </div>
                  <div>
                      <label>sốlượng</label>
                      <input 
                      class="sl-sanpham"
                      type="number" 
                      min="1"
                      max="10"
                      id="sl-sanpham${product[i].id}"
                      value="${sl[j]}"
                      onchange="changeTotal('${product[i].id}', ${gia})"
                      >
                      </div>
                      <div id="tong${product[i].id}">Tổng: ${
            (sl[j] * gia)
          } đ</div>
                      </div>
                      <div style="margin-left: 200px;" id="${product[i].id}" >
                      <button style="font-size: 2em;padding:2px;border:none; background-color:white"class="btn-delete";> 
                      <ion-icon name="close-outline" ></ion-icon>
                      </button>
                      </div>
                      </div>`;
        sumSl = sumSl + sl[j];
      }
    }
  }
}

function changeTotal(id, gia) {
  //tinh tổng giá trị từng sản phẩm sl*giá
    // tại sả phẩm đó kh thay đổi giá trị tại input
    // sô lượng với hàm onchange khi mỗi lần thay đổi input
  console.log("onchange event");
  let giaTong = 0;
  let soluong = document.getElementById("sl-sanpham" + id);
  document.getElementById("tong" + id).innerHTML =
    "Tổng: " + (gia * soluong.value) ;
//lấy tổng từng giá cộng lại đưa ra giá tổng đơn hàng cho tất cả sản phảm
  let all = document.querySelectorAll("[id^='tong']");
  console.log("all", all);
  for (let i = 0; i < all.length; i++) {
    console.log("for", Number(all[i].innerHTML.split(" ")[1]));
    giaTong += Number(all[i].innerHTML.split(" ")[1]);
  }
  console.log("giaTong", giaTong);
  let sumTT = document.getElementById("sumTT");
  sumTT.innerHTML = ``;
  sumTT.innerHTML = sumTT.innerHTML + `${giaTong.toLocaleString("en-US", { maximumFractionDigits: 0 })} đ`;
  let slTT = document.getElementById("slTT");
  slTT.innerHTML = ``;
  slTT.innerHTML = slTT.innerHTML + `${sumSl}`;
    
  //lấy giá trị sl từng input khi thay đổi bút lên Local khi có thay đổi
  for (let i = 0; i < checksanpham.length; i++) {
    if (id == checksanpham[i]) {
      let sll = document.getElementById("sl-sanpham" + id).value;
      sl[i] = Number(sll);
      console.log(sl);
      localStorage.setItem("slsp", JSON.stringify(sl));
    }
  }
}
  //khi ấn thanh toán chuyển thanh toán và xóa hết phản tử trong giỏ hàng
  btnthanhtoan.onclick = function(){
  console.log(parseInt(product[0].gia.replace(/,/g, "")));
  console.log(Number(checksanpham[0]));
  let sl = JSON.parse(localStorage.getItem("slsp"))
  console.log(sl[0]);
  for(let i=0;i<product.length;i++)
    {for(let j=0;j<checksanpham.length;j++){
      if (Number(checksanpham[j]) == product[i].id) {
        let gia = parseInt(product[i].gia.replace(/,/g, ""))
       let thanhtoan= {
        id:checksanpham[j],
        name:product[i].name,
        soluong:sl[j] ,
        tongTT:sl[j] * gia,
        userID:usernameID,
       }
      lichsu.push(thanhtoan);
      console.log(lichsu);
      localStorage.setItem("lichsu", JSON.stringify(lichsu));
       sl[j] = 1
        }
      }
    }
     checksanpham.splice(0, checksanpham.length)
     sl.splice(0, sl.length)
     console.log(sl);
     localStorage.setItem("check-sanpham", JSON.stringify(checksanpham));
     localStorage.setItem("slsp", JSON.stringify(sl));
     window.location.href = "./llichsugiohang.html";
}

