import { Link } from 'react-router-dom';
import Input from '../../components/form/Input';
import React, { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState<string>('');;
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string|null>();
    
    const handelLogin = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log(email, password);
            setError(null)
        } catch (error:any) {
            if (error.response.status === 401) {
                setError("The email or password is not correct")
            }
        }
    }  
    
  return (
    <div>
        <div className="relative flex flex-col justify-center min-h-[83vh] overflow-hidden">
            <div className="w-full p-6 m-auto bg-base-300 rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-primary">Login</h1>
                <form className="space-y-4 mt-5" onSubmit={handelLogin}>
                    {error && <div className='alert py-2 px-4 alert-warning'>{error}</div>}
                    <Input label="Email" type="email" className="col-span-2" placeholder={'Email'} auth required setData={setEmail}/>
                    <Input label="Password" type="password" className="col-span-2" placeholder={'Password'} auth required setData={setPassword}/>
                    <div className='flex justify-center py-2'>
                        <button className='btn btn-primary w-full min-w-xs'>Login</button>
                    </div>
                    <Link to="/auth/register" className="text-base-content hover:underline hover:text-primary">Create Account ?</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage