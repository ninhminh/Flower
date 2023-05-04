function AddProduct()
{
    //alert("tuan cho");
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
            postProduct=JSON.stringify(productInfo);
            //khai báo phương thức và đường dẫn để request
            xhttp.open("POST","/Apiv1/AddProduct",false);
            //định dạng gửi đi787
            xhttp.setRequestHeader("Content-type","application/json")
            //gửi
            xhttp.send(postProduct);  
        
}