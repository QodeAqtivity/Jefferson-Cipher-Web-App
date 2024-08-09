import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleLogin = async (event) => {
        event.preventDefault();

        // console.log(email, password);
        await login(email, password);
    }

    return (
        <form className='flex flex-col items-center mt-24 font-bold text-2xl' onSubmit={handleLogin}>
            <div className="flex flex-col border border-green-500 space-y-3 p-5">
                <h3 className='font-bold self-center text-4xl'>Login</h3>

                <label>Email:</label>
                <input
                    type='email'
                    onChange={(event) => setEmail(event.target.value)}  
                    value={email}
                />

                <label>Password:</label>
                <input 
                    type='password'
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />

                <div className="pt-3 flex justify-center space-x-4">
                    <button disabled={isLoading} className='border rounded-xl border-green-500 p-2' onClick={handleLogin}>Login</button>
                    <Link to='/signup'>
                        <button disabled={isLoading} className='border p-2 rounded-xl border-green-500'>Sign Up</button>
                    </Link>
                </div>
                
            </div>

            {error && <div className='error'>{error}</div>}
            
        </form>
    )
}

export default Login;