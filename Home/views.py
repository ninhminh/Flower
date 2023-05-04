from django.shortcuts import render
from django.views import View


class Home(View):
    def get(self, request):
        return render(request, 'Home.html')
class Account(View):
    def get(self, request):
        return render(request, 'Account.html')
class Contact(View):
    def get(self, request):
        return render(request, 'Contact.html')
class Login(View):
    def get(self, request):
        return render(request, 'Login.html')
class Pay(View):
    def get(self, request,id):
        return render(request, 'Pay.html')
class Payment(View):
    def get(self, request):
        return render(request, 'payment.html')
class Product(View):
    def get(self, request):
        return render(request, 'Product.html')
class ProductDetail(View):
    def get(self, request,id):
        return render(request, 'ProductDetail.html')
class Shop(View):
    def get(self, request):
        return render(request, 'Shop.html')
class ListCatalog(View):
    def get(self, request):
        return render(request, 'ListCatalog.html')
class ListOrder(View):
    def get(self, request):
        return render(request, 'ListOrder.html')
class ListProduct(View):
    def get(self, request):
        return render(request, 'ListProduct.html')
class ListType(View):
    def get(self, request):
        return render(request, 'ListType.html')
class ListUser(View):
    def get(self, request):
        return render(request, 'ListUser.html')
class AddProduct(View):
    def get(self, request):
        return render(request, 'AddProduct.html')
class EditProduct(View):
    def get(self, request,id):
        return render(request, 'EditProduct.html')
class EditUser(View):
    def get(self, request, id):
        return render(request, 'EditUser.html')
class Search(View):
    def get(self,request,key):
        return render(request,'Search.html')
class Me(View):
    def get(self, request):
        return render(request, 'Me.html') 
class Cart(View):
    def get(self,request):
        return render(request,'Cart.html')
class ChangePassword(View):
    def get(self, request):
        return render(request, 'ChangePassword.html')
