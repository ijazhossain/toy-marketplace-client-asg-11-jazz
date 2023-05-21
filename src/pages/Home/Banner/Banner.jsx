import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../../assets/images/banner.jpg'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row w-[80%] mx-auto gap-8 lg:gap-20'>
            <div className='relative lg:w-1/2 space-y-4 lg:space-y-8 pt-8 lg:pt-12 xl:pt-24'>
                <h2 className='text-3xl lg:text-5xl text-[#8b6753] leading-relaxed lg:leading-relaxed font-semibold'>Toylandia<br></br> Unlock a World of <br></br>Wondrous Toys!</h2>
                <p className='text-[#8b6753] leading-relaxed text-justify text-[17px]'> The enchantment and playfulness come alive! Immerse yourself in a captivating marketplace filled with an extensive array of toys for all ages. From nostalgic favorites to the hottest new releases, Toylandia offers an extraordinary collection that ignites imagination and sparks endless joy. Delve into a magical realm of toys and embark on unforgettable adventures. Join us in creating cherished memories and treasured moments of laughter. Explore Toylandia today and let the wonders of play unfold before your eyes!</p>
                <button className='btn lg:btn-lg flex items-center justify-center bg-[#8b6753] text-white rounded-lg h-[40px] px-5 border-0 capitalize'>Purchase
                    <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                <div className="w-[20px] h-[20px] rounded-full circle-1 bg-[#e2d3bb] absolute top-1/4 right-[10%]"></div>
                <div className="w-[20px] h-[20px] rounded-full circle-2 bg-[#80311aab] absolute bottom-[15%] left-1/2"></div>
                <div className="w-[20px] h-[20px] rounded-full circle-3 bg-[#e9d147] absolute bottom-1/2 left-[-20%]"></div>
            </div>
            <img className='lg:w-1/2' src={img} alt="" />

        </div>
    );
};

export default Banner;