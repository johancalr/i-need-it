import { useContext } from 'react';
import { StoreContext } from '../../Context';
import {ClipboardDocumentCheckIcon, XMarkIcon} from '@heroicons/react/24/outline';
import './styles.css';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';
import { OderCard } from '../Cards/OrderCard';
function CheckoutSideMenu() {
  const context = useContext(StoreContext);
  const handleCheckout = () => {
    const setZero = (n) => { return n < 10 ? `0${n}` : n; }
    const orderToAdd = {
      date: `${setZero(new Date().getDate())}/${setZero(new Date().getMonth() + 1)}/${new Date().getFullYear()}`,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setProductSearching('');
    context.closeChecking();
  };
  return (
    <aside className={`checkout-side-menu flex-col fixed top-20 right-0 border border-black bg-white rounded-lg p-4 ${context.checking? 'flex' : 'closed'}`}>
      <div className='flex justify-between items-center p-2 pb-5'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon onClick={() => context.closeChecking()} className="h-7 w-7 text-black cursor-pointer"/>
        </div>
      </div>
      <div className='overflow-y-scroll flex-1'>
        {
          context.cartProducts.length === 0
          ?
            <div className='text-lg flex text-black/70 items-center justify-center'>
              No products added... yet!
            </div>
          :
            context.cartProducts.map(product => (
              <OderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                isRemovable={true}
              />
            ))
        }
      </div>
      <div>
        <p className='flex justify-between items-center my-2'>
          <span>Total:</span>
          <b>$ {totalPrice(context.cartProducts)}</b>
        </p>
        {
          context.cartProducts.length > 0 &&
          <Link to='my-orders/last'>
            <button className='flex justify-center items-center py-2 w-full bg-black rounded-lg text-teal-500 text-lg' onClick={() => handleCheckout()}>
              Checkout
              <ClipboardDocumentCheckIcon className='w-6 h-6 ms-2'/>
            </button>
          </Link>
        }
      </div>
    </aside>
  );
}

export {CheckoutSideMenu};
