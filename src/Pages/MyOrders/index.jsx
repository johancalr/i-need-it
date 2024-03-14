import { useContext } from "react";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { StoreContext } from "../../Context";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/Cards/OrdersCard";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

function MyOrders() {
  const contex = useContext(StoreContext);
  return (
    <PagesLayout>
      <p className='py-2'>MyOrders</p>
      {
        contex.order.length === 0
        ?
        <div className='text-4xl flex text-black/70 items-center align-middle'>
          No registered orders
          <FaceFrownIcon className='w-9 h-9 ms-1'/>
        </div>
        :
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
          {
            contex.order.map((data, i) => (
              <Link key={i} to={`/my-orders/${i}`}>
                <OrdersCard date={data.date} totalProducts={data.totalProducts} totalPrice={data.totalPrice}/>
              </Link>
            ))
          }
        </div>
      }
    </PagesLayout>
  )
}

export { MyOrders };
