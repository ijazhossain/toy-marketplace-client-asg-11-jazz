import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({ children }) => {
    return (
        <NavLink className={({ isActive }) =>
            isActive ? "me-6 text-[#874b30] font-semibold focus:after:content-[''] focus:after:w-[32px] focus:after:h-[1.5px] focus:after:block focus:after:bg-red-500 focus:after:mx-auto focus:after:mt-2" : "me-5 text-[#874b30] font-semibold"
        }>{children}</NavLink>
    );
};

export default ActiveRoutes;