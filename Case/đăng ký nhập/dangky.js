let passwords = document.getElementById("password");
let showpassword = document.getElementById("show-password");
var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,15}$/;


showpassword.addEventListener("click", () => {
  if (passwords.type === "password") {
    passwords.type = "text";
    showpassword.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
  } else if (passwords.type === "text") {
    passwords.type = "password";
    showpassword.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
  }
});

const a = document.getElementById("username");
const b = passwords
const c = document.getElementById("email");
const d = document.getElementById("address");
const btndangky = document.getElementById("btn-dangky");




btndangky.onclick = function () {
  // console.log("hahahah");
  let username = a.value;
  // console.log('username: ', username);
  let password = b.value;
  // console.log('password: ', password);
  let email = c.value;
  // console.log('email: ', email);
  let address = d.value;
  // console.log('address: ', address);


//lấy dữ liẹu từ locel xuông nếu không có local tạo mảng rỗng
  let acc = JSON.parse(localStorage.getItem("accounts")) || [];
    //kiểm tra hàm đã tồn tại email hoặc user có chưa
    let check1 = true
    for (i=0; i<acc.length ;i++){
      if (acc[i].username == username || acc[i].email == email) {
        alert(
          "Tài khoản hoặc email đã tồn tại, vui lòng nhập lại thông tin đăng ký")
          console.log("tài khoẻn tồn tại");
          check1 = false
          console.log(check1);
          break;
        }
      }
       if (  username === "" || password === "" || email === "" || address === "") {
        //kiểm tra hàm nhập đầy đủ chưa
        alert("Vui lòng nhập đầy đủ thông tin đăng ký");
        console.log("điều kiện rỗng");
      }else if(check1 == true){
        let addressRegex = (address.trim())
       
          if(passwordRegex.test(password) && passwordRegex.test(username) && addressRegex.length > 8){
        console.log('else: ');
        const newAcc = { 
          username: username,
          password: password,
          email: email, 
          address: address, 
          id: `${Math.floor(Math.random()*1000)}`,
          check: false, };
          console.log('newAcc: ', newAcc);
        acc.push(newAcc);
        localStorage.setItem("accounts", JSON.stringify(acc));
        alert("Tài khoản đã được đăng ký thành công");
        window.location.href = "./dangnhap.html";
      }else{
        alert("mật khẩu hoặc tên đang nhập không có dấu cách hoặc ký tự đặc biệt hoặc độ dài từ 8 đến 15 ký tự địa chỉ không đúng");
      }
        }
      
  
};

