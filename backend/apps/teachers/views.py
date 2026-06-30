from rest_framework import generics
from apps.accounts.serializers import UserSerializer
from apps.accounts.models import User

class TeacherListView(generics.ListAPIView):
    queryset = User.objects.filter(role=User.Role.TEACHER)
    serializer_class = UserSerializer