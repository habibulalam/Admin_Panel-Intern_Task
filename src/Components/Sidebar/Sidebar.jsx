import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";


const Sidebar = () => {

    const handleNavLinkClick = () => {
        document.getElementById('my-drawer-2').checked = false;
    }

    const { user, logout } = useAuth();
    // console.log(user);

    return (
        <div>
            <div className="drawer lg:drawer-open z-40">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start md:h-screen md:bg-custom-secondary">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><i className="fa-solid fa-bars"></i></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-custom-secondary text-white min-h-full w-[60%] lg:w-80 p-4">

                        {/* Merged Static Sidebar Content */}
                        <div className="space-y-3">
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                                <Link to={'/'}><h2 className="text-2xl font-semibold">Dashboard</h2></Link>
                                {/* Close button for small devices */}
                                <div className="lg:hidden flex justify-end mb-4">
                                    <label htmlFor="my-drawer-2" className="btn btn-secondary">Close</label>
                                </div>
                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-4 text-sm">
                                    <li className="rounded-sm">
                                        <NavLink to={'allUsers'}
                                            className={({ isActive }) => isActive ? 'flex items-center p-2 space-x-3 rounded-md bg-white text-custom-secondary shadow-lg shadow-custom-primary' : 'flex items-center p-2 space-x-3 rounded-md bg-gray-600 text-white hover:scale-105 hover:border hover:border-white transition duration-700'}
                                            onClick={handleNavLinkClick}
                                        >
                                            <i className="fa-solid fa-user"></i>
                                            <span>Users</span>
                                        </NavLink>
                                    </li>
                                    <li className="rounded-sm">
                                        <NavLink to={'products'}
                                            className={({ isActive }) => isActive ? 'flex items-center p-2 space-x-3 rounded-md bg-white text-custom-secondary shadow-lg shadow-custom-primary' : 'flex items-center p-2 space-x-3 rounded-md bg-gray-600 text-white hover:scale-105 hover:border hover:border-white transition duration-700'}
                                            onClick={handleNavLinkClick}
                                        >
                                            <i className="fa-solid fa-box"></i>
                                            <span>Products</span>
                                        </NavLink>
                                    </li>
                                    <li className="rounded-sm">
                                        <NavLink to={'addProduct'}
                                            className={({ isActive }) => isActive ? 'flex items-center p-2 space-x-3 rounded-md bg-white text-custom-secondary shadow-lg shadow-custom-primary' : 'flex items-center p-2 space-x-3 rounded-md bg-gray-600 text-white hover:scale-105 hover:border hover:border-white transition duration-700'}
                                            onClick={handleNavLinkClick}
                                        >
                                            <i className="fa-solid fa-boxes-packing"></i>
                                            <span>Add Product</span>
                                        </NavLink>
                                    </li>

                                    <div>
                                        {
                                            user
                                                ? <li className="rounded-sm mt-14">
                                                    <NavLink
                                                        className={'flex items-center justify-center p-2 space-x-3 rounded-md bg-gray-600 text-white hover:scale-105 hover:border hover:border-white transition duration-700'}
                                                        onClick={logout}
                                                    >
                                                        <span>Logout</span>
                                                    </NavLink>
                                                </li>
                                                : <div className="flex gap-5 justify-between mt-14">
                                                    <p className="rounded-sm grow text-center">
                                                        <NavLink to={'/login'}
                                                            className={({ isActive }) => isActive ? 'flex items-center justify-center p-2 space-x-3 rounded-md bg-white text-custom-secondary shadow-lg shadow-custom-primary' : 'flex items-center justify-center p-2 space-x-3 rounded-md bg-gray-600 text-white hover:scale-105 hover:border hover:border-white transition duration-700'}
                                                            onClick={handleNavLinkClick}
                                                        >
                                                            <span>Log-In</span>
                                                        </NavLink>
                                                    </p>
                                                    <p className="rounded-sm grow text-center">
                                                        <NavLink to={'/signup'}
                                                            className={({ isActive }) => isActive ? 'flex items-center justify-center p-2 space-x-3 rounded-md bg-white text-custom-secondary shadow-lg shadow-custom-primary' : 'flex items-center justify-center p-2 space-x-3 rounded-md bg-gray-600 text-white hover:scale-105 hover:border hover:border-white transition duration-700'}
                                                            onClick={handleNavLinkClick}
                                                        >
                                                            <span>Sign-Up</span>
                                                        </NavLink>
                                                    </p>
                                                </div>
                                        }

                                    </div>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;