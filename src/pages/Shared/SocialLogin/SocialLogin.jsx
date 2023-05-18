import { useContext, useState } from 'react';
import googleImg from '../../../assets/images/google.png'
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = ({ children }) => {
    // console.log(children);
    const { googleSignIn, setReload } = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setReload(Date.now())
                console.log(result);
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