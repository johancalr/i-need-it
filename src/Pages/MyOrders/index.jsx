import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { StoreContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const contex = useContext(StoreContext);
  return (
    <PagesLayout>
      MyOrders
      {
        contex.order.map((data, i) => (
          <Link key={i} to={`/my-orders/${i}`}>
            <OrdersCard date={data.date} totalProducts={data.totalProducts} totalPrice={data.totalPrice}/>
          </Link>
        ))
      }
    </PagesLayout>
  )
}

export { MyOrders };
