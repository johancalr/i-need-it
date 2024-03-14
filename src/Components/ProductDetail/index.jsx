import {CheckIcon, PlusIcon, XMarkIcon} from '@heroicons/react/24/outline';
import './styles.css';
import { useContext } from 'react';
import { StoreContext } from '../../Context';
import { ProductRating } from '../ProductRating';
function ProductDetail() {
  const context = useContext(StoreContext);
  const isInCart = context.cartProducts.filter(product => product.id === context.productInfo.id).length > 0;
  return (
    <aside className={`product-detail flex-col fixed right-0 border border-black bg-white rounded-lg p-4 ${context.detailing? 'flex' : 'closed'}`}>
      <div className='flex justify-between items-center p-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon onClick={() => context.closeProductDetail()} className="h-7 w-7 text-black cursor-pointer"/>
        </div>
      </div>
      <div className='overflow-y-auto'>
        <figure>
          <img src={context.productInfo.image} alt='description' className='h-full w-auto'/>
        </figure>
        <div className='flex flex-col'>
          <span className='inline-flex items-center justify-between'>
            <b className='flex items-center text-3xl'>
              $ {context.productInfo.price}
              {
                isInCart ?
                  <div className='w-6 h-6 rounded-full p-1 border ms-1 bg-teal-500'>
                    <CheckIcon className='text-white'/>
                  </div>
                :
                  <div className='w-6 h-6 rounded-full p-1 border ms-1 cursor-pointer bg-white'
                    onClick={() => context.setCartProducts([...context.cartProducts, context.productInfo])}>
                    <PlusIcon className='text-black'/>
                  </div>
              }
            </b>
            <ProductRating data={context.productInfo.rating}/>
          </span>
          <b>{context.productInfo.title}</b>
          <small>{context.productInfo.description}</small>
        </div>
      </div>
    </aside>
  );
}

export {ProductDetail};
