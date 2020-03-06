function login() {
    const API = "http://localhost:8080/api/users";
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    ajax({
        url: `${API}?name=${name}&password=${password}`,
        method: "GET",
        success: function (result) {result.id ?
            window.location.href = "../success.html" : window.alert("Fail to login!");},
        fail: function (error) {console.log(error)}
    });
}
