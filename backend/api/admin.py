from django.contrib import admin
# import the models
from .models import Customer


# display your models in the admin panel
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'city', 'total_spent', 'date_joined')
admin.site.register(Customer, CustomerAdmin)
