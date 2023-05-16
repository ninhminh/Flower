history()
function history(){
    const xhttp = new XMLHttpRequest();
    var userID = localStorage.getItem('userID');
    xhttp.onload = function () {
        var ResponseJson = xhttp.responseText
        var Response = JSON.parse(ResponseJson)
        if (xhttp.status = 200) {
            alert('ok');
            var serverListElement = document.getElementById('history');
            //khai báo biến String(dùng để thay đổi html trong thẻ bên trên)
            var serverListHTML = '';
            for (var i = 0; i < Response.length; i++) {

                serverListHTML += '<tr><th>' + (i+1) + '</th><th></th>'
                serverListHTML += '<th hidden id="product_id">'+ Response[i].ProductId +'</th>'
                serverListHTML += '<th>'+ Response[i].ProductName + '</th>'
                serverListHTML += '<th>'+ (Response[i].Amount*Response[i].Price) + '</th>'
                serverListHTML += '<th>' + Response[i].Date + '</th></tr>';
            }
            serverListElement.innerHTML = serverListHTML;
        } else {

        }

    }
    xhttp.open("GET", "/Apiv1/Order", false);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.setRequestHeader("userID", userID);
    xhttp.send();
}