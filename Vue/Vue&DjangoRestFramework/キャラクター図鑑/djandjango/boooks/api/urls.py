from django.urls import path
from boooks.api import views

urlpatterns = [
    path('books/', views.ListView.as_view(), name='list'),
    path('books/<int:pk>/', views.DetailView.as_view(), name='detail')
]