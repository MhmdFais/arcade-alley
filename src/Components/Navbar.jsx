// import { Link } from "react-router-dom"

// function Navbar(){
//     return(
//         <>
//             <nav>
//                 <Link to="/" className="text-2xl text-yellow-200 hover:text-yellow-400 pl-8 tab">Home</Link>
//                 <Link to="/shop" className="text-2xl text-yellow-200  hover:text-yellow-400 pl-8 tab">Shop</Link>
//                 <Link to="/cart" className="text-2xl text-yellow-200  hover:text-yellow-400 pl-8 tab">Cart</Link>
//             </nav>
//         </>
//     )
// }

// export default Navbar;


import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link text-2xl pl-8 text-yellow-100 hover:text-yellow-400 ${isActive ? 'active' : ''}`
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `nav-link text-2xl pl-8 text-yellow-100 hover:text-yellow-400 ${isActive ? 'active' : ''}`
        }
      >
        SHOP
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `nav-link text-2xl pl-8  text-yellow-100 hover:text-yellow-400 ${isActive ? 'active' : ''}`
        }
      >
        CART
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `nav-link text-2xl pl-8  text-yellow-100 hover:text-yellow-400 ${isActive ? 'active' : ''}`
        }
      >
        ABOUT
      </NavLink>
    </nav>
  );
}

export default Navbar;
