const initialState = {
  loading: false,
  error: null,
  data: [],
};


const Quizes = (state = initialState , action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true, error: null};
            case 'SUCCESS':
                return {...state, loading: false, data: action.payload};
                case 'ERROR':
                    return {...state, loading: false, error: action.payload};
                    
            default :
                        return initialState;
    }
}




export default Quizes;

