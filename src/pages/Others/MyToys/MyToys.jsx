import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import Modal from '../Modal/Modal';
import Swal from 'sweetalert2';
import Sort from '../Sort/Sort';

/* =============================
        MY Toys Page
=================================*/
const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToyDetails, setMyToyDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')
    const [ascendingData, setAscendingData] = useState([])
    const [descendingData, setDescendingData] = useState([])

    const handleDelete = (_id) => {
        // console.log(_id);
        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Toy deleted successfully ',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                    const remaining = myToyDetails.filter(myToy => myToy._id !== _id);
                    setMyToyDetails(remaining);
                }
            })
    }
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if (option === 'ascending') {
            setLoading(true)

            fetch(`http://localhost:5000/myAscendingToy?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setAscendingData(data);
                    console.log(ascendingData);
                    setLoading(false)

                })


        } else if (option === 'descending') {

            setLoading(true)

            fetch(`http://localhost:5000/myDescendingToy?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setDescendingData(data);
                    console.log(ascendingData);
                    setLoading(false)

                })


        }
    }


    useEffect(() => {
        fetch(`http://localhost:5000/myToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyToyDetails(data);
                setLoading(false)

            })
    }, [user?.email, reload])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="overflow-x-auto w-full lg:w-[80%] mx-auto py-20">
            <Sort
                handleOptionChange={handleOptionChange}
                selectedOption={selectedOption}></Sort>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className='bg-[#874b30] text-white'>

                        </th>
                        <th className='bg-[#874b30] text-white'>Toy Name</th>
                        <th className='bg-[#874b30] text-white'>Seller name / Email</th>
                        <th className='bg-[#874b30] text-white'>Sub-category</th>
                        <th className='bg-[#874b30] text-white'>Price</th>
                        <th className='bg-[#874b30] text-white'>Ratings</th>
                        <th className='bg-[#874b30] text-white'>Quantity</th>
                        <th className='bg-[#874b30] text-white'></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {selectedOption === '' ?
                        myToyDetails.map(myToy => <tr key={myToy._id}>
                            <th>
                                <label>
                                    <button onClick={() => handleDelete(myToy._id)} className="btn btn-circle btn-sm bg-[#874b30]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>

                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myToy?.imageUrl} alt="Toy image" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{myToy?.toyName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {myToy?.sellerName}
                                <br />
                                <span className="badge badge-ghost badge-sm">{myToy?.sellerEmail}</span>
                            </td>
                            <td>{myToy?.category}</td>
                            <td>${myToy?.price}</td>
                            <td>

                                {myToy?.ratings}
                            </td>
                            <td>{myToy?.quantity}</td>
                            <th>
                                {/* Modal BTN */}
                                <label htmlFor="my-modal-6" className="btn btn-sm bg-[#874b30] border-0">Update</label>
                                {/* Modal body */}
                                <Modal
                                    myToy={myToy}
                                    setReload={setReload}
                                ></Modal>

                            </th>
                        </tr>) :
                        selectedOption === 'ascending' ?
                            ascendingData.map(myToy => <tr key={myToy._id}>
                                <th>
                                    <label>
                                        <button onClick={() => handleDelete(myToy._id)} className="btn btn-circle btn-sm bg-[#874b30]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>

                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myToy?.imageUrl} alt="Toy image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myToy?.toyName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myToy?.sellerName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{myToy?.sellerEmail}</span>
                                </td>
                                <td>{myToy?.category}</td>
                                <td>${myToy?.price}</td>
                                <td>

                                    {myToy?.ratings}
                                </td>
                                <td>{myToy?.quantity}</td>
                                <th>
                                    {/* Modal BTN */}
                                    <label htmlFor="my-modal-6" className="btn btn-sm bg-[#874b30] border-0">Update</label>
                                    {/* Modal body */}
                                    <Modal
                                        myToy={myToy}
                                        setReload={setReload}
                                    ></Modal>

                                </th>
                            </tr>) :
                            selectedOption === 'descending' ?
                                descendingData.map(myToy => <tr key={myToy._id}>
                                    <th>
                                        <label>
                                            <button onClick={() => handleDelete(myToy._id)} className="btn btn-circle btn-sm bg-[#874b30]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>

                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myToy?.imageUrl} alt="Toy image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{myToy?.toyName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {myToy?.sellerName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{myToy?.sellerEmail}</span>
                                    </td>
                                    <td>{myToy?.category}</td>
                                    <td>${myToy?.price}</td>
                                    <td>

                                        {myToy?.ratings}
                                    </td>
                                    <td>{myToy?.quantity}</td>
                                    <th>
                                        {/* Modal BTN */}
                                        <label htmlFor="my-modal-6" className="btn btn-sm bg-[#874b30] border-0">Update</label>
                                        {/* Modal body */}
                                        <Modal
                                            myToy={myToy}
                                            setReload={setReload}
                                        ></Modal>

                                    </th>
                                </tr>)
                                : ''
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;