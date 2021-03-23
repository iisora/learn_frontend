from rest_framework import serializers
from boooks.models import Characters

class CharactersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characters
        fields = '__all__'