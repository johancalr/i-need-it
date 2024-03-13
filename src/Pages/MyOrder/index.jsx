import { useContext } from "react";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { StoreContext } from "../../Context";
import { OderCard } from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(StoreContext);
  return (
    <PagesLayout>
      MyOrder
      <div className='flex flex-col w-80'>
        { context.order.length > 0 &&
          context.order.slice(-1)[0].products.map(product => (
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
