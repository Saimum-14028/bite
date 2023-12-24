import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams, useNavigation } from 'react-router-dom';
import MyAddedFoodsCard from './MyAddedFoodsCard';
import { AuthContext } from './AuthProvider';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MyAddedFoods = () => {

    const { user} = useContext(AuthContext);
    const [newMyAddedFoods, setnewMyAddedFoods] = useState([]);

   // console.log(newMyAddedFoods);

    useEffect(() => {
        fetch(`http://localhost:5000/foods?email=${user.email}`)
            .then(res => res.json())
            .then(data => setnewMyAddedFoods(data))
    }, [user.email]);

   //  const { user} = useContext(AuthContext);
     const [isShow,setIsShow] = useState(false)
//    // const {result} = useContext(AuthContext);
//      const MyAddedFoods = useLoaderData();
//    //  console.log(MyAddedFoods);
//     // const { id } = useParams();

    
    //  console.log(newMyAddedFoods);

//     //  if(user.email !== id) {
//     //     // MyAddedFoods = useLoaderData();
//     //     // console.log(MyAddedFoods);
//     //     console.log("TEst");
//     //  }

//    //  console.log(id);
//      const newMyAddedFoods = MyAddedFoods.filter(food => food.email === user.email);
    // console.log(result);

    return (
        <div className='w-11/12 mx-auto my-5'>
            <div>

                <Helmet>
                    <title>Bite | My Foods</title>
                </Helmet>

                {newMyAddedFoods.length ? 
                
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                            isShow ? newMyAddedFoods.map((card) => (
                                <MyAddedFoodsCard key={card._id} card={card}></MyAddedFoodsCard>
                            )) 

                            : newMyAddedFoods.slice(0,6).map((card) => (
                                <MyAddedFoodsCard key={card._id} card={card}></MyAddedFoodsCard>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        {newMyAddedFoods.length > 6 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn bg-blue-500">
                            See All
                    </button>}
                    </div>
                </div>
                 : 
                 <div className='w-full h-96'>
                    <h1 className="text-5xl font-bold mt-10 text-center">No Item Found!</h1>
                </div>}
            </div>
        </div>
    );
};

export default MyAddedFoods;