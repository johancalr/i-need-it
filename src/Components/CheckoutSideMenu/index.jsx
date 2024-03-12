import { useContext } from 'react';
import { StoreContext } from '../../Context';
import {XMarkIcon} from '@heroicons/react/24/outline';
import { ProductRating } from '../ProductRating';
import './styles.css';
function CheckoutSideMenu() {
  const context = useContext(StoreContext);
  return (
    <aside className={`checkout-side-menu flex-col fixed top-20 right-0 border border-black bg-white rounded-lg p-4 ${context.checking? 'flex' : 'closed'}`}>
      <div className='flex justify-between items-center p-2 pb-5'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon onClick={() => context.closeChecking()} className="h-7 w-7 text-black cursor-pointer"/>
        </div>
      </div>
    </aside>
  );
}

export {CheckoutSideMenu};
