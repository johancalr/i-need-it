import { useState } from "react";
import { Card } from "../../Components/Card";
import { PagesLayout } from "../../Layouts/PagesLayout";
import { useEffect } from "react";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(respose => respose.json())
    .then(data => setProducts(data));
  }, [])
  return (
    <PagesLayout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          products?.map(product => (
            <Card
              key={product.id}
              data={product}
            />
          ))
        }
      </div>
      <ProductDetail/>
    </PagesLayout>
  )
}

export { Home };
