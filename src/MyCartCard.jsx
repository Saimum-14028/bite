import React from 'react';
import Swal from "sweetalert2";

const MyCartCard = ({card,cart,setCart}) => {

    const { _id } = card;

  //  console.log(card);

    const handleDelete = _id => {
      //  console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/orders/${_id}`, {
                    method: 'DELETE'
                  //  mode: 'no-cors',
                })
                    .then(res => res.json())
                    .then(data => {
                     //   console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = cart.filter(car => car._id !== _id);
                            setCart(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className='h-40'><img src={card.image} alt={card.name} /></figure>
                <div className="card-body">
                <h2 className="card-title">Name: {card.name}</h2>
                <p className='text-xl font-semibold'>Mady By: {card.madeBy}</p>
                <p className='text-xl font-semibold'>Price: ${card.price}</p>
                <p className='text-xl font-semibold'>Quantity: {card.orderQuantity}</p>
                <p className='text-xl font-semibold'>{card.type}</p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error w-full">Delete
                        </button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default MyCartCard;