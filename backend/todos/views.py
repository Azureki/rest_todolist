# from django.shortcuts import render

# Create your views here.
# from rest_framework import generics
from rest_framework import viewsets
from .models import ToDo
from .serializers import TodoSerializer


class Todolist(viewsets.ModelViewSet):# generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = TodoSerializer


class TaskDetail(viewsets.ModelViewSet):# generics.RetrieveUpdateDestroyAPIView):
    queryset = ToDo.objects.all()
    serializer_class = TodoSerializer

