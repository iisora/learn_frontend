from rest_framework import serializers
from jobs.models import JobOffer

class JobOfferSerializer(serializers.ModelSerializer): #serializers.ModelSerializerを継承して簡単に作成
    class Meta:
        model = JobOffer
        fields = '__all__'