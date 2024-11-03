import { fetchCoffeeFailure, fetchCoffeeRequest, fetchCoffeeSuccess } from "../redux/actions/coffeeActions";

export const fetchCoffee = (sortBy) => {
  return async (dispatch) => {
    dispatch(fetchCoffeeRequest());
    
    try {
      const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`);
      const data = await response.json();
      dispatch(fetchCoffeeSuccess({data:data.data, sortBy}));
    } catch (error) {
      dispatch(fetchCoffeeFailure('Failed to fetch coffee data'));
    }
  };
};
