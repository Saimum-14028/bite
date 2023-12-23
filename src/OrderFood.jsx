import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';
import { useNavigate, useLocation, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const OrderFood = () => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const navigation = useNavigation();

    if(navigation.loading == "loading")
    return <Loading></Loading>;

    const singleData = useLoaderData();
  //  console.log(singleData);

    let { _id, name, image, origin, price, category, quantity, description, count, madeBy, email } = singleData;

    //console.log(price);

    const handleOrder = event => {
        event.preventDefault();

        const form = event.target;
        console.log(event.timeStamp);

        const orderQuantity = parseInt(form.quantity.value);

        if(quantity<1){
            toast.error('Item not available');
            return;
        }

        if(orderQuantity<1){
            toast.error('Please input valid Quantity');
            console.log(quantity, orderQuantity);
            return;
        }

        if(orderQuantity > quantity){
            toast.error('Please input valid Quantity');
            console.log(quantity, orderQuantity);
            return;
        }

        const orderBy = user.displayName;
        const orderemail = user.email;

        if(orderemail === email){
            toast.error('Sorry!You cant buy your own product');
            console.log(email, orderemail);
            return;
        }
        
        quantity = quantity-orderQuantity;
        count = parseInt(count) + 1;

        console.log(quantity);

        const newProduct = { name, image, origin, price, category, quantity , description, count, madeBy, email , orderQuantity, orderBy, orderemail };

        console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
           // mode: 'no-cors',
            headers: {
                'content-type': 'application/json'
              //  'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                if(data.insertedId){
                    swal("Done!", "Order Completed!", "success");
                }
            })
            .catch(error => {
                //    console.log(error);
                    swal("Error!", error.message, "error");
                   // toast.error(error.message)
                })

        // Update data to the server

        const newFood = { name, image, origin, price, category, quantity, description, count, madeBy, email };

        console.log(newFood);

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
                    console.log(data);
                    navigate('/');
            });
    }
    return (
        <div>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-2xl font-bold  text-center">Order a Food Item</h2>
                    <form onSubmit={handleOrder} action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium ">Food Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" defaultValue={name} readOnly required></input>
                            </div>
                            
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium ">Price</label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2999" defaultValue={price} readOnly required></input>
                            </div>
                            <div className="w-full">
                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium ">Quantity</label>
                                <input type="number" name="quantity" id="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2999" defaultValue={quantity} required></input>
                            </div>
                            
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button type='submit' className="btn bg-blue-500">Confirm Order</button>
                        </div>
                    </form>
                </div>
                </section>
        </div>
    );
};

export default OrderFood;