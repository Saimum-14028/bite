import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TopFoodCards from './TopFoodCards';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const TopFoods = () => {

    const [newMyAddedFoods, setnewMyAddedFoods] = useState([]);

   // console.log(newMyAddedFoods);

    useEffect(() => {
        fetch(`https://troubled-sweatsuit-hare.cyclic.app/foods?sortField=count&sortOrder=desc`)
            .then(res => res.json())
            .then(data => setnewMyAddedFoods(data))
    }, []);

    const [isShow,setIsShow] = useState(false)

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h3 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">Top Foods</h3>
            <div>

                {newMyAddedFoods.length ? 
                
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                            isShow ? newMyAddedFoods.map((card) => (
                                <TopFoodCards key={card._id} card={card}></TopFoodCards>
                            )) 

                            : newMyAddedFoods.slice(0,6).map((card) => (
                                <TopFoodCards key={card._id} card={card}></TopFoodCards>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        {newMyAddedFoods.length > 6 && !isShow && <Link to="/all food items">
                            <button className="btn bg-blue-500 w-full">See All</button>
                        </Link>}
                    </div>
                </div>
                 : 
                 <motion.div animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }} className='w-full'>
                    <h1 className="text-3xl font-bold mt-5 text-center">No Item Found!</h1>
                </motion.div>}
            </div>
        </div>
    );
};

export default TopFoods;