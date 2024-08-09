import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json();  //JWT on success, or error message on failure

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        
        if (response.ok) {
            // save the user to local storage (JWT and email property)
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
        }

    };
    
    return { login, isLoading, error };
}