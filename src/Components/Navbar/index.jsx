import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function Navbar () {
  const activeStyle = 'underline underline-offset-4'
  const context = useContext(StoreContext);
  return(
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            I Need It!
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
          All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          myemail@email.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
          My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            SignIn
          </NavLink>
        </li>
        <li>
          <NavLink className='flex items-end'>
            <ShoppingBagIcon className="h-6 w-6"/> {context.cartProducts.length}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };