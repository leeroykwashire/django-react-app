from django.urls import path
from . import views

urlpatterns = [

    path('customers/', views.CustomerList_CreateView.as_view(), name='customers'),
    path('customers/<int:customer_id>/', views.Customer_Read_Update_Delete_View.as_view(), name='customer'), 
    path('customers/by-name/<str:name>/', views.CustomerByNameView.as_view(), name='customer-by-name'),
    path('customers/by-email/<str:email>/', views.CustomerByEmailView.as_view(), name='customer-by-email'),
   

]

