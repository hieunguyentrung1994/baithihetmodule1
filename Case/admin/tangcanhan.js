let passwords = document.getElementById("password");
let showpassword = document.getElementById("show-password");
let acc = JSON.parse(localStorage.getItem("accounts"))
let ten = document.getElementById("ten")





for (let i = 0; i < acc.length; i++) {
   if(acc[i].check == true){
    ten.innerHTML = `Xin chào ${acc[i].username} `
   }
    
}

showpassword.addEventListener("click", () => {
  if (passwords.type === "password") {
    passwords.type = "text";
    showpassword.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
  } else if (passwords.type === "text") {
    passwords.type = "password";
    showpassword.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
  }
});


const b = passwords
const c = document.getElementById("email");
const d = document.getElementById("address");
const btndangky = document.getElementById("btn-suadangky");

btndangky.onclick = function () {
    let password = b.value;
    let email = c.value;
    let address = d.value;
 console.log("aaaaaaaaa");
    for(i=0;i<acc.length;i++){
        if (acc[i].email == email) {
            alert(
              "Tài khoản hoặc email đã tồn tại, vui lòng nhập lại thông tin đăng ký")
              console.log("tài khoẻn tồn tại");
            }
        if(acc[i].check == true){
                if (password === "" || email === "" || address === "") {
                    alert("Vui lòng nhập đầy đủ thông tin đăng ký");
                    console.log("điều kiện rỗng");
                  }else{
                    console.log('else: ');
                    const newAcc = { 
                      username: acc[i].username,
                      password: password,
                      email: email, 
                      address: address, 
                      id: `${acc[i].id}`,
                      check: true, };
                    acc.push(newAcc);
                    acc.splice(i,1)
                    localStorage.setItem("accounts", JSON.stringify(acc));
                    alert("Tài khoản đã được sửa đổi thành công");
                    window.location.href = "/Case/trang chủ/duantrangchu.html";
                    break;
                  
                    }
                  
              } 
        }
    }
