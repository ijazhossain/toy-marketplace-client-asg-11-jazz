import React, { useEffect, useState } from 'react';
import ActiveRoutes from '../../../Routes/ActiveRoutes';
import { NavLink } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [categoryData, setCategoryData] = useState([])
    const [category, setCategory] = useState('all');
    const [showAll, setShowAll] = useState(false)
    const handleLinkClick = (categoryName) => {
        setCategory(categoryName)
    }
    // console.log(category);
    useEffect(() => {
        fetch(`https://toy-store-server-asg-11.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCategoryData(data)
            })
    }, [category])
    return (
        <div className='w-[80%] mx-auto my-16 lg:my-32'>
            <nav className='flex justify-center min-h-[35px] mb-12 lg:mb-20'>
                <NavLink onClick={() => handleLinkClick('teddy bear')} className={({ isActive }) =>
                    isActive ? "me-6 lg:me-12 text-[#8b6753] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[2px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2 text-lg" : "me-5 text-[#8b6753] font-bold"
                }>Teddy beer</NavLink>


                <NavLink onClick={() => handleLinkClick('dragon')} className={({ isActive }) =>
                    isActive ? "me-6 lg:me-12 text-[#8b6753] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[2px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2 text-lg" : "me-5 text-[#8b6753] font-bold"
                }>Dragon</NavLink>
                <NavLink onClick={() => handleLinkClick('animal')} className={({ isActive }) =>
                    isActive ? "me-6 lg:me-12 text-[#8b6753] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[2px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2 text-lg" : "me-5 text-[#8b6753] font-bold"
                }>Animal</NavLink>

            </nav>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12'>
                {
                    categoryData.slice(0, showAll ? 6 : 3).map(item => <SingleCategory
                        key={item._id}
                        item={item}
                    ></SingleCategory>)
                }
            </div>
            <button onClick={() => setShowAll(!showAll)} className='btn  btn-wide mx-auto mt-12 lg:mt-20 flex items-center justify-center bg-[#8b6753] border-0 capitalize'>{!showAll ? 'Show All' : 'Show Less'}</button>

        </div>
    );
};

export default Category;