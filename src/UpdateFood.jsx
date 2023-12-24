import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';
import { useNavigate, useLocation, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { Helmet } from 'react-helmet-async';

const UpdateFood = () => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const navigation = useNavigation();

    if(navigation.loading == "loading")
    return <Loading></Loading>;

    const singleData = useLoaderData();
  //  console.log(singleData);

    const { _id, name, image, origin, price, category, quantity, description, count, madeBy, email } = singleData;

    //console.log(price);

    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const origin = form.origin.value;
        const price = form.price.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        if(price < 0){
            toast.error('Please input valid Price');
            return;
        }

        if(quantity < 0){
            toast.error('Please input valid Quantity');
            return;
        }

        const newFood = { name, image, origin, price, category, quantity, description, count, madeBy, email };

      //  console.log(newFood);

        // Update data to the server

            fetch(`http://localhost:5000/foods/${singleData._id}`, {
                method: "PUT",
              //  mode: 'no-cors',
                headers: {
                    'content-type': 'application/json'
                  //  'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(newFood)
                })
                .then((res) => res.json())
                .then((data) => {
                  //  console.log(data);
                    if(data.modifiedCount || data.upsertedCount){
                        swal("Done!", "Product Updated Successfully!", "success");
                        navigate('/my added items');
                    }
                    else{
                        toast.error('Data is same. Please Update');
                    }
            });
    }

    return (
        <div>
            <section className="">
            <Helmet>
                <title>Bite | Update</title>
            </Helmet>
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-2xl font-bold  text-center">Update a Food Item</h2>
                    <form onSubmit={handleUpdateFood} action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium ">Food Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" defaultValue={name} required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium ">Image URL</label>
                                <input type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Image URL" defaultValue={image} required></input>
                            </div>
                            <div className="w-full">
                                <label htmlFor="origin" className="block mb-2 text-sm font-medium ">Origin</label>
                                <input type="text" name="origin" id="origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Country Name" defaultValue={origin} required></input>
                            </div>
                    
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium ">Price</label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2999" defaultValue={price} required></input>
                            </div>
                            <div className="w-full">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium ">Category</label>
                                <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Food category" defaultValue={category} required></input>
                            </div>
                            <div className="w-full">
                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium ">Quantity</label>
                                <input type="number" name="quantity" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2999" defaultValue={quantity} required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium ">Description</label>
                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Food description" defaultValue={description} required></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button type='submit' className="btn bg-blue-500">Update Item</button>
                        </div>
                    </form>
                </div>
                </section>
        </div>
    );
};

export default UpdateFood;