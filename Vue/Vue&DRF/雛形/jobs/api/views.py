from rest_framework import generics
from jobs.models import JobOffer
from jobs.api.serializers import JobOfferSerializer

# ListCreateAPIViewを継承する事でリストを作成できる
class ListView(generics.ListCreateAPIView):
    # querysetにJobOfferクラスのオブジェクトの全てを降順に並べて格納する
    queryset = JobOffer.objects.all().order_by('-id')
    # serializer_classにserializersで作成したクラスを格納する
    serializer_class = JobOfferSerializer

# RetrieveUpdateDestroyAPIViewを継承する事で詳細を作成できる
class DetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobOffer.objects.all()
    serializer_class = JobOfferSerializer