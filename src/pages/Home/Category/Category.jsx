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
    console.log(category);
    useEffect(() => {
        fetch(`http://localhost:5000/category/${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoryData(data)
            })
    }, [category])
    return (
        <div className='w-[80%] mx-auto'>
            <nav className='flex justify-center min-h-[35px] '>
                <NavLink onClick={() => handleLinkClick('teddy bear')} className={({ isActive }) =>
                    isActive ? "me-8 text-[#874b30] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[1.5px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2" : "me-5 text-[#874b30] font-semibold"
                }>Teddy beer</NavLink>
                <NavLink onClick={() => handleLinkClick('bird')} className={({ isActive }) =>
                    isActive ? "me-8 text-[#874b30] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[1.5px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2" : "me-5 text-[#874b30] font-semibold"
                }>Bird Toy</NavLink>

                <NavLink onClick={() => handleLinkClick('dragon')} className={({ isActive }) =>
                    isActive ? "me-8 text-[#874b30] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[1.5px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2" : "me-5 text-[#874b30] font-semibold"
                }>Dragon Toy</NavLink>
                <NavLink onClick={() => handleLinkClick('animal')} className={({ isActive }) =>
                    isActive ? "me-8 text-[#874b30] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[1.5px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2" : "me-5 text-[#874b30] font-semibold"
                }>Animal Toy</NavLink>
                <NavLink onClick={() => handleLinkClick('fish')} className={({ isActive }) =>
                    isActive ? "me-8 text-[#874b30] font-semibold focus:after:content-[''] focus:after:w-[40px] focus:after:h-[1.5px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2" : "me-5 text-[#874b30] font-semibold"
                }>Fish Toy</NavLink>
            </nav>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12'>
                {
                    categoryData.slice(0, showAll ? 6 : 3).map(item => <SingleCategory
                        key={item._id}
                        item={item}
                    ></SingleCategory>)
                }
            </div>
            <button onClick={() => setShowAll(!showAll)} className='btn  btn-wide mx-auto mt-12 flex items-center justify-center bg-[#874b30] border-0'>{!showAll ? 'Show All' : 'Show Less'}</button>

        </div>
    );
};

export default Category;