import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../redux/actions/userActions";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure('Error fetching users'));
    }
  };
};
