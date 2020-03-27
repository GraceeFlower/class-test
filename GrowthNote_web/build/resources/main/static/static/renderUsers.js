window.onload = function () {
    $.ajax({
        url: `/api/users/all`,
        type: "GET",
        dataType: "json",
        success: function (result) {
            renderUserList(result);
        }
    });
};

function renderUserList(userList) {
    const userTable = document.getElementsByClassName("user-info-table")[0];
    userTable.innerHTML += userList.reduce((pre, cur) => pre +
        `<tr>
            <td>${cur.id}</td>
            <td>${cur.userName}</td>
            <td>${cur.password}</td>
        </tr>`, "");
}