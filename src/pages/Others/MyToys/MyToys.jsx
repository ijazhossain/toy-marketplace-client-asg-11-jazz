import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import Swal from 'sweetalert2';
import Sort from '../Sort/Sort';
import TableRow from '../TableRow/TableRow';

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
        fetch(`https://toy-store-server-asg-11.vercel.app/toy/${_id}`, {
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

            fetch(`https://toy-store-server-asg-11.vercel.app/myAscendingToy?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setAscendingData(data);
                    // console.log(ascendingData);
                    setLoading(false)

                })


        } else if (option === 'descending') {

            setLoading(true)

            fetch(`https://toy-store-server-asg-11.vercel.app/myDescendingToy?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setDescendingData(data);
                    // console.log(ascendingData);
                    setLoading(false)

                })
        }
    }

    useEffect(() => {
        fetch(`https://toy-store-server-asg-11.vercel.app/myToy?email=${user?.email}`)
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

                    {selectedOption === '' ?
                        myToyDetails.map(myToy => <TableRow
                            key={myToy._id}
                            myToy={myToy}
                            setReload={setReload}
                            handleDelete={handleDelete}
                        ></TableRow>)
                        :
                        selectedOption === 'ascending' ?
                            ascendingData.map(myToy => <TableRow
                                key={myToy._id}
                                myToy={myToy}
                                setReload={setReload}
                                handleDelete={handleDelete}
                            ></TableRow>) :
                            selectedOption === 'descending' ?
                                descendingData.map(myToy => <TableRow
                                    key={myToy._id}
                                    myToy={myToy}
                                    setReload={setReload}
                                    handleDelete={handleDelete}
                                ></TableRow>)
                                : ''
                    }
                </tbody>

            </table>

        </div>
    );
};

export default MyToys;