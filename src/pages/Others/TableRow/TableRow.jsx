import React from 'react';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ myToy, setReload, handleDelete }) => {
    const navigate = useNavigate()
    return (
        <tr key={myToy._id}>
            <th>
                <label>
                    <button onClick={() => handleDelete(myToy._id)} className="btn btn-circle btn-sm bg-[#8b6753]">
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

                <button onClick={() => navigate(`/updateToy/${myToy._id}`)} className="btn btn-sm bg-[#8b6753] border-0">Update</button>


            </th>
        </tr>
    );
};

export default TableRow;