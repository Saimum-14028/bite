import React, { useEffect, useState } from 'react';
import AllFoodItemsCard from './AllFoodItemsCard';

const AllFoodItems = () => {
    const [newMyAddedFoods, setnewMyAddedFoods] = useState([]);
   
    
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [count, setCount] = useState(0)

    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

  //  console.log(pages);

    useEffect( () =>{
        fetch('http://localhost:5000/itemCount')
        .then(res => res.json())
        .then(data => setCount(data.count))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setnewMyAddedFoods(data))
            console.log(currentPage, itemsPerPage);
    }, [currentPage, itemsPerPage]);


    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleSearch = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;

        const MyAddedFoods = newMyAddedFoods.filter(food => food.name === name);

        setnewMyAddedFoods(MyAddedFoods);

        console.log(MyAddedFoods);
    }

    return (
        <div>
            <form className='w-11/12 mx-auto my-5' onSubmit={handleSearch}>
                            <div className="items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <input className="block p-3 pl-10 w-full text-sm   rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter Food Name" type="name" id="name" required></input>
                                </div>
                                <div>
                                    <button type="submit" className="btn bg-blue-500 py-3 px-5 w-full ">Search</button>
                                </div>
                            </div>
                            
            </form>
            <div className='w-11/12 mx-auto my-5'>
                <div>

                    {newMyAddedFoods.length ? 
                    
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    {
                                newMyAddedFoods.map((card) => (
                                    <AllFoodItemsCard key={card._id} card={card}></AllFoodItemsCard>
                                )) 

                            
                            }
                        </div>

                        
                    </div>
                    : 
                    <div className='w-full h-96'>
                        <h1 className="text-5xl font-bold mt-10 text-center">No Item Found!</h1>
                    </div>}
                </div>
            </div>
            <div className='w-11/12 mx-auto my-5'>
                {/* <p>Current page: {currentPage}</p> */}
                <button className='btn bg-blue-500' onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'btn btn-active m-1 bg-blue-500' : 'btn m-1'}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page+1}</button>)
                }
                <button className='btn bg-blue-500' onClick={handleNextPage}>Next</button>
            </div>


        </div>
    );
};

export default AllFoodItems;