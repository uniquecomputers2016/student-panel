const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        message.style.color = "green";
        message.textContent = "Login Successful!";

        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 500);

    } else {

        message.style.color = "red";
        message.textContent = "Wrong Username or Password";

    }

});