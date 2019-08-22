from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core.mail import send_mail, BadHeaderError
from . import models
# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserModel
    fields = ('id', 'fName','lName','fullName', 'email', 'password','mobNumber','companySize','role')
   
# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.UserModel
    fields = ('id', 'fName','lName','fullName', 'email', 'password','mobNumber','companySize','role')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['email'], validated_data['mobNumber'], validated_data['password'])
    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")
