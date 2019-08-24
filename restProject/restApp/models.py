from django.db import models
from django.contrib.auth.models import User

class Question(models.Model):
    title = models.TextField(blank=True, null=True)
    user = models.ForeignKey(User,blank=True, null=True, on_delete=models.CASCADE)
    money = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    startTime = models.DateTimeField(blank=True, null=True)
    endTime = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title

    @property
    def choices(self):
        return self.choices_set.all()
 
class Choice(models.Model):
    name = models.CharField(max_length=50,blank=True, null=True)
    game = models.ForeignKey('restApp.Question',blank=True, null=True, on_delete=models.CASCADE)
    imageUrl = models.CharField(max_length=200,blank=True, null=True)
    status = models.CharField(default='inactive', max_length=20)
    value = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    choice_text = models.CharField(max_length=200,blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def votes(self):
        return self.answer_set.count()

    
class Answer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    choice =models.ForeignKey(Choice, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.first_name+' '+self.choice.name
