import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav>
                <Link to="/" className="text-2xl text-yellow-200 hover:text-yellow-400 pl-8">Home</Link>
                <Link to="/shop" className="text-2xl text-yellow-200  hover:text-yellow-400 pl-8">Shop</Link>
                <Link to="/cart" className="text-2xl text-yellow-200  hover:text-yellow-400 pl-8">Cart</Link>
            </nav>
        </>
    )
}

export default Navbar;