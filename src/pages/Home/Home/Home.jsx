import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ImageGallery from '../ImageGallery/ImageGallery';


const Home = () => {

    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <Category></Category>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;