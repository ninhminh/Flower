function AddProduct() {
    //alert("tuan cho");
    const xhttp = new XMLHttpRequest();
    var name = document.getElementById('name').value;

    var code = document.getElementById('code').value;
    var price = document.getElementById('price').value;
    var quatily = document.getElementById('quatily').value;
    var img = document.getElementById('img');
    var status = document.getElementById('status').value;

    // Lấy đối tượng input chứa hình ảnh

    var file = img.files[0];

    // Tạo đối tượng FileReader để đọc file hình ảnh
    var reader = new FileReader();
    reader.onloadend = function () {
        // Chuyển đổi file hình ảnh thành Base64 string
        var base64String = reader.result.split(',')[1];

        // Tạo đối tượng JSON chứa dữ liệu hình ảnh


        // Tạo yêu cầu AJAX với dữ liệu hình ảnh dưới dạng JSON
        
        xhttp.onload = function () {
            //lấy dữ liệu dạng json
            var ResponseJson = xhttp.responseText
            //chuyển về dữ liệU javascript
            var Response = JSON.parse(ResponseJson)

            if (xhttp.status == 200) {
                window.location = "/ListProduct";
            }
            else {

            }
        }
        const productInfo = {
            name: name,
            code: code,
            price: price,
            quatily: quatily,
            img: base64String,
            tt: status,
            filename: file.name,
        }
        postProduct = JSON.stringify(productInfo);
        //khai báo phương thức và đường dẫn để request
        xhttp.open("POST", "/Apiv1/AddProduct", false);
        //định dạng gửi đi787
        xhttp.setRequestHeader("Content-type", "application/json")

        //gửi
        xhttp.send(postProduct);
    };
    reader.readAsDataURL(file);

}