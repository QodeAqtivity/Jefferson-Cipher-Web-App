import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        //do not need to send request to backend to logout
        //just update global state and get rid of JWT from local storage

        localStorage.removeItem('user');
        
        //dispatch logout action
        dispatch({type: 'LOGOUT'});
    };

    return {logout}
};