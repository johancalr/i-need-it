import { useContext, useEffect, useState } from "react";
import { Card } from "../../Components/Card";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { ProductDetail } from "../../Components/ProductDetail";
import { StoreContext } from "../../Context";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";

function Home() {
  const context = useContext(StoreContext);
  const {category} = useParams();
  const [actualCategory, setActualCategory] = useState();
  if (category !== actualCategory) {
    setActualCategory(category);
  }
  useEffect(() => {
    context.setSelectedCategory(category);
  }, [actualCategory]);
  return (
    <PagesLayout>
      Exclusive Products
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg w-80 p-3 my-3 focus:outline-teal-500'
        value={context.productSearching}
        onChange={event => context.setProductSearching(event.target.value)}
      />
      {
        (context.filteredProducts.length === 0 && (context.productSearching.length > 0 || context.selectedCategory))
        ?
        <div className='text-4xl flex text-black/70 items-center'>
          Nothing Found
          <FaceFrownIcon className='w-9 h-9'/>
        </div>
        :
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            context.filteredProducts?.map(product => (
              <Card
                key={product.id}
                data={product}
              />
            ))
          }
        </div>
      }
      <ProductDetail/>
    </PagesLayout>
  )
}

export { Home };
