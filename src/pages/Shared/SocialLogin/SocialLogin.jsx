import { useContext, useState } from 'react';
import googleImg from '../../../assets/images/google.png'
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = ({ children }) => {
    // console.log(children);
    const { googleSignIn, setReload } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setReload(Date.now())
                // console.log(result);
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    return (
        <>
            <button onClick={handleGoogleSignIn} className='border border-[#874b30] text-[#874b30] w-full mt-3 py-2 font-semibold rounded-lg flex items-center justify-center'>
                <img className='mr-3' width="20px" src={googleImg} alt="google img" />
                <span>{children}</span>
            </button>
            <p className='text-red-500 font-bold'>{error}</p>

        </>
    );
};

export default SocialLogin;