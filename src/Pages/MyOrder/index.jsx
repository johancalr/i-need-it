import { useContext } from "react";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { StoreContext } from "../../Context";
import { OderCard } from "../../Components/OrderCard";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const context = useContext(StoreContext);
  const { id } = useParams();
  const index = id ?? context.order.length - 1;
  return (
    <PagesLayout>
      <Link to='/my-orders'>
        <div className='flex items-center my-2'>
          <ChevronDoubleLeftIcon className='w-5 h-5'/>
          <h1>MyOrders</h1>
        </div>
      </Link>
      <div className='flex flex-col w-80'>
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
    </PagesLayout>
  )
}

export { MyOrder };
