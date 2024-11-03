export const fetchCoffeeRequest = () => ({
    type: 'FETCH_COFFEE_REQUEST',
  });
  
  export const fetchCoffeeSuccess = (coffeeList) => ({
    type: 'FETCH_COFFEE_SUCCESS',
    payload: coffeeList,
  });
  
  export const fetchCoffeeFailure = (error) => ({
    type: 'FETCH_COFFEE_FAILURE',
    payload: error,
  });
  