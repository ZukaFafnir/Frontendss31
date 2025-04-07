
 const correctUsername = "huanrose@gmail.com";
 const correctPassword = "123456";
 document.getElementById("loginBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
     console.log("Đăng nhập thành công!");
    } else {
     console.log("Đăng nhập thất bại!");
   }
 });