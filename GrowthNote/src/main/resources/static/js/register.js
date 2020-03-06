function register() {
    const API = "http://localhost:8080/api/users";
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    ajax({
        url: API,
        method: "POST",
        data: {"name": name, "password": password},
        success: function (result) {window.location.href = "../success.html"},
        fail: function (error) {console.log(error)}
    });
}
