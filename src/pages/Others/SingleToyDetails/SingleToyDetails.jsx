import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
/* ==================================
        Single Job Details
====================================== */
const SingleToyDetails = () => {
    const [toyDetails, setToyDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const { toyId } = useParams();
    // console.log(toyId);
    const { imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description } = toyDetails;
    useEffect(() => {
        fetch(`https://toy-store-server-asg-11.vercel.app/toy/${toyId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToyDetails(data);
                setLoading(false)

            })
    }, [])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="card lg:card-side w-[80%] mx-auto bg-white my-20 border border-[#874b30] ">
                <figure><img src={imageUrl} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-xl lg:text-4xl mb-4 lg:mb-10">
                        <span >Toy Name: </span>{toyName}
                    </h2>
                    <div className='mb-8'>
                        <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'>
                            <span className='text-[#874b30] font-bold'>Seller name:</span> {sellerName}
                        </p>
                        <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'><span className='text-[#874b30] font-bold'>Seller email: </span>{sellerEmail} </p>
                        <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'><span className='text-[#874b30] font-bold'>Price: </span> ${price}</p>
                        <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'>
                            <span className='text-[#874b30] font-bold'>Ratings: </span>
                            <FontAwesomeIcon className='text-[#FDCC0D]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FDCC0D]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FDCC0D]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FDCC0D]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FDCC0D]' icon={faStarHalf} />
                            {ratings}
                        </p>
                        <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'><span className='text-[#874b30] font-bold'>Quantity:</span> {quantity}</p>
                        <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'></p>
                    </div>
                    <p className='text-[17px] font-semibold  text-[#8b6753]'><span>{description}</span></p>

                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;