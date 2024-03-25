document
  .getElementById("register-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("register-popup").style.display = "block";
  });

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("register-popup").style.display = "none";
  });

// Hàm kiểm tra tính hợp lệ của thông tin đăng nhập
function validateLoginForm() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  // Kiểm tra xem tên đăng nhập và mật khẩu có được nhập vào không
  if (username === "" || password === "") {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
    return false;
  }

  // Nếu thông tin đăng nhập hợp lệ, trả về true
  return true;
}

// Hàm kiểm tra tính hợp lệ của thông tin đăng ký
function validateRegisterForm() {
  var newUsername = document.getElementById("new-username").value.trim();
  var email = document.getElementById("email").value.trim();
  var newPassword = document.getElementById("new-password").value.trim();
  var confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  // Kiểm tra xem các trường thông tin đăng ký có được nhập vào không
  if (
    newUsername === "" ||
    email === "" ||
    newPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return false;
  }

  // Kiểm tra định dạng email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Địa chỉ email không hợp lệ.");
    return false;
  }

  // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
  if (newPassword !== confirmPassword) {
    alert("Mật khẩu và xác nhận mật khẩu không khớp nhau.");
    return false;
  }

  // Nếu thông tin đăng ký hợp lệ, trả về true
  return true;
}

// Xử lý sự kiện khi người dùng gửi form đăng nhập
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    // Ngăn chặn hành động mặc định của form (không gửi đi)
    event.preventDefault();

    // Kiểm tra tính hợp lệ của thông tin đăng nhập
    if (validateLoginForm()) {
      window.location.href = "DashboardAdmin.html";
    }
  });

// Xử lý sự kiện khi người dùng gửi form đăng ký
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    // Ngăn chặn hành động mặc định của form (không gửi đi)
    event.preventDefault();

    // Kiểm tra tính hợp lệ của thông tin đăng ký
    if (validateRegisterForm()) {
      // Nếu thông tin đăng ký hợp lệ, có thể thực hiện các hành động tiếp theo ở đây, ví dụ: gửi yêu cầu đăng ký đến server
      window.location.href = "admin/DashboardAdmin.html";
    }
  });

function login() {
  window.location.href = "http://127.0.0.1:5500/admin/DashboardAdmin.html";
}
