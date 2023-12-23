import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
   // console.log(user);

    return (
        <div className="md:w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="avatar">
                        <div className="w-8 md:w-10 lg:w-12 rounded-full">
                            <img src="https://i.ibb.co/x1mFm0q/pexels-athena-2961968.jpg" alt="logo" />
                        </div>
                    </div>
                    <p className='text-xl md:text-2xl font-semibold ml-1'>Bite</p>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu-horizontal gap-1 md:gap-5 px-1 text-lg font-semibold">
                        <li><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Home
                            </NavLink>
                        </li>
                    
                        <li><NavLink
                                to="/all food items"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                All Items
                            </NavLink>
                        </li>

                        <li><NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div className="navbar-end"> */}
                {/* <Link to="/login"><button className="btn text-lg">Login</button></Link> */}
                <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink
                                to="/add an item"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                Add an Item
                            </NavLink>
                            </li>
                            <li><NavLink
                                to={`/my added items/`}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                My Added Items
                            </NavLink>
                            </li>
                            <li><NavLink
                                to={`/my ordered items/`}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                                }
                                >
                                My Ordered Items
                            </NavLink>
                            </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Navbar;