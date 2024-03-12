import { StarIcon as StarEmpty } from "@heroicons/react/24/outline";
import { StarIcon as StarFull } from "@heroicons/react/24/solid";

function ProductRating({data, size}) {
  let starts = [];
  const rate = data?.rate??0;
  for (let i = 1; i <= 5; i++) {
    starts.push(
      i <= rate ? <StarFull key={i} className={`h-${size} w-${size} text-yellow-400`}/> : <StarEmpty key={i} className={`h-${size} w-${size} text-yellow-400`}/>
    )
  }
  return(
    <div className='flex'>
      {starts} <small className='text-black/60'>({rate})</small>
    </div>
  );
}

ProductRating.defaultProps = {
  size: '4'
}

export {ProductRating};