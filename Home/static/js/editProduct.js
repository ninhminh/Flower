THAO();
function THAO(){
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var ResponseJson =  xhttp.responseText
        var Response = JSON.parse(ResponseJson)
        if(xhttp.status=200){
            
            var s1 = document.getElementById('nhihienlanh');
            var NHI = 0;
            for(var i=0; i<Response.length;i++){
                if(Response[i].id==window.location.pathname.substring(13)){
                    NHI=i;
                    break;
                }
            }
            var s ='<label for="name" >Name:</label><input type="text" id="name" name="name" required value="'+Response[NHI].ProductName+'"><br><br><label for="code" >Code:</label><input type="text" id="code" name="code" required value="'+ Response[NHI].ProductCode +'"><br><br><label for="price" >Price:</label><input type="number" id="price" name="price" min="0" required value="'+ Response[NHI].Price +'"><br><br><label for="quatily" >Quatily:</label><input type="number" id="quatily" name="quatily" required value="'+ Response[NHI].Quatily +'"><br><label for="status">Trạng Thái:</label><input type="text" id="status" name="status" required value="'+ Response[NHI].Status +'"><br><br><button type="submit" onclick="EditProduct()">Edit Product</button>';
            s1.innerHTML = s;
        }else{

        }
    }
    xhttp.open("GET", "/Apiv1/NewProduct", false);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send();
}

function EditProduct()
{
    
    const xhttp = new XMLHttpRequest();
    var name = document.getElementById('name').value;
    var code = document.getElementById('code').value;
    var price = document.getElementById('price').value;
    var quatily = document.getElementById('quatily').value;
    var img = document.getElementById('img').value;
    var status = document.getElementById('status').value;
    
        xhttp.onload = function()
            {
                //lấy dữ liệu dạng json
                var ResponseJson=xhttp.responseText
                //chuyển về dữ liệU javascript
                var Response= JSON.parse(ResponseJson)
                
                if(xhttp.status==200)
                {
                   
                   
                    window.location = "/ListProduct";
                }
                else{
                    
                }
            }     
            const productInfo={
                name : name,
                code : code,
                price : price,
                quatily : quatily,
                img : img,
                tt : status
            }
            putProduct=JSON.stringify(productInfo);
            //khai báo phương thức và đường dẫn để request
            xhttp.open("PUT","/Apiv1/EditProduct/"+window.location.pathname.substring(13),false);
            //định dạng gửi đi787
            xhttp.setRequestHeader("Content-type","application/json")
            //gửi
            xhttp.send(putProduct);  
        
}