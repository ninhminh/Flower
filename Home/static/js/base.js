function search(){
    //alert('kkk')
    if(event.keyCode==13){
        var key = document.getElementById('find').value;
        
        window.location='/Search/'+key;
    }
}
role();
function role(){
    const xhttp = new XMLHttpRequest();
        //nhận dự liệu về (http response)
        xhttp.onload = function(){
        var ResponseJson=xhttp.responseText;
        //chuyển về dữ liệU javascript
        var response= JSON.parse(ResponseJson);    
        if(xhttp.status==200){
            
            var s = document.getElementById('role');
            var s1= '';
            
            var a= document.getElementById('role1')
            var a1 = '';
            if (response[0]['idRole']==1){
                s1+='<a href="/Home"><li>Trang chủ</li> </a> <a href="/Shop"> <li>Shop</li> </a> <a href="/Contact"> <li>Liên Hệ</li> </a> <a href="/ListProduct"><li> Cài đặt</li></a>'
                a1+='<a href="/Account"><li><i class="fas fa-user"></i> Đăng Kí</li></a><a href="/Payment"><li><i class="fas fa-money-bill"></i> Thanh Toán</li></a><a href="/Pay"><li><i class="fas fa-cart-plus"></i> Giỏ Hàng</li> </a><a href="/Login"><li><i class="fas fa-lock"></i> Đăng Nhập</li></a>'
            }
            else{
                s1+='<a href="/Home"><li>Trang chủ</li> </a> <a href="/Shop"> <li>Shop</li> </a> <a href="/Contact"> <li>Liên Hệ</li> </a>';
                a1+='<a href="/Payment"><li><i class="fas fa-money-bill"></i> Thanh Toán</li></a><a href="/Pay"> <li><i class="fas fa-cart-plus"></i> Giỏ Hàng</li></a><a href="#" onclick="Logout()"><li><i class="fas fa-lock"></i> Đăng Xuất</li></a><a href="/Me"><li><i class="fas fa-user"></i> Tôi</li></a>'
            }
            
            s.innerHTML=s1;
            a.innerHTML=a1;
            
        }
 }
     //khai báo phương thức và đường dẫn để request
     xhttp.open("GET", "/Apiv1/ListRole",false);
     //định dạng gửi đi787
     xhttp.setRequestHeader("Content-type","application/json")
     //
     xhttp.setRequestHeader('userID',localStorage.getItem('userID'));
     xhttp.send();
}
