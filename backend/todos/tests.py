from django.test import TestCase

# Create your tests here.

from .models import ToDo

class TodoModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        ToDo.objects.create(title='first todo')
        ToDo.objects.create(description='a description')

