import axios from 'axios';

const QuizFetch = () => {
  
  return async (dispatch) => {
    dispatch({
      type: 'LOADING'
    });

    try {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
      dispatch({
        type: 'SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.message
      });
    }
  };
};

export default QuizFetch;