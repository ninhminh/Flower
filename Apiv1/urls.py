from django.urls import path
from .views import AllFlower


urlpatterns = {
    path('AllFlower',AllFlower.as_view()),
}