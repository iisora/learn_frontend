from rest_framework import generics
from boooks.models import Characters
from boooks.api.serializers import CharactersSerializer

# ListCreateAPIViewを継承する事でリストを作成できる
class ListView(generics.ListCreateAPIView):
    queryset = Characters.objects.all().order_by('-id')
    serializer_class = CharactersSerializer

# RetrieveUpdateDestroyAPIViewを継承する事で詳細を作成できる
class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Characters.objects.all()
    serializer_class = CharactersSerializer
