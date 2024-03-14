import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { formalizeCategory } from "../../utils"
import DropDown from "../DropDowns/CategoriesDropDown";
import RoutesDropDown from "../DropDowns/RoutesDropDown";
import './index.css'

function Navbar () {
  const activeStyle = 'underline underline-offset-4 text-purple-500 font-semibold'
  const context = useContext(StoreContext);
  return(
    <nav className='store-navbar flex justify-between items-center fixed top-0 z-10 w-full px-1 sm:px2 text-sm font-light bg-teal-200'>
      <ul className="flex md:hidden items-center gap-2">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            <span className='flex items-center text-purple-500 leading-none'>
              <img className='w-11 h-11 me-1' src='/icon.svg' alt="icon" />
              <small className='font-mono'>I<br/>Need<br/>It!</small>
            </span>
          </NavLink>
        </li>
        <DropDown/>
      </ul>
      <ul className="hidden md:flex items-center gap-3 pe-1">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            <span className='flex items-center text-purple-500 leading-none'>
              <img className='w-11 h-11 me-1' src='/icon.svg' alt="icon" />
              <small className='font-mono'>I<br/>Need<br/>It!</small>
            </span>
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
        {
          context.categories.map(category => {
            const formalizedCategory = formalizeCategory(category);
            return (
              <li key={formalizedCategory}>
                <NavLink
                  to={`/category/${formalizedCategory}`}
                  className={({ isActive }) => isActive? activeStyle : undefined }
                >
                  {category}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <ul className="hidden md:flex items-center gap-3">
        <li>
          <NavLink
            to='/my-orders'
            onClick={() => context.setSelectedCategory(null)}
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
          My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            onClick={() => context.setSelectedCategory(null)}
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            onClick={() => context.setSelectedCategory(null)}
            className={({ isActive }) => isActive? activeStyle : undefined }
          >
            SignIn
          </NavLink>
        </li>
        <li>
          <NavLink className='flex items-end text-purple-500' onClick={() => context.openChecking()}>
            <ShoppingBagIcon className="h-6 w-6"/> <b>{context.cartProducts.length}</b>
          </NavLink>
        </li>
      </ul>
      <ul className="flex md:hidden items-center gap-1">
        <RoutesDropDown/>
        <li>
          <NavLink className='flex items-end text-purple-500' onClick={() => context.openChecking()}>
            <ShoppingBagIcon className="h-6 w-6"/> <b>{context.cartProducts.length}</b>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };