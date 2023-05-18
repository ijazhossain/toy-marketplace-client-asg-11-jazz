import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/registration.jpg'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* =============================
        Registration
================================= */
const Registration = () => {
    const { createUser, setReload } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl, confirmPassword);
        setError('')
        if (!email || !password) {
            return;
        }
        if (password !== confirmPassword) {
            setError(`Passwords didn't match!`)
            return;
        }
        if (password.length === 0) {
            return;
        }
        if (password.length < 6) {
            setError(`Password must be 6 characters or more!`)
            return;
        }
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                sendEmailVerification(registeredUser)
                    .then(() => {
                        toast('Email verification sent to ' + email)
                    }).catch(error => {
                        console.log(error);
                        setError(error?.message)
                    })
                updateProfile(registeredUser, {
                    displayName: name,
                    photoURL: photoUrl
                }).then(() => {
                    setReload(Date.now())
                }).catch(error => {
                    console.log(error?.message);
                    setError(error?.message)
                })
                navigate('/')
            }).catch(error => {
                console.log(error);
                setError(error?.message)
            })
    }
    return (
        <div className="card lg:card-side w-[80%] mx-auto border border-[#874b30] bg-white my-24">
            <figure><img className='h-full' src={img} alt="Album" /></figure>
            <div className="card-body my-auto ">
                <h2 className="text-[#874b30] font-semibold  text-3xl  ">Create an Account</h2>
                <p className='mb-4 text-xs'>Let's get started with us.</p>
                <form onSubmit={handleRegister}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photoUrl' placeholder="Enter photo link" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">

                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <label className="input-group">

                            <input type="password" name='confirmPassword' placeholder="Confirm your password" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input className='w-full bg-[#874b30] mt-8 py-2 text-white rounded-lg' type="submit" value="Create Account" />
                </form>
                <SocialLogin>Sign up with Google</SocialLogin>
                <p className='mt-5'>Already have an account? <Link to="/login" className='text-[#874b30] font-semibold '>Login</Link></p>
                <p className='text-red-500 font-bold'>{error}</p>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;