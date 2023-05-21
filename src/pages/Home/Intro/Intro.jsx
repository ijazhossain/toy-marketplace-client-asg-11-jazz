import React from 'react';
import img1 from '../../../assets/images/intro-1.jpg'
import img2 from '../../../assets/images/intro-2.jpg'
import img3 from '../../../assets/images/login.jpg'
const Intro = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto my-16 lg:my-32 gap-y-4 lg:gy-0'>
            <div >
                <h2 className='text-3xl ts-heading mb-4'>What we sale</h2>
                <p className='ts-paragraph'>
                    Discover Toylandia, your premier destination for purchasing toys online. Our site offers a delightful shopping experience with a wide selection of high-quality toys for sale.</p>
            </div>
            <div className='relative'>
                <img className='border-4 intro-img-top border-white w-1/2 hidden lg:block absolute top-[40px] 2xl:right-[-150px] ' src={img1} alt="" />
                <img className='w-full lg:w-[80%] mx-auto' src={img3} alt="" />
                <img className='border-4 intro-img-bottom border-white w-1/2 hidden lg:block absolute bottom-[-50px] 2xl:left-[-150px]' src={img2} alt="" />
            </div>
            <p className='self-end ts-paragraph'> We prioritize safety and quality, available on site undergoes thorough testing easy-to-use platform, finding and purchasing the perfect toy is quick and hassle-free. </p>
        </div>
    );
};

export default Intro;