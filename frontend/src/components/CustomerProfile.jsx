import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'; // Bootstrap-style back arrow icon from react-icons

function CustomerProfile() {
  // State to hold the customer data
  const [customer, setCustomer] = useState(null);

  // Get the route parameter from the URL (e.g., /customers/3 → customerId = 3)
  const params = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const customerId = parseInt(params.customerId); // Convert the ID to a number

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Fetch the customer data by ID from the backend
    axios.get(`http://127.0.0.1:8000/api/customers/${customerId}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Set the customer data in state
        setCustomer(response.data);
      })
      .catch(error => {
        // Log any error that occurs during the fetch
        console.error('Error fetching customer:', error);
      });
  }, [customerId]); // Runs again if customerId changes

  // If customer data hasn't loaded yet, show a loading message
  if (!customer) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  // Render the customer profile
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">

          {/* Back button to return to the previous page */}
          <button 
            className="btn btn-outline-secondary mb-3"
            onClick={() => navigate(-1)} // Go back to previous route
          >
            <BsArrowLeft className="me-2" /> Back
          </button>

          {/* Profile Heading */}
          <h3 className="card-title text-center mb-4">Customer Profile</h3>

          {/* Display customer details using a Bootstrap list group */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Name:</strong> {customer.name}</li>
            <li className="list-group-item"><strong>Email:</strong> {customer.email}</li>
            <li className="list-group-item"><strong>Phone:</strong> {customer.phone_number}</li>
            <li className="list-group-item"><strong>City:</strong> {customer.city}</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
