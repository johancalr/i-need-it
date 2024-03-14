import { useContext } from "react";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { StoreContext } from "../../Context";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import { OderCard } from "../../Components/Cards/OrderCard";
import { totalPrice } from "../../utils";

function MyOrder() {
  const context = useContext(StoreContext);
  const { id } = useParams();
  const index = id ?? context.order.length - 1;
  return (
    <PagesLayout>
      <Link to='/my-orders'>
        <div className='flex items-center my-2'>
          <ChevronDoubleLeftIcon className='w-5 h-5'/>
          <h1>Go Back To My Orders</h1>
        </div>
      </Link>
      <div className='flex flex-col overflow-y-auto w-80'>
        { context.order.length > 0 &&
          context.order[index].products.map(product => (
            <OderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
        }
      </div>
      <p className='flex justify-between items-center  w-80 my-2'>
        <span>Total:</span>
        <b>$ {totalPrice(context.order[index].products)}</b>
      </p>
    </PagesLayout>
  )
}

export { MyOrder };
