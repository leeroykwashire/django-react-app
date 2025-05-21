from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=100)
    total_spent = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    date_joined = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

