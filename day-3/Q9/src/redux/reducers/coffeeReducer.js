const initialState = {
    loading: false,
    coffeeList: [],
    error: null,
  };
  
  export const coffeeReducer = (state = initialState, action) => {
    console.log(action?.payload?.sortBy);
    
    switch (action.type) {
      case 'FETCH_COFFEE_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_COFFEE_SUCCESS':
        return { ...state, loading: false, coffeeList: action.payload.sortBy == "asc"?action.payload.data.sort( (a, b)=> a.price-b.price) : action.payload.data.sort((a, b)=>b.price-a.price)};
      case 'FETCH_COFFEE_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  