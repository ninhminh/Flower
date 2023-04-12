
from rest_framework.views import APIView
from rest_framework.response import Response

from Entity.models.Product import Product
class AllFlower(APIView):
    def get(self, request):
        flowers = Product.objects.all()
        flowerList = []
        for flower in flowers:
            flowerList.append({"ProductName":flower.ProductName, "ProductCode":flower.ProductCode, "Price":flower.Price, "Quatily":flower.Quatily})
        return Response(flowerList, status=200)

