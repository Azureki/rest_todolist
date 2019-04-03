from rest_framework import serializers

from .models import ToDo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        # fields = ('id', 'title', 'description', 'completed')
        fields = '__all__'
        model = ToDo
