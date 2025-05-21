import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function CreateCustomer() {
  // useNavigate allows us to programmatically navigate to another route
  const navigate = useNavigate();

  // State to manage the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    city: '',
    total_spent: '0.00',
    date_joined: new Date().toISOString().split('T')[0], // current date in "YYYY-MM-DD" format
    days_spent: '0.00',
  });

  // State to handle error messages
  const [error, setError] = useState(null);

  // Function to update form state when input fields change
  const handleChange = (e) => {
    setFormData({
      ...formData, // copy existing fields
      [e.target.name]: e.target.value, // update the field that changed
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the default browser form submission

    // Make a POST request to create a new customer
    axios.post('http://127.0.0.1:8000/api/customers/', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Customer created:', response.data);
        navigate('/customers'); // redirect to customers list after success
      })
      .catch(error => {
        console.error('Error creating customer:', error);
        setError('Something went wrong. Please check the form.'); // display error to the user
      });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      {/* Back button to go to the previous page */}
      <button className="btn btn-light mb-3" onClick={() => navigate(-1)}>
        <BsArrowLeft className="me-2" /> Back
      </button>

      <h2 className="mb-4">Add New Customer</h2>

      {/* Show error alert if there's a problem during submission */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Customer creation form */}
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">

        {/* Name input field */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email input field */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone number input field */}
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            className="form-control"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        {/* City input field */}
        <div className="mb-4">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary w-100">
          Create Customer
        </button>
      </form>
    </div>
  );
}

export default CreateCustomer;
