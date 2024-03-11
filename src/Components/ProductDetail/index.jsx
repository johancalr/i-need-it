import {XMarkIcon} from '@heroicons/react/24/outline';
import './styles.css';
function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black bg-white rounded-lg">
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className="h-7 w-7 text-black"/>
        </div>
      </div>
    </aside>
  );
}

export {ProductDetail};
