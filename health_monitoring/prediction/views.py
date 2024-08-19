from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Challenge
from .serializers import ChallengeSerializer
from django.utils.timezone import now

class ChallengeListCreateView(APIView):
    def get(self, request):
        user = request.user
        challenges = Challenge.objects.filter(user=user)
        serializer = ChallengeSerializer(challenges, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ChallengeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, start_date=now().date())
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ChallengeUpdateView(APIView):
    def put(self, request, pk):
        try:
            challenge = Challenge.objects.get(pk=pk, user=request.user)
        except Challenge.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        challenge.is_completed = True
        challenge.end_date = now().date()
        challenge.save()

        serializer = ChallengeSerializer(challenge)
        return Response(serializer.data, status=status.HTTP_200_OK)
