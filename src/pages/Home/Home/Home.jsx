import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ImageGallery from '../ImageGallery/ImageGallery';
import Intro from '../Intro/Intro';
import About from '../About/About';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Category></Category>
            <About></About>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;