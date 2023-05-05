let cotaikhoan = document.getElementById("cotaikhoan");
let chuataikhoan = document.getElementById("chuataikhoan");
let title = document.getElementById("title");
let accounts = JSON.parse(localStorage.getItem("accounts"));
let tentaikhoan = document.getElementById("tentaikhoan")

let idUser=-1
cotaikhoan.style.display="none"

for (let i = 0; i < accounts.length; i++) {
if(accounts[i].check == true){
    cotaikhoan.style.display="block"
    tentaikhoan.innerHTML = accounts[i].username
    chuataikhoan.style.display = "none";
    idUser = accounts[i].id
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


let lichsu = JSON.parse(localStorage.getItem("lichsu"));
let bang = document.getElementById("bang");


console.log(lichsu[0].id);
console.log(bang);

function draw() {
    for (i = 0; i < lichsu.length; i++) {
      if(idUser == lichsu[i].userID){
        bang.innerHTML =
          bang.innerHTML +
          `<tr class="tb-theodoi">
                <td>${lichsu[i].id}</td>
                <td>${lichsu[i].name}</td>
                <td>30/5/2023</td>
                <td>${lichsu[i].soluong}</td>
                <td>${
                  lichsu[i].tongTT.toLocaleString("en-US", { maximumFractionDigits: 0 })} đ</td>
                <td style="display: flex;justify-content: space-around;border:none;padding: 20px;">
                  <div id="${lichsu[i].id}" style="border: none;">
                  <button class="btn-dlt" style="border: none; background-color: burlywood;color:white;border-radius: 3px;padding: 10px;">delete</button></td>
                    </div>
                  </tr>`;}
                }
}

draw()


bang.onclick = function (e) {
  if (e.target.classList.contains("btn-dlt")) {
    let id = e.target.parentElement.id;
    console.log(id);
    console.log(lichsu[0].id)
    for (i = 0; i < lichsu.length; i++) {
      if (Number(lichsu[i].id) == Number(id)) {
        console.log("aaa");
        lichsu.splice(i, 1);
        console.log("delete:" + lichsu);   
        localStorage.setItem("lichsu", JSON.stringify(lichsu));
      }
    }
  }
};
