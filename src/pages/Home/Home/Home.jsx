import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ImageGallery from '../ImageGallery/ImageGallery';
import Intro from '../Intro/Intro';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>
            <Category></Category>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;