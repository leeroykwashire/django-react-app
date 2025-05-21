import { Outlet, NavLink } from 'react-router-dom';

// SideNav component displays a vertical sidebar for navigation
const SideNav = () => {
    return (
        <>
            {/* Sidebar container with fixed position and Bootstrap styles */}
            <div className="d-flex flex-column flex-shrink-0 text-white p-3 position-fixed top-0 left-0 bottom-0 bg-secondary" style={{ width: '18%' }}>
                
                {/* Application or system name */}
                <span><h2>System Name</h2></span>
                
                <hr />

                {/* Navigation menu using Bootstrap's pill-style nav and vertical layout */}
                <ul className="nav nav-pills flex-column mb-auto mt-3">

                    {/* Navigation link to Home */}
                    <li className="nav-item">
                        <NavLink to={'/'} className='text-decoration-none text-white'>
                            <h5>Home</h5>
                        </NavLink>
                    </li>

                    {/* Navigation link to Customers page */}
                    <li className="nav-item">
                        <NavLink to={'/customers'} className='text-decoration-none text-white'>
                            <h5>Customers</h5>
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* Main content area that displays the current child route’s component */}
            {/* Outlet is a placeholder that gets replaced by the routed child component */}
            <div className='main-content p-4' style={{ marginLeft: '18%' }}>
                <Outlet />
            </div>
        </>
    );
};

export default SideNav;
