import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='lg:h-96 w-11/12 mx-auto my-5'>
            <div className="hero h-full" style={{backgroundImage: 'url(https://i.ibb.co/52h5MCT/pexels-chan-walrus-958545.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-blue-500">BITE</h1>
                    <p className="mb-5">Indulge Your Senses in Culinary Excellence at <span className='text-blue-500 font-semibold'>BITE</span>. Where Flavor Meets Elegance</p>
                    <Link to='/all items'><button className="btn bg-blue-500">Menus</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;