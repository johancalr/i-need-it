import { useContext } from "react";
import { StoreContext } from "../../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";

function ProductCard ({data}) {
  const context = useContext(StoreContext);
  const showProductDetail = (productInfo) =>{
    context.setProductInfo(productInfo);
    context.openProductDetail();
    context.closeChecking();
  };
  const addProductToCart = (event, productData) => {
    openCart(event);
    context.setCartProducts([...context.cartProducts,productData]);
  };
  const openCart = (event) => {
    event.stopPropagation();
    // Close detailing -> Open checking
    context.closeProductDetail();
    context.openChecking();
  }
  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
    return (
      isInCart ?
        <div className='absolute top-0 right-0  flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 border bg-teal-500 border-te'
          onClick={event => openCart(event)}>
          <CheckIcon className='text-white'/>
        </div>
      :
        <div className='absolute top-0 right-0  flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 border'
          onClick={(event) => addProductToCart(event, data)}>
          <PlusIcon className='text-black'/>
        </div>
    );
  };
  return(
    <div className='bg-white cursor-pointer w-36 h-40 sm:w-48 sm:h-52 rounded-lg'
      onClick={() => showProductDetail(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={`${data.title} description`} />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-xs sm:text-sm font-light overflow-hidden overflow-ellipsis whitespace-nowrap'>{data.title}</span>
        <span className='text-sm sm:text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
}

export {ProductCard};