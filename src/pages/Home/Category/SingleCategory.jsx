import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCategory = ({ item }) => {
    // console.log(item);
    const { _id, imageUrl, toyName, price, ratings, description } = item;
    const navigate = useNavigate();
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-1/2'><img className='h-full' src={imageUrl} alt="toy img" /></figure>
            <div className="card-body p-4">
                <div className='mb-8 '>
                    <h2 className="card-title font-bold text-lg  mb-4 lg:mb-10">
                        {toyName}
                    </h2>

                    <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'><span className='text-[#8b6753] font-bold'>Price: </span> ${price}</p>
                    <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'>
                        <span className='text-[#8b6753] font-bold'>Ratings: </span>

                        {ratings} stars
                    </p>

                    <p className='text-[17px] font-semibold mb-4 text-[#8b6753]'></p>
                </div>
                <div className="card-actions justify-end mt-auto">
                    <button onClick={() => navigate(`/toy/${item._id}`)} className="btn bg-[#8b6753] border-0 text-white">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;