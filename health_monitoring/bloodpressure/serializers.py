from rest_framework import serializers
from .models import BloodPressureReading

class BloodPressureReadingSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressureReading
        fields = ['id', 'systolic', 'diastolic', 'pulse', 'timestamp']
