import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
/* ==============================
        All Toys Page
================================= */

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate();
    useTitle('All Toys')
    // console.log(imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description);
    const handleSearch = () => {
        fetch(`https://toy-store-server-asg-11.vercel.app/getToysByName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://toy-store-server-asg-11.vercel.app/allToys')
            const toysData = await response.json()
            // console.log(toysData);
            setToys(toysData)
            setLoading(false)


        }
        fetchData()
    }, [])
    if (loading) {
        return <Spinner></Spinner>
    }
    // console.log(searchText);
    return (
        <div className='w-[80%] mx-auto'>
            <div className='relative w-full lg:w-1/2 mx-auto my-12'>
                <input onChange={e => setSearchText(e.target.value)} className='w-full h-12 border border-[#8b6753] rounded-xl text-[#8b6753] px-5' type="search" name="" id="" placeholder='Search By Name' />
                <button onClick={handleSearch} className='w-full lg:w-fit mt-4 lg:mt-0 rounded-xl lg:absolute top-0 right-0 h-12 bg-[#8b6753] lg:rounded-s-none lg:rounded-e-xl px-5 text-white'>Search</button>
            </div>
            <div>

                <table className="table table-zebra w-full ">
                    <thead >
                        <tr >
                            <th className='bg-[#8b6753] text-white' >#</th>
                            <th className='bg-[#8b6753] text-white'>Seller</th>
                            <th className='bg-[#8b6753] text-white'>Toy name</th>
                            <th className='bg-[#8b6753] text-white'>Sub-Category</th>
                            <th className='bg-[#8b6753] text-white'>Price</th>
                            <th className='bg-[#8b6753] text-white'>Quantity</th>
                            <th className='bg-[#8b6753] text-white'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category.toUpperCase()}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td><button onClick={() => navigate(`/toy/${toy._id}`)} className='ml-5 bg-[#8b6753] text-white rounded-lg h-[40px] btn btn-sm border-0 text-xs '>Details</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default AllToys;