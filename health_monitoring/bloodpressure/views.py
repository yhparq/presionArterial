from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from .models import BloodPressureReading
from .serializers import BloodPressureReadingSerializer

class BloodPressureReadingListCreateView(generics.ListCreateAPIView):
    queryset = BloodPressureReading.objects.all()
    serializer_class = BloodPressureReadingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
