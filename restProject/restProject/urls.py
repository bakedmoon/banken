
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import include,url
from restProject import settings
from django.views.static import serve
from restApp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.loginPage,name="login"),
    path('dashboard',views.dashboard,name="dashboard"),
    path('home',views.home,name="home"),
    path('api/v1/',views.restApp,name="restApi"),
    # path('api/v1/',include('restApp.api')),
    url(r'^assets/(?P<path>.*)$', serve,{'document_root': settings.ASSETS},name='assets'),
]
