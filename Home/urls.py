"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from .views import Home1, Home, Account, Contact, Login, Pay, Payment, Product, ProductDetail, Shop
from django.urls import path

urlpatterns = [
    path('home', Home1.as_view()),
    path('Account', Account.as_view()),
    path('Contact', Contact.as_view()),
    path('Home', Home.as_view()),
    path('Login', Login.as_view()),
    path('Payment', Payment.as_view()),
    path('Pay', Pay.as_view()),
    path('Product', Product.as_view()),
    path('ProductDeltail', ProductDetail.as_view()),
    path('Shop', Shop.as_view()),

]
