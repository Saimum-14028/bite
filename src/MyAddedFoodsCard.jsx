import React from 'react';
import { Link } from 'react-router-dom';

const MyAddedFoodsCard = ({card}) => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className='h-40'><img src={card.image} alt={card.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {card.name}</h2>
                    <p className='text-xl font-semibold'>Origin: {card.origin}</p>
                    <p className='text-xl font-semibold'>Price: ${card.price}</p>
                    <p className='text-xl font-semibold'>Quantity: {card.quantity}</p>
                    <div className="w-full">
                        <Link to={`/update an item/${card._id}`}>
                            <button className="btn bg-blue-500 w-full">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default MyAddedFoodsCard;