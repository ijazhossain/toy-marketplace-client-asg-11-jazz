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
        <Link className='ml-5 font-semibold' to="/">Home</Link>
        <Link className='ml-5 font-semibold' to="/allToys">All Toys</Link>

        <Link className='ml-5 font-semibold' to="/addToy">Add A Toy </Link>
        <Link className='ml-5 font-semibold' to="/myToys">My Toys </Link>
        <Link className='ml-5 font-semibold' to="/blogs">Blogs</Link>
        <span className="tooltip" data-tip={user?.displayName}>{user && <img width="60px" height="60px" className='rounded-full ml-5 border-2 border-[#874b30]' src={user?.photoURL} />}</span>
        {
            user
                ?
                <button onClick={handleLogOut} className='ml-5 font-semibold  bg-[#874b30] text-white rounded-lg h-[40px] px-5 '>Logout</button>
                :
                <Link to="/login"><button className='ml-5 font-semibold  bg-[#874b30] text-white rounded-lg h-[40px] px-5 '>Login</button></Link>}

    </>
    return (
        <div className='bg-white py-5 text-[#874b30]'>
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
                        <span className='ml-3 font-bold text-2xl'>Toy Shop</span></a>
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