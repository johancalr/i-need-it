import { CalendarDaysIcon, ShoppingCartIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

function OrdersCard({date, totalProducts, totalPrice}) {
  return(
    <div className='flex justify-between items-center border rounded-lg p-1 bg-white'>
      <div>
        <p className='flex items-center text-sm mb-2'>
          <CalendarDaysIcon className='w-5 h-5 mx-1 text-teal-500'/>
          <span>{date}</span>
          <ShoppingCartIcon className='w-5 h-5 mx-1 text-teal-500'/>
          {totalProducts}
        </p>
        <p className='flex items-center justify-center'>
          <CurrencyDollarIcon className='w-5 h-5 mx-1 text-yellow-500'/>
          <b>{totalPrice}</b>
        </p>
      </div>
    </div>
  );
}
export {OrdersCard};