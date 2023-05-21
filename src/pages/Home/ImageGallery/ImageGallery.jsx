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

        <div className='w-[80%] mx-auto'>
            <h2 className='text-3xl ts-heading mb-10'>The Toy's Gallery</h2>
            <div className='grid grid-cols-6 gap-1 '>

                {
                    images.map(image => <img className='h-full' src={image.imageUrl} key={image._id} />)
                }
            </div>
        </div>
    );
};

export default ImageGallery;