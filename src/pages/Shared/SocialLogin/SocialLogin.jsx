import googleImg from '../../../assets/images/google.png'

const SocialLogin = ({ children }) => {
    // console.log(children);
    return (
        <button className='border border-[#874b30] text-[#874b30] w-full mt-3 py-2 font-semibold rounded-lg flex items-center justify-center'>
            <img className='mr-3' width="20px" src={googleImg} alt="google img" />
            <span>{children}</span>
        </button>
    );
};

export default SocialLogin;