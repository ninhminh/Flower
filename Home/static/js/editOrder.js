old();
function old(){
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var ResponseJson =  xhttp.responseText
        var Response = JSON.parse(ResponseJson)
        if(xhttp.status=200){
            
            var s1 = document.getElementById('form');
            var a = 0;
            for(var i=0; i<Response.length;i++){
                if(Response[i].id==window.location.pathname.substring(11)){
                    a=i;
                    break;
                }
            }
            var s ='<label for="phone" >Phone:</label><input type="text" id="phone" name="phone" value="'+ Response[a].PhoneNumber +'"><br><br><label for="address" >Address:</label><input type="text" id="address" name="address" value="'+ Response[a].Address +'"><br><br>  <button type="submit" onclick="sua()">Edit Order</button>'
            s1.innerHTML = s;
            console.log(Response[a])
        }else{

        }
    }
    xhttp.open("GET", "/Apiv1/ListOrder", false);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send();
}

function sua()
{
    
    const xhttp = new XMLHttpRequest();
    // var nameP = document.getElementById('nameP').value;
    // var nameU = document.getElementById('nameU').value;
    var Phone = document.getElementById('phone').value;
    var Address = document.getElementById('address').value;
    
        xhttp.onload = function()
            {
                //lấy dữ liệu dạng json
                var ResponseJson=xhttp.responseText
                //chuyển về dữ liệU javascript
                var Response= JSON.parse(ResponseJson)
                
                if(xhttp.status==200)
                {
                   
                   
                    window.location = "/ListOrder";
                }
                else{
                    
                }
            }     
            const orderInfo={
                // nameP : nameP,
                // nameU : nameU,
                Phone : Phone,
                Address : Address,
               
            }
            putOrder=JSON.stringify(orderInfo);
            //khai báo phương thức và đường dẫn để request
            xhttp.open("PUT","/Apiv1/EditOrder/"+window.location.pathname.substring(11),false);
            //định dạng gửi đi787
            xhttp.setRequestHeader("Content-type","application/json")
            //gửi
            xhttp.send(putOrder);  
        
}