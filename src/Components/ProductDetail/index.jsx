import {XMarkIcon} from '@heroicons/react/24/outline';
import './styles.css';
import { useContext } from 'react';
import { StoreContext } from '../../Context';
import { ProductRating } from '../ProductRating';
function ProductDetail() {
  const context = useContext(StoreContext);
  return (
    <aside className={`product-detail flex-col fixed right-0 border border-black bg-white rounded-lg p-4 ${context.detailing? 'flex' : 'closed'}`}>
      <div className='flex justify-between items-center p-2 pb-5'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon onClick={() => context.closeProductDetail()} className="h-7 w-7 text-black cursor-pointer"/>
        </div>
      </div>
      <figure>
        <img src={context.productInfo.image} alt='description' />
      </figure>
      <div className='flex flex-col'>
        <span className='inline-flex items-center justify-between'>
          <b className='text-3xl me-2'>$ {context.productInfo.price} </b>
          <ProductRating data={context.productInfo.rating}/>
        </span>
        <b>{context.productInfo.title}</b>
        <small>{context.productInfo.description}</small>
      </div>
    </aside>
  );
}

export {ProductDetail};
