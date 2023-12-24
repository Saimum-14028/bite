import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams, useNavigation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { useEffect } from 'react';
import MyCartCard from './MyCartCard';
import { Helmet } from 'react-helmet-async';

const MyOrderedFoods = () => {

    const { user} = useContext(AuthContext);
    
    const [cart, setCart] = useState([]);

   // console.log(newMyOrderedFoods);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?orderemail=${user.email}`)
            .then(res => res.json())
         //   console.log(res)
            .then(data => setCart(data))
           // console.log(myCart);
    }, [user.email]);

 //   console.log(myCart);
     const [isShow,setIsShow] = useState(false);
     

    // console.log(cart);

    return (
       < div className='w-11/12 mx-auto my-5'>
        <Helmet>
                <title>Bite | My Orders</title>
            </Helmet>
        <div>

{cart.length ? 

<div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
{
        isShow ? cart.map((card) => (
            <MyCartCard key={card._id} card={card}
            cart={cart}
            setCart={setCart}></MyCartCard>
        )) 

        : cart.slice(0,6).map((card) => (
            <MyCartCard key={card._id} card={card}
            cart={cart}
            setCart={setCart}></MyCartCard>
        ))
    }
</div>

<div className="flex justify-center items-center">
    {cart.length > 6 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn bg-blue-500">
        See All
</button>}
</div>
</div>
: 
<div className='w-full'>
<h1 className="text-5xl font-bold mt-10 text-center">No Product Found!</h1>
</div>}
</div>
    </div>
);
};

export default MyOrderedFoods;