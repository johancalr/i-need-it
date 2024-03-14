import { useContext, useEffect, useState } from "react";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { ProductDetail } from "../../Components/ProductDetail";
import { StoreContext } from "../../Context";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../Components/Cards/ProductCard";

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
      <p className="pt-2">Exclusive Products</p>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg w-80 p-3 my-3 focus:outline-teal-500 text-purple-500'
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
        <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-screen-lg'>
          {
            context.filteredProducts?.map(product => (
              <ProductCard
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
