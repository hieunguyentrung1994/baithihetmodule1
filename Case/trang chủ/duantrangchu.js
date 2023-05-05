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