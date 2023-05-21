import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login.jpg'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

/* ==========================
            Login
 ============================*/
const Login = () => {
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    useTitle('Login')
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error?.message);
                setError(error?.message)
            })
    }
    return (
        <>
            <div className="card lg:card-side w-[80%] mx-auto border border-[#8b6753] bg-white my-24">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body my-auto ">
                    <h2 className="text-[#8b6753] font-semibold  text-3xl  ">Welcome Back</h2>
                    <p className='mb-4 text-xs'>Please enter your details</p>
                    <form onSubmit={handleLogin}>
                        <div className="form-control mb-5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">

                                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input-group">

                                <input type="password" name='password' placeholder="password" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <input className='w-full bg-[#8b6753] mt-8 py-2 text-white rounded-lg' type="submit" value="Login" />
                    </form>
                    <SocialLogin>Log in with Google</SocialLogin>
                    <p className='mt-5'>Do not have an account? <Link to="/registration" className='text-[#8b6753] font-semibold '>Sign up for free</Link></p>
                    <p className='text-red-500 font-bold'>{error}</p>

                </div>

            </div>

        </>
    );
};

export default Login;