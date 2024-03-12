import { useContext } from "react";
import { StoreContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/outline";

function Card ({data}) {
  const context = useContext(StoreContext);
  const showProductDetail = (productInfo) =>{
    context.setProductInfo(productInfo);
    context.openProductDetail();
  }
  let title = data.title;
  if (title.length > 45){
    title = title.slice(0,40)+' ...';
  }
  return(
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProductDetail(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={`${data.title} description`} />
        <div className='absolute top-0 right-0  flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 border'
          onClick={() => context.setCount(context.count + 1)}
        >
          <PlusIcon className="text-black"/>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light leading-none'>{title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
}

export {Card};