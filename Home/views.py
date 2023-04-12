from django.shortcuts import render
from django.views import View

class Home1(View):
    def get(self, request):
        return render(request, 'Home1.html')
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
    def get(self, request):
        return render(request, 'Pay.html')
class Payment(View):
    def get(self, request):
        return render(request, 'payment.html')
class Product(View):
    def get(self, request):
        return render(request, 'Product.html')
class ProductDetail(View):
    def get(self, request):
        return render(request, 'ProductDetail.html')
class Shop(View):
    def get(self, request):
        return render(request, 'Shop.html')
