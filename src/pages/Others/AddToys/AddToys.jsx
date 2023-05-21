import React, { useContext } from 'react';
import img from '../../../assets/images/add-toy.jpg'
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

/* =======================================
            Add Toy Page
========================================== */

const AddToys = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const handleAddToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const imageUrl = form.imageUrl.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const ratings = parseFloat(form.ratings.value);
        const description = form.description.value;
        // console.log(imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description);
        const newToy = { imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description }
        // console.log(newToy);
        fetch('https://toy-store-server-asg-11.vercel.app/addToy', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Your toy added successfully',

                    })
                }
            })

    }
    return (
        <div className='w-[90%] md:w-[80%] mx-auto grid lg:grid-cols-2  bg-white my-24 border border-[#8b6753]'>

            <img className='h-full' src={img} alt="banner img" />
            <form onSubmit={handleAddToy} className='flex flex-col  justify-between p-12'>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy image url</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='imageUrl' placeholder="Image url" className="input input-bordered w-full" required />
                    </label>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered w-full" required />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="sellerName" placeholder="Seller name" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name="sellerEmail" placeholder="Seller email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Select category</span>
                    </label>
                    <select className="select select-bordered w-full" name="category" required>
                        <option>Teddy Bear</option>
                        <option>Bird Toy</option>
                        <option>Dinosaur Toy</option>
                        <option>Fish Toy</option>
                        <option>Animal Toy</option>

                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="number" name="price" placeholder="$price" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <label className="input-group">

                        <input type="number" name="ratings" placeholder="Ratings" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full textarea-lg " name="description" placeholder="Detail description" required></textarea>

                </div>
                <input type="submit" className="btn bg-[#8b6753] w-full mt-8" value="Add Toy" />
            </form>

        </div>
    );
};

export default AddToys;