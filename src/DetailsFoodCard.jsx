import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { motion } from "framer-motion"

const DetailsFoodCard = () => {
    const [foodDetails, setfoodDetails] = useState({});

    const { id } = useParams();

    const datas = useLoaderData();

   // console.log(datas);

    useEffect(() => {
        const findfoodDetails = datas?.find((data) => data._id === id);

        setfoodDetails(findfoodDetails);
    }, [id, datas]);

   //  console.log(id, foodDetails);
    return (
        <div className="w-11/12 mx-auto">
          <Helmet>
                <title>Bite | Food Details</title>
            </Helmet>
          <motion.div animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    
                  }} className="hero h-48 md:h-72 lg:h-96" style={{backgroundImage: `url(${foodDetails.image})`}}>
          </motion.div>
          <h1 className="text-4xl font-bold my-5">Name: {foodDetails.name}</h1>
          <p className="card-title my-5">Category: {foodDetails.category}</p>
          <p className="card-title text-red-500 my-5">$Price: {foodDetails.price}</p>
          <p className="card-title my-5">Made By: {foodDetails.madeBy}</p>
          <p className="card-title my-5">Origin: {foodDetails.origin}</p>
          <p className="text-base font-normal text-justify mb-10">{foodDetails.description}</p>
          <div className="card-actions justify-end">
          <Link to={`/order/${foodDetails._id}`}>
            <button className="btn btn-wide bg-blue-500 mb-5">Order Now</button>
            </Link>
          </div>
      </div>
    );
};

export default DetailsFoodCard;