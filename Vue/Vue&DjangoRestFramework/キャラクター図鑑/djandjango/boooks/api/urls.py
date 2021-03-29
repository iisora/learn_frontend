from django.urls import path
from boooks.api import views

urlpatterns = [
    path('books/', views.ListView.as_view(), name='list'),
    path('books/<int:pk>/', views.DetailView.as_view(), name='detail'),
    # path('card/<int:pk>/', views.CardDetailView.as_view(), name='card_detail'),
    path('book_list/', views.BookListView.as_view(), name="book_list"),
    path('book_list/<int:pk>/', views.BookDetailView.as_view(), name="book_detail")
]