import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {signup, error, isLoading} = useSignup(); 

    const handleSignUp = async (event) => {
        event.preventDefault(); //default is refereshing page
        console.log(email, password)
        // if (password !== confirmPassword) {

        // }

        await signup(email, password);

        
    }

    return (
        <form className='flex flex-col items-center mt-24 font-bold text-2xl' onSubmit={handleSignUp}>
            <div className="flex flex-col border border-green-500 space-y-3 p-5">
                <h3 className='font-bold self-center text-4xl'>Sign Up</h3>

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

                <label>Confirm Password:</label>
                <input 
                    type='password'
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                />
                <div className="pt-3 flex justify-center space-x-4">
                    <button disabled={isLoading} className='border p-2 rounded-xl border-green-500'>Sign Up</button>                   
                </div>
                
            </div>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Signup;