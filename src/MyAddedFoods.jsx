import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import MyAddedFoodsCard from './MyAddedFoodsCard';
import { AuthContext } from './AuthProvider';

const MyAddedFoods = () => {

    const { user} = useContext(AuthContext);

    const [isShow,setIsShow] = useState(false)
   // const {result} = useContext(AuthContext);
     const MyAddedFoods = useLoaderData();
   //  console.log(MyAddedFoods);
    // const { id } = useParams();

    // console.log(user.email,id);

    //  if(user.email !== id) {
    //     // MyAddedFoods = useLoaderData();
    //     // console.log(MyAddedFoods);
    //     console.log("TEst");
    //  }

   //  console.log(id);
     const newMyAddedFoods = MyAddedFoods.filter(food => food.email === user.email);
    // console.log(result);

    return (
        <div className='w-11/12 mx-auto my-5'>
            <div>

                {newMyAddedFoods.length ? 
                
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                {
                            isShow ? newMyAddedFoods.map((card) => (
                                <MyAddedFoodsCard key={card._id} card={card}></MyAddedFoodsCard>
                            )) 

                            : newMyAddedFoods.slice(0,4).map((card) => (
                                <MyAddedFoodsCard key={card._id} card={card}></MyAddedFoodsCard>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        {newMyAddedFoods.length > 4 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn bg-blue-500">
                            See All
                    </button>}
                    </div>
                </div>
                 : 
                 <div className='w-full'>
                    <h1 className="text-5xl font-bold mt-10 text-center">No Item Found!</h1>
                </div>}
            </div>
        </div>
    );
};

export default MyAddedFoods;