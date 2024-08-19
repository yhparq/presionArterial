from django.urls import path
from .views import ChallengeListCreateView, ChallengeUpdateView

urlpatterns = [
    path('challenges/', ChallengeListCreateView.as_view(), name='challenge-list-create'),
    path('challenges/<int:pk>/complete/', ChallengeUpdateView.as_view(), name='challenge-update'),
]
