// Action to start loading users
export const fetchUsersRequest = () => ({
    type: 'FETCH_USERS_REQUEST',
  });
  
  // Action when users are successfully fetched
  export const fetchUsersSuccess = (users) => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
  });
  
  // Action when there's an error fetching users
  export const fetchUsersFailure = (error) => ({
    type: 'FETCH_USERS_FAILURE',
    payload: error,
  });
  