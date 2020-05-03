from django.urls import path
from . import views
urlpatterns = [
    path('main/', views.index, name="main_page"),
    path('memory_game/', views.memory, name="memory_game"),
    path('form/', views.form, name="form"),
    path('download_file', views.download_file, name="download_file"),
]