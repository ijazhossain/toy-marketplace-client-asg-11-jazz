import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ImageGallery from '../ImageGallery/ImageGallery';
import Intro from '../Intro/Intro';
import About from '../About/About';
import useTitle from '../../../hooks/useTitle';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    useTitle('Home')
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000"
                data-aos-anchor-placement="center-center"
            >
                <Intro></Intro>
            </div>
            <Category></Category>
            <About></About>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;