import { useNavigate } from 'react-router-dom';
import errImg from '../../../assets/images/error.png'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center bg-[#f4f1ec] h-screen'>
            <img className='w-[70%] lg:w-[35%]' src={errImg} alt="error img" />
            <button onClick={() => navigate('/')} className='mt-12 border-0 capitalize text-[17px] bg-[#8b6753] btn btn-wide '>Back To Home</button>
        </div>
    );
};

export default NotFound;