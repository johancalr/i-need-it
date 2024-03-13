function OrdersCard({date, totalProducts, totalPrice}) {
  return(
    <div className='flex justify-between items-center mb-2 border rounded-lg'>
      <p>
        <span>{date}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}
export {OrdersCard};