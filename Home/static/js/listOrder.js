add();
function add(){
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var ResponseJson =  xhttp.responseText
        var Response = JSON.parse(ResponseJson)
        if(xhttp.status=200){
           
            var s1 = document.getElementById('add');
            var s = '';
            for(var i=0; i<Response.length;i++){
                
                    s+= '<tr><td>' + (i+1) +'</td><td>'+ Response[i].Product +'</td><td>'+ Response[i].User +'</td><td>'+ Response[i].PhoneNumber +'</td><td>'+ Response[i].Amount +'</td><td class="setupproduct"><div class="editproduct" onclick="changeStatus(' + Response[i].id + ')">'+ Response[i].Status +'</div></td><td >pending</td><td class="setupproduct"><div class="editproduct">Sửa </div>  <div class="deleteproduct" onclick="xoa('+ Response[i].id+')">  Xóa </div> <div class="dowloadproduct"> Tải xuống</div><div class="clear"></div> </td> </tr>'
                
            }
            s1.innerHTML =s;
        }else{

        }
        console.log(Response);
    }
    xhttp.open("GET", "/Apiv1/ListOrder", false);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send();

}


function changeStatus(id) {
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (xhttp.status = 200) {
            alert("đã xác nhận")
            add()
            
        } else {
            
        }
    };
    xhttp.open('PUT', '/Apiv1/UpdateStatus/' + id, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
}

function xoa(id){
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var ResponseJson =  xhttp.responseText
        var Response = JSON.parse(ResponseJson)
        if(xhttp.status=200){
            add()
            
        }else{

        }
    }
    xhttp.open("DELETE", "/Apiv1/DeleteOrder/" + id, false);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send();

}
function sua(id){
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var ResponseJson =  xhttp.responseText
        var Response = JSON.parse(ResponseJson)
        if(xhttp.status=200){
            add()
            
        }else{

        }
    }
    xhttp.open("PUT", "/Apiv1/EditUser/" + id, false);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send();

}