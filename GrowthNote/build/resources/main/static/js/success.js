window.onload = function () {
    const API = "http://localhost:8080/api/users";
    ajax({
        url: API + "/all",
        method: "GET",
        success: function (result) {renderUserTable(result)},
        fail: function (error) {console.log(error)}
    });
};

function renderUserTable(data) {
    const userTable = document.getElementsByClassName("user-info-table")[0];
    userTable.innerHTML += data.reduce((pre, cur) => pre +
        `<tr>
            <td>${cur.id}</td>
            <td>${cur.name}</td>
            <td>${cur.password}</td>
        </tr>`, "")
    console.log("here");
}
