from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from django.shortcuts import render,reverse
from django.contrib.auth import authenticate
from django.http import JsonResponse, Http404, HttpResponse,HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from .serializers import QuestionSerializer
from .models import Question

def home(request):
    return render(request,'restApp/home.html')

def loginPage(request):
    if request.method == 'GET':
        return render(request,'restApp/login.html',{})
    elif request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print("DATA IS USER CREDENTIALS IS==>>",username,password)
        user = authenticate(username=username, password=password)
        if user:
            return HttpResponseRedirect(reverse('home'))
        

def dashboard(request):
    # user = User.objects.get()
    return render(request,'restApp/Dashboard.html',{})

@csrf_exempt
@api_view(['GET', 'POST'])
def restApp(request): 
    if request.method == 'GET':
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        print("INSIDE POST",request.POST)
        json_parser = JSONParser()
        data = json_parser.parse(request)
        serializer = QuestionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.error,status=400)


@csrf_exempt
def restApp_details(request, id):
    try:
        instance=Question.objects.get(id=id)
    except Question.DoesNotExist as e:
        return JsonResponse({'Error':'Model Not Found'},status=404)

    if request.method == 'GET':
       seriailizer = QuestionSerializer(instance)
       return JsonResponse(seriailizer.data)

    elif request.method == 'POST':
        print("ID IS==>>",id)
        seriailizer = QuestionSerializer(instance)
        return JsonResponse(seriailizer.data)
 
    elif request.method == 'PUT':
        json_parser = JSONParser()
        data = json_parser.parse(request)
        seriailizer = QuestionSerializer(instance, data=data)
        if seriailizer.is_valid():
            seriailizer.save()
            return JsonResponse(seriailizer.data, status=200)
        return JsonResponse({"Error":"Value not update"},status=400)
    
    elif request.method == 'DELETE':
        instance.delete()
        return HttpResponse(status=204)

    