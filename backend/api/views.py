from .serializers import CustomerSerializer
from .models import Customer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CustomerList_CreateView(APIView):  
    def get(self, request):  
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Customer_Read_Update_Delete_View(APIView):
    def get(self, request, customer_id):
        try:
            customer = Customer.objects.get(pk=customer_id)
            serializer =CustomerSerializer(customer)
            return Response(serializer.data)
        except Customer.DoesNotExist:
            return Response({'error': 'Customer not found'}, status=status.HTTP_404_NOT_FOUND)
            
    def delete(self, request, customer_id):
        try:
            customer = Customer.objects.get(pk=customer_id)
            customer.delete()
            return Response({'message': 'Customer deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except Customer.DoesNotExist:
            return Response({'error': 'Customer not found'}, status=status.HTTP_404_NOT_FOUND)
        
    def put(self, request, customer_id):
        try:
            customer = Customer.objects.get(pk=customer_id)
        except Customer.DoesNotExist:
            return Response({'error': 'Customer not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CustomerSerializer(customer, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
# get and fliter methods

#get customer with a specific name
class CustomerByNameView(APIView):
    def get(self, request, name):
        customers = Customer.objects.filter(name__icontains=name)
        if customers.exists():
            serializer = CustomerSerializer(customers, many=True)
            return Response(serializer.data)
        return Response({'error': 'No customers found with that name'}, status=status.HTTP_404_NOT_FOUND)

#get customer with a specific email
class CustomerByEmailView(APIView):
    def get(self, request, email):
        try:
            customer = Customer.objects.get(email=email)
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        except Customer.DoesNotExist:
            return Response({'error': 'Customer not found with that email'}, status=status.HTTP_404_NOT_FOUND)
        
# get customers who spent more than specified amount
class CustomersWhoSpentView(APIView):
    def get(self, request, total_spent):
        try:
            customers = Customer.objects.filter(total_spent__gte=total_spent)
            if customers.exists():
                serializer = CustomerSerializer(customers, many=True)
                return Response(serializer.data)
            return Response({'error': 'No customers found with the specified details'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#get customers with the city name of harare(case insensitive)
