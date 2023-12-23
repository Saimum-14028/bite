import React from 'react';
import { Link } from 'react-router-dom';

const TopFoodCards = ({card}) => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className='h-40'><img src={card.image} alt={card.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {card.name}</h2>
                    <p className='text-xl font-semibold'>Category: {card.category}</p>
                    <p className='text-xl font-semibold'>Price: ${card.price}</p>
                    <div className="w-full">
                        <Link to={`/all food items/${card._id}`}>
                            <button className="btn bg-blue-500 w-full">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default TopFoodCards;