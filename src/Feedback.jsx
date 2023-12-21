import React from 'react';

const Feedback = () => {
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className="mx-auto max-w-3xl text-center">
                <h3 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">Customer's Feedback</h3>
            </div>

            <div className="grid gap-12 text-center md:grid-cols-2">
                {/* <!--First Testimonial--> */}
                <div className="mb-6 md:mb-0">
                <div className="mb-6 flex justify-center">
                    <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"
                    className="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className="my-4 text-xl">
                    "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                    elit sed ut perspiciatis unde omnis."
                </p>
                <p className="italic">- Anna Morian</p>
                </div>

                {/* <!--Second Testimonial--> */}
                <div className="mb-0">
                <div className="mb-6 flex justify-center">
                    <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"
                    className="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className="my-4 text-xl">
                    "Neque cupiditate assumenda in maiores repudiandae mollitia
                    architecto elit sed adipiscing elit."
                </p>
                <p className="italic">- Teresa May</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;