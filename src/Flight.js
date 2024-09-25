import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const FlightForm = () => {
  const [formData, setFormData] = useState({ departure_airport: '', arrival_airport: '' });
  const [flightData, setFlightData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const access_key = '956b741a0da5a443753b6094fcd24ead'; // Store your API key here
    try {
      const params = {
        access_key,
        departure_airport: formData.departure_airport,
        arrival_airport: formData.arrival_airport,
      };
      const response = await axios.get('https://api.aviationstack.com/v1/flights', { params });
      setFlightData(response.data.data);
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  return (    
    <div className="d-flex container mt-5">
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute bg-dark w-100 start-0 top-0">
        <div className="container-fluid">
        <img src='skylogo1.png' alt='' width='120' height='50' />
        <Link to='/' className="navbar-brand ms-auto">
          <img className="" src='Home.png' alt='Home' width='50' height='50' />
        </Link>
      </div>
    </nav>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row mb-3">
          <h1 className='mt-5'>Flight Information</h1>
          <div className="col-md-6">
            <label htmlFor="departure_airport" className="form-label">Departure Airport:</label>
            <input
              type="text"
              id="departure_airport"
              name="departure_airport"
              value={formData.departure_airport}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter departure airport"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="arrival_airport" className="form-label">Arrival Airport:</label>
            <input
              type="text"
              id="arrival_airport"
              name="arrival_airport"
              value={formData.arrival_airport}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter arrival airport"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Search Flights</button>
      </form>

      <div className="row">
  {flightData && flightData.map((flight, index) => (
    <div key={index} className="col-md-12 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="card-title">Flight {flight.flight.iata}</h5>
              <p className="card-text">Departure: {flight.departure.airport}</p>
              <p className="card-text">Arrival: {flight.arrival.airport}</p>
              <p className="card-text">Status: {flight.flight_status}</p>
            </div>
            <div className="col-md-6 text-md-right mt-2">
              <p className="card-text">Scheduled Departure: {new Date(flight.departure.scheduled).toLocaleString()}</p>
              <p className="card-text">Scheduled Arrival: {new Date(flight.arrival.scheduled).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default FlightForm;
