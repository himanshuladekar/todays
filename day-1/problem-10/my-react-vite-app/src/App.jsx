import React, { useReducer, useState } from 'react';
import './App.css';
// 1. Define the initial state
const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: {
      name: '',
      locality: {
        pinCode: '',
        landmark: '',
      }
    },
    state: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
  },
  courses_offered: [''],
};

// 2. Define the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_YEAR':
      return { ...state, establishment_year: action.payload };
    case 'SET_BUILDING':
      return { ...state, address: { ...state.address, building: action.payload } };
    case 'SET_STREET':
      return { ...state, address: { ...state.address, street: action.payload } };
    case 'SET_CITY':
      return { ...state, address: { ...state.address, city: { ...state.address.city, name: action.payload } } };
    case 'SET_PINCODE':
      return { 
        ...state, 
        address: { 
          ...state.address, 
          city: { 
            ...state.address.city, 
            locality: { ...state.address.city.locality, pinCode: action.payload } 
          }
        } 
      };
    case 'SET_LANDMARK':
      return { 
        ...state, 
        address: { 
          ...state.address, 
          city: { 
            ...state.address.city, 
            locality: { ...state.address.city.locality, landmark: action.payload } 
          } 
        } 
      };
    case 'SET_STATE':
      return { ...state, address: { ...state.address, state: action.payload } };
    case 'SET_LATITUDE':
      return { ...state, address: { ...state.address, coordinates: { ...state.address.coordinates, latitude: action.payload } } };
    case 'SET_LONGITUDE':
      return { ...state, address: { ...state.address, coordinates: { ...state.address.coordinates, longitude: action.payload } } };
    case 'SET_COURSES':
      return { ...state, courses_offered: action.payload };

    case 'RESET':
      return initialState;

    default:
      throw new Error('Invalid action type');
  }
};

const CollegeForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // 4. Handle form reset
  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setSubmitted(false);
    setError('');
  };

  // 5. Handle action dispatches for each field
  const handleInputChange = (type, value) => {
    try {
      dispatch({ type, payload: value });
      setError(''); // Clear error if any
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>College Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>College Name: </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => handleInputChange('SET_NAME', e.target.value)}
          />
        </div>

        <div>
          <label>Establishment Year: </label>
          <input
            type="text"
            value={state.establishment_year}
            onChange={(e) => handleInputChange('SET_YEAR', e.target.value)}
          />
        </div>

        <h3>Address Details</h3>
        <div>
          <label>Building: </label>
          <input
            type="text"
            value={state.address.building}
            onChange={(e) => handleInputChange('SET_BUILDING', e.target.value)}
          />
        </div>

        <div>
          <label>Street: </label>
          <input
            type="text"
            value={state.address.street}
            onChange={(e) => handleInputChange('SET_STREET', e.target.value)}
          />
        </div>

        <div>
          <label>City: </label>
          <input
            type="text"
            value={state.address.city.name}
            onChange={(e) => handleInputChange('SET_CITY', e.target.value)}
          />
        </div>

        <div>
          <label>Pincode: </label>
          <input
            type="text"
            value={state.address.city.locality.pinCode}
            onChange={(e) => handleInputChange('SET_PINCODE', e.target.value)}
          />
        </div>

        <div>
          <label>Landmark: </label>
          <input
            type="text"
            value={state.address.city.locality.landmark}
            onChange={(e) => handleInputChange('SET_LANDMARK', e.target.value)}
          />
        </div>

        <div>
          <label>State: </label>
          <input
            type="text"
            value={state.address.state}
            onChange={(e) => handleInputChange('SET_STATE', e.target.value)}
          />
        </div>

        <div>
          <label>Latitude: </label>
          <input
            type="text"
            value={state.address.coordinates.latitude}
            onChange={(e) => handleInputChange('SET_LATITUDE', e.target.value)}
          />
        </div>

        <div>
          <label>Longitude: </label>
          <input
            type="text"
            value={state.address.coordinates.longitude}
            onChange={(e) => handleInputChange('SET_LONGITUDE', e.target.value)}
          />
        </div>

        <div>
          <label>Courses Offered: </label>
          <input
            type="text"
            value={state.courses_offered}
            onChange={(e) => handleInputChange('SET_COURSES', e.target.value.split(','))}
          />
          <small>Enter courses separated by commas</small>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {/* 6. Display error if any */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* 7. Display submitted data */}
      {submitted && (
        <div>
          <h3>College Details Submitted:</h3>
          <div>College Name: {state.name}</div>
          <div>Establishment Year: {state.establishment_year}</div>
          <h4>Address:</h4>
          <div>Building: {state.address.building}</div>
          <div>Street: {state.address.street}</div>
          <div>City: {state.address.city.name}</div>
          <div>Pincode: {state.address.city.locality.pinCode}</div>
          <div>Landmark: {state.address.city.locality.landmark}</div>
          <div>State: {state.address.state}</div>
          <div>Coordinates: {state.address.coordinates.latitude}, {state.address.coordinates.longitude}</div>
          <div>Courses Offered: {state.courses_offered.join(', ')}</div>
        </div>
      )}
    </div>
  );
};

export default CollegeForm;
