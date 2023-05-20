import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const myToy = useLoaderData();
    console.log(myToy);
    const { _id, imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description } = myToy;
    // console.log(_id, imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const description = form.description.value;
        // console.log(price, quantity, description);
        const updateToy = {
            price,
            quantity,
            description,
        }
        fetch(`https://toy-store-server-asg-11.vercel.app/updateToy/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateToy)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    // setReload(Date.now())
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Updated toy data successfully ',
                    })
                }
            })


    }
    return (

        <div className="card lg:card-side w-[80%] mx-auto border border-[#874b30] bg-white my-24">
            <figure className='w-1/4'><img className='h-full' src={imageUrl} alt="Album" /></figure>
            <div className="card-body my-auto ">
                <h2 className="text-[#874b30] font-semibold  text-3xl  ">{toyName}</h2>
                <p className='mb-4 text-xs'>Please enter your update details</p>

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
                        <textarea rows="7" className="rounded-lg border border-[#d2d4d7] w-full text-[#8b6753] text-sm textarea-lg " name="description" placeholder="Detail description " defaultValue={description}></textarea>

                    </div>


                    <input type="submit" className="btn bg-[#874b30] w-full mt-8 border-none" value="Update" />

                </form>

            </div>

        </div>


    );
};

export default UpdateToy;