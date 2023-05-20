import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('https://toy-store-server-asg-11.vercel.app/images')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setImages(data)

            })
    }, [])



    return (
        <div className='grid grid-cols-6 gap-1 w-[80%] mx-auto my-12'>
            {
                images.map(image => <img className='h-full' src={image.imageUrl} key={image._id} />)
            }
        </div>
    );
};

export default ImageGallery;