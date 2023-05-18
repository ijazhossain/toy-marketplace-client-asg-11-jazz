import React from 'react';
import img from '../../../assets/images/add-toy.jpg'
const AddToys = () => {
    const handleAddToy = (event) => {
        event.preventDefault()
        const form = event.target;
        const imageUrl = form.imageUrl.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const ratings = form.ratings.value;
        const description = form.description.value;
        console.log(imageUrl, toyName, sellerName, sellerEmail, category, price, quantity, ratings, description);
    }
    return (
        <div className='w-[80%] mx-auto grid grid-cols-2 gap-4 '>

            <img src={img} alt="banner img" />
            <form onSubmit={handleAddToy} className='flex flex-col  justify-between'>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy image url</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='imageUrl' placeholder="Image url" className="input input-bordered w-full" />
                    </label>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="sellerName" placeholder="Seller name" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="sellerEmail" placeholder="Seller email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Select category</span>
                    </label>
                    <select className="select select-bordered w-full" name="category">
                        <option>Teddy Beer</option>
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

                        <input type="number" name="price" placeholder="$price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <label className="input-group">

                        <input type="number" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Detail description"></textarea>

                </div>
                <input type="submit" className="btn bg-[#874b30] w-full " value="Add Toy" />
            </form>

        </div>
    );
};

export default AddToys;