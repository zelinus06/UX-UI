document.addEventListener("DOMContentLoaded", function() {
    // Lấy đối tượng các nút và liên kết
    const registerButton = document.getElementById("register-btn");
    const loginButton = document.getElementById("login-btn");
    // Lấy đối tượng các trường nhập liệu
    const registerPhone = document.querySelector("input[placeholder='Số điện thoại']");
    const registerEmail = document.querySelector("input[placeholder='Email']");
    const registerName = document.querySelector("input[placeholder='Họ và tên']");
    const registerPassword = document.querySelector("input[placeholder='Mật khẩu']");
    const registerConfirmPassword = document.querySelector("input[placeholder='Xác nhận mật khẩu']");

    const loginEmail = document.querySelector("input[type='text']");  // Email/SĐT
    const loginPassword = document.querySelector("input[type='password']");  // Mật khẩu

    // Sự kiện cho nút Đăng ký
    if (registerButton) {
        registerButton.addEventListener("click", function(event) {
            event.preventDefault();  // Ngừng hành động mặc định (chuyển hướng)

            // Kiểm tra các trường nhập liệu trong trang đăng ký
            if (registerPhone.value.trim() === "" || registerEmail.value.trim() === "" || registerName.value.trim() === "" || registerPassword.value.trim() === "" || registerConfirmPassword.value.trim() === "") {
                alert("Vui lòng điền đầy đủ thông tin.");
            } else if (registerPassword.value !== registerConfirmPassword.value) {
                alert("Mật khẩu và xác nhận mật khẩu không khớp.");
            } else {
                window.location.href = "dangkithanhcong.html";  // Chuyển hướng đến trang đăng ký thành công
            }
        });
    }

    // Sự kiện cho nút Đăng nhập
    if (loginButton) {
        loginButton.addEventListener("click", function(event) {
            event.preventDefault();  // Ngừng hành động mặc định (chuyển hướng)

            // Kiểm tra các trường nhập liệu trong trang đăng nhập
            if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
                alert("Vui lòng điền đầy đủ Email/SĐT và Mật khẩu.");
            } else {
                window.location.href = "../Homepage.html";
            }
        });
    }
})



