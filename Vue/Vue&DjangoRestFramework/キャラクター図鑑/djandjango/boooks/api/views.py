
### View types ###
from rest_framework import generics
from rest_framework import viewsets

### Model & Serializers ###
from boooks.models import Characters
from boooks.api.serializers import CharactersSerializer
# from boooks.models import Card
# from boooks.api.serializers import CardSerializer
from boooks.models import Books
from boooks.api.serializers import BooksSerializer

### Others ###
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
import os
from logging import getLogger, StreamHandler, DEBUG

# ListCreateAPIViewを継承する事でリストを作成できる
class ListView(generics.ListCreateAPIView):
    queryset = Characters.objects.all().order_by('-id')
    serializer_class = CharactersSerializer

class BookListView(generics.ListCreateAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer

# class ListView(viewsets.ViewSet):
    # parser_class = (FileUploadParser,)

    # def list(self, request):
    #     queryset = Characters.objects.all().order_by('-id')
    #     serializer = CharactersSerializer(queryset, many=True)
    #     return Response(serializer.data)

    # def create(self, request):
    #     context = {
    #         "request": self.request,
    #     }
    #     serializer = CharactersSerializer(data=request.data, context=context)

    #     if serializer.is_valid():
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# RetrieveUpdateDestroyAPIViewを継承する事で詳細を作成できる
class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Characters.objects.all()
    serializer_class = CharactersSerializer

    # def update(self, request, pk):
    #     # if request.method != 'PUT': # 必要ないかも
    #     #     file_path = self.path()
    #     #     if os.path.exists(file_path):
    #     #         try:
    #     #             os.remove(file_path)
    #     #         except OSError:
    #     #             pass
    #     try:
    #         logger = getLogger(__name__)
    #         handler = StreamHandler()
    #         handler.setLevel(DEBUG)
    #         logger.setLevel(DEBUG)
    #         logger.addHandler(handler)
    #         logger.propagate = False

    #         logger.debug('編集されました！')
    #         logger.debug(request)
    #         logger.debug(pk)
    #     except OSError:
    #         print('ログ出力失敗')

# RetrieveUpdateDestroyAPIViewを継承する事で詳細を作成できる
class BookDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer



# class CardViewSet(viewsets.ViewSet):
#     parser_class = (FileUploadParser,)

#     def list(self, request):
#         queryset = Card.objects.all()
#         serializer = CardSerializer(queryset, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         context = {
#             "request": self.request,
#         }
#         serializer = CardSerializer(data=request.data, context=context)

#         if serializer.is_valid():
#             serializer.save(published_date=datetime.now())
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # RetrieveUpdateDestroyAPIViewを継承する事で詳細を作成できる
# class CardDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Card.objects.all()
#     serializer_class = CardSerializer
