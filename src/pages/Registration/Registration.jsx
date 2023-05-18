import { Link } from 'react-router-dom';
import img from '../../assets/images/registration.jpg'

import SocialLogin from '../Shared/SocialLogin/SocialLogin';
/* =============================
        Registration
================================= */
const Registration = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="card lg:card-side w-[80%] mx-auto border border-[#874b30] bg-white my-24">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body my-auto ">
                <h2 className="text-[#874b30] font-semibold  text-3xl  ">Create an Account</h2>
                <p className='mb-4'>Let's get started with us.</p>
                <form onSubmit={handleRegister}>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">

                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input className='w-full bg-[#874b30] mt-8 py-2 text-white rounded-lg' type="submit" value="Create Account" />
                </form>
                <SocialLogin>Sign up with Google</SocialLogin>
                <p className='mt-5'>Already have an account? <Link to="/login" className='text-[#874b30] font-semibold '>Login</Link></p>

            </div>
        </div>
    );
};

export default Registration;