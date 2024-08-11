from django.urls import path
from .views import BloodPressureReadingListCreateView

urlpatterns = [
    path('blood-pressure-readings/', BloodPressureReadingListCreateView.as_view(), name='blood_pressure_readings'),
]
