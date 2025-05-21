import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';

function Customers() {
  // State to store the full list of customers from the server
  const [customers, setCustomers] = useState([]);

  // State to store the current search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect runs once after the component mounts to fetch customer data
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/customers/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Set the customer data to state when the API call succeeds
        setCustomers(response.data);
      })
      .catch(error => {
        // Log any errors from the API call
        console.error('Error fetching customers:', error);
      });
  }, []);

  // Filter customers based on the search term (case-insensitive match)
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='container-fluid w-75 mt-5'>

        {/* Header section with title and "Add Customer" button */}
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h1 className='mb-0'>Customers</h1>

          {/* Link styled as a Bootstrap button, takes the user to the create customer form */}
          <Link to={'/customers/create/'} className="btn btn-success rounded-0 d-flex align-items-center gap-2">
            <FiUserPlus size={18} /> Add Customer
          </Link>
        </div>

        {/* Input field to allow users to search customers by name */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
          />
        </div>

        {/* If no customers match the search, show a message */}
        {filteredCustomers.length === 0 ? (
          <p>No customers found.</p>
        ) : (
          // Table showing the list of matching customers
          <table className="table table-secondary">
            <thead>
              <tr className='table-success'>
                <th className='p-3'>ID</th>
                <th className='p-3'>Name</th>
                <th className='p-3'>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through filtered customers and display each one */}
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className='p-3'>{customer.id}</td>
                  <td className='p-3'>
                    {/* Link to the individual customer profile */}
                    <Link className='text-decoration-none' to={`/customers/${customer.id}`}>
                      {customer.name}
                    </Link>
                  </td>
                  <td className='p-3'>{customer.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Customers;
