// const user = "admin";
// const pass = "admin";

// while (true) {
//   const nhapTenDangNhap = prompt("Vui lòng nhập tên đăng nhập:");
//   const nhapMatKhau = prompt("Vui lòng nhập mật khẩu:");
  
//   if (nhapTenDangNhap === user && nhapMatKhau === pass) {
//     alert("Đăng nhập thành công!");
//     break;
//   } else {
//     alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
//   }
// }



// let products = [
//   {
//     id: "1",
//     name: "GIÀY NMD S1",
//     image:
//       "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/66f848fabde3484e9bb4af7f009e3f9a_9366/Giay_NMD_S1_trang_HP9778_01_standard.jpg",
//     content: "Cloud White",
//     phanloai: "giày",
//     gia: "6.800.000",
//     soluong: "10",
//   },
// ];
// localStorage.setItem("products", JSON.stringify(products)); //lưu local
let products = JSON.parse(localStorage.getItem("products")) || []; //lấy value trên local và chuyển đổi thành dạng mảng
// console.log(a);d

const tbody = document.getElementById("tbody");
console.log(tbody);
const nhap = document.getElementById("sanphammoi");
const submit = document.getElementById("btn-submit");
// console.log(nhap);
let nguoidung = document.getElementById("nguoidung");
let acc = JSON.parse(localStorage.getItem("accounts")) || [];
console.log(acc);




function renderProducts() {
  tbody.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${products[i].id} ">
		<td class="id">${i + 1}</td>
		<td class="name-sanpham" style="width:300px">${products[i].name}</td>
		<td>
		  <img
			class="img-sanpham"
			src="${products[i].image}"
		  />
		</td>
		<td class="content-sanpham">${products[i].content}</td>
		<td>
		  ${products[i].phanloai}
		</td>
		<td class="gia-sanpham">${products[i].gia} đ</td>
		<td>${products[i].soluong}</td>
		<td><button class="btn-edit">edit</button></td>
		<td><button class="btn-delete">delete</button></td>
	  </tr>`;
  }
}
renderProducts();

// hàm thêm sản phẩm mới
submit.onclick = function (e) {
  e.preventDefault();
  console.log(nhap.namesanpham.value);
  if (
    nhap.namesanpham &&
    nhap.image &&
    nhap.contentsanpham &&
    nhap.phanloaisanpham &&
    nhap.giasanpham &&
    nhap.slsanpham
  ) {
    let product = {
      id: Math.floor(Math.random() * 10000),
      name: nhap.namesanpham.value,
      image: nhap.image.value,
      content: nhap.contentsanpham.value,
      phanloai: nhap.phanloaisanpham.value,
      gia: nhap.giasanpham.value,
      soluong: nhap.slsanpham.value,
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    // localStorage.setItem("products", JSON.stringify(products));
    alert("thêm thành công");
    submit.reset()
    // console.log(products);
  } else {
    alert("nhập đầy đủ thông tin sản phẩm");
  }
  renderProducts();
};

//hàm sửa xóa sản phẩm có trong kho
tbody.onclick = function (e) {
  //sửa edit
  let findIndex = -1;
  if (e.target.classList.contains("btn-edit")) {
    let id = e.target.parentElement.parentElement.id;
    let td = e.target.parentElement.parentElement;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == Number(id)) {
        findIndex = i;
      }
    }
    if (findIndex > -1) {
      let find = products[findIndex];
      td.innerHTML = `<tr id=${find.id}>
      <td></td>
      <td><input
      type="text"/
      value="${find.name}"
    /></td>

    <td><input 
    type="text"/
    value="${find.image}"</td>
      <td>
    <select name="contentsanpham" id="contentsanpham" value="${find.contentsanpham}">
            <option value="size-giay-dep">size giày dép</option>
            <option value="size-quan-ao">size quần áo</option>
          </select>
    </td>

      <td><select name="phanloaisanpham" id="phanloaisanpham" value="${find.phanloai}">
      <option value="Giày">Giày</option>
      <option value="Dép">Dép</option>
      <option value="Quần GYM Nữ">Quần GYM Nữ</option>
      <option value="Áo GYM Nữ">Áo GYM Nũ</option>
    </select> </td>

    <td><input
      type="text"/
      value="${find.gia}"
    /></td>

    <td><input type="number/  value="${find.soluong}"/></td>
     
     <td><button class="btn-confirm">Confirm</button></td>
		<td><button class="btn-delete">Delete</button></td>
     </Tr>`;
    }
  }
  if (e.target.classList.contains("btn-confirm")) {
    let id = e.target.parentElement.parentElement.id;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == Number(id)) {
        findIndex = i;
      }
    }

    console.log(
      e.target.parentElement.parentElement.children[1].children[0].value
    );
    let newname =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let newimage =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let newcontent =
      e.target.parentElement.parentElement.children[3].children[0].value;
    let newphanloai =
      e.target.parentElement.parentElement.children[4].children[0].value;
    let newgia =
      e.target.parentElement.parentElement.children[5].children[0].value;
    let newsl =
      e.target.parentElement.parentElement.children[6].children[0].value;
    products[findIndex] = {
      ...products[findIndex],
      name: newname,
      image: newimage,
      content: newcontent,
      phanloai: newphanloai,
      gia: newgia,
      soluong: newsl,
    };
    console.log(products);
    if (e.target.classList.contains("btn-delete")) {
      let id = e.target.parentElement.parentElement.id;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == Number(id)) {
          findIndex = i;
        }
      }
      products[findIndex] = products;
    }

    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    console.log(products);
  }
  //xóa - Delete
  if (e.target.classList.contains("btn-delete")) {
    let id = e.target.parentElement.parentElement.id;
    let check = -1;
    for (let i = 0; i < products.length; i++) {
      if (id == products[i].id) {
        check = i;
      }
    }
    if (check != -1) {
      products.splice(check, 1);
    }
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
  }
};



  for(i=0;i<acc.length;i++){
    nguoidung.innerHTML= nguoidung.innerHTML + 
    `<div>  <tr>
    <td>${i+2}</td>
    <td>người dùng</td>
    <td>${acc[i].username}</td>
    <td>${acc[i].password}</td>
    <td>${acc[i].email}</td>
    <td>${acc[i].address}</td>
    <td id="${acc[i].id}">
    <button class="chanhoatdong" style="border: none;border-radius: 10px;padding: 20px;background-color: chocolate;">
      chặn hoạt động</button></td>
  </tr>
  </div>`
  }

  nguoidung.onclick = function evenBtn(e){
    console.log("aaaaaa");
    if(e.target.classList.contains("chanhoatdong")){
      let id = e.target.parentElement.id;
      console.log(id);
      console.log((acc[0].id).toString());
      for (i=0;i<acc.length;i++){
        if(acc[i].id.toString() == id){
          acc[i].id = -1
          console.log(acc[i].id);
          localStorage.setItem("accounts", JSON.stringify(acc))
      }
      }
    }
  }
