# import serializers from the REST framework
from rest_framework import serializers
# import the data models
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'