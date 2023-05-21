import React from 'react';
import img from '../../../assets/images/about-banner.jpg'
const About = () => {
    return (
        <div className='about-banner flex flex-col items-center justify-center my-16 lg:my-28'>
            <div className='w-[80%] mx-auto space-y-8 lg:space-y-12 text-center overflow-scroll lg:overflow-visible py-8 my-28 lg:py-0 my:0'>
                <h1 className='text-3xl lg:text-5xl text-center text-white font-semibold'>About Toylandia playland, toys and stock. </h1>
                <p className='text-[#e7e7e7]'>

                    At Toylandia, we believe that play is an essential part of every child's development. Our mission is to provide a platform that inspires and empowers children to explore, learn, and create through play. Whether you're searching for educational toys, captivating puzzles, imaginative playsets, or collectible treasures, Toylandia has it all. With our commitment to quality, safety, and customer satisfaction, we strive to make every visit to Toylandia a joyful and memorable experience. Join us in this whimsical world of toys, where dreams take shape and countless adventures await!</p>
                <button className='btn  btn-wide mx-auto  flex items-center justify-center bg-[#8b6753] border-0'>Subscribe Now</button>
            </div>
        </div>
    );
};

export default About;