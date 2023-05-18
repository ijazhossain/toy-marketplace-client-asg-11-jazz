import { Link } from 'react-router-dom';
import img from '../../assets/images/login.jpg'
/* ==========================
            Login
 ============================*/
const Login = () => {
    return (
        <div className="card lg:card-side w-[80%] mx-auto border border-[#874b30] bg-white my-24">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body my-auto ">
                <h2 className="text-[#874b30] font-semibold  text-3xl text-center mb-6">Please Login</h2>
                <form className=''>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">

                            <input type="password" name='email' placeholder="password" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input className='w-full bg-[#874b30] mt-8 py-2 text-white rounded-lg' type="submit" value="Login" />
                </form>
                <p className='mt-5'>Create an account? <Link to="/registration" className='text-[#874b30] font-semibold '>Register</Link></p>

            </div>
        </div>
    );
};

export default Login;