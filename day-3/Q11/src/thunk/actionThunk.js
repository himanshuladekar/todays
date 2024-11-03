import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../redux/actions/actionTypes';

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.post('https://reqres.in/api/login', {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
          
      });
      console.log(response.data);
      
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
      localStorage.setItem('token', response.data.token); // Store token in localStorage for persistence
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };
};
