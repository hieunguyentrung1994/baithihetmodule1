// Lấy tham chiếu đến các phần tử DOM
const passwords = document.getElementById("password-dangnhap");
const showpassword = document.getElementById("show-password");
const usernames = document.getElementById("user-name");
const btndangnhap = document.getElementById("btn-dangnhap");

// Chuyển đổi tính năng hiển thị mật khẩu
showpassword.addEventListener("click", () => {
  if (passwords.type === "password") {
    passwords.type = "text";
    showpassword.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
  } else {
    passwords.type = "password";
    showpassword.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
  }
});

// Lấy danh sách tài khoản đã đăng ký từ LocalStorage
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

// Xử lý khi người dùng nhấn nút đăng nhập
btndangnhap.onclick = function () {
  // Tìm tài khoản tương ứng với username nhập vào
  let matchedAccount = accounts.find((account) => account.username === usernames.value);//logtrue

  if (matchedAccount) {
    if (matchedAccount.id == -1) {
      alert("Tài khoản đang bị tạm ngừng hoạt động. Vui lòng liên hệ hỗ trợ để biết thêm chi tiết.");
    } else if (matchedAccount.password === passwords.value) {
      matchedAccount.check = true;
      localStorage.setItem("accounts", JSON.stringify(accounts));
      alert("Tài khoản đã được đăng nhập thành công.");
      window.location.href = "/Case/trang chủ/duantrangchu.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
};
