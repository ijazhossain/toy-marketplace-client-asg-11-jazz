import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // sign out successful
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const navItems = <>
        <Link className='text-[#8b6753] ml-7 font-semibold text-[17px] mb-2 lg:mb-0' to="/">Home</Link>
        <Link className='text-[#8b6753] ml-7 font-semibold text-[17px] mb-2 lg:mb-0' to="/allToys">All Toys</Link>
        <Link className='text-[#8b6753] ml-7 font-semibold text-[17px] mb-2 lg:mb-0' to="/addToy">Add A Toy </Link>
        <Link className='text-[#8b6753] ml-7 font-semibold text-[17px] mb-2 lg:mb-0' to="/myToys">My Toys </Link>
        <Link className='text-[#8b6753] ml-7 font-semibold text-[17px] mb-2 lg:mb-0' to="/blogs">Blogs</Link>
        <span className="tooltip" data-tip={user?.displayName}>{user && <img width="60px" height="60px" className='mb-2 lg:mb-0 rounded-full ml-7 border-2 border-[#8b6753]' src={user?.photoURL} />}</span>
        {
            user
                ?
                <button onClick={handleLogOut} className='ml-7 font-semibold  bg-[#8b6753] text-white rounded-lg h-[40px] lg:px-5 px-0 mb-2 lg:mb-0'>Logout</button>
                :
                <Link to="/login"><button className='ml-7 font-semibold  bg-[#8b6753] text-white rounded-lg h-[40px] lg:px-5 px-0 mb-2 lg:mb-0'>Login</button></Link>}

    </>
    return (
        <div className='bg-white py-3 text-[#8b6753]'>
            <div className="navbar w-[80%]   mx-auto">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>

                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                        <span className='ml-3 font-bold text-2xl'>Toylandia</span></a>
                </div>
                <div className="navbar-center hidden lg:flex justify-end w-[80%]">
                    <ul className="menu menu-horizontal px-1 flex items-center">

                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;