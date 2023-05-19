import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';
/* ===================================
        Modal to update toy info
======================================= */

const Modal = ({ myToy, setReload }) => {
    // console.log(myToy);
    const { _id, imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description } = myToy;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(price, quantity, description);
        const updateToy = {
            price,
            quantity,
            description,
        }
        fetch(`http://localhost:5000/updateToy/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateToy)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setReload(Date.now())
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Updated toy data successfully ',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="relative modal-box bg-[#f4f1ec] ">
                    <h2 className="text-center text-2xl mt-8 mb-3">Update Toy Information</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col  justify-between '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="price" placeholder="$price" className="input input-bordered w-full text-[#8b6753]" defaultValue={price} />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group">

                                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full text-[#8b6753]" defaultValue={quantity} />
                            </label>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <textarea rows="7" className="rounded-lg w-full text-[#8b6753] text-sm textarea-lg " name="description" placeholder="Detail description " defaultValue={description}></textarea>

                        </div>


                        <input type="submit" className="btn bg-[#874b30] w-full mt-8 border-none" value="Update" />

                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn bg-[#ea4335] text-white absolute top-0 right-0 border-0 btn-circle flex items-center justify-center">
                            <FontAwesomeIcon className='fa-lg' icon={faTimes}></FontAwesomeIcon>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;