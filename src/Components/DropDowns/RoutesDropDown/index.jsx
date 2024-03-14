import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { StoreContext } from '../../../Context'
import { NavLink } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RoutesDropDown() {
  const context = useContext(StoreContext);
  const activeStyle = 'underline underline-offset-4'
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-purple-50 px-2 py-1 text-sm font-semibold text-purple-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <HomeIcon className='h-5 w-5'/>
          <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to='/my-orders'
                  onClick={() => context.setSelectedCategory(null)}
                  className={({ isActive }) => classNames(
                    (active) ? 'bg-purple-50 text-purple-500' : 'text-gray-700',
                    (isActive) ? 'bg-purple-50 text-purple-500 font-normal' : '',
                    'block px-4 py-2 text-sm'
                  )}
                >
                My Orders
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to='/my-account'
                  onClick={() => context.setSelectedCategory(null)}
                  className={({ isActive }) => classNames(
                    (active) ? 'bg-purple-50 text-purple-500' : 'text-gray-700',
                    (isActive) ? 'bg-purple-50 text-purple-500 font-normal' : '',
                    'block px-4 py-2 text-sm'
                  )}
                >
                My Account
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to='/sign-in'
                  onClick={() => context.setSelectedCategory(null)}
                  className={({ isActive }) => classNames(
                    (active) ? 'bg-purple-50 text-purple-500' : 'text-gray-700',
                    (isActive) ? 'bg-purple-50 text-purple-500 font-normal' : '',
                    'block px-4 py-2 text-sm'
                  )}
                >
                SignIn
                </NavLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export {RoutesDropDown};