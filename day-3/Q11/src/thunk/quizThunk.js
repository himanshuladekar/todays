import axios from 'axios';
import { FETCH_QUIZ_FAILURE, FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS } from '../redux/actions/actionTypes';

export const fetchQuiz = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_QUIZ_REQUEST });
    try {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
      console.log(response.data);
      
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_QUIZ_FAILURE, payload: error.message });
    }
  };
};
