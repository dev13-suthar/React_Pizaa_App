import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./CartSlice";


function CartOverview() {
  const toalCartQuantity = useSelector(getTotalCartQuantity)
  const totalcartprice = useSelector(getTotalCartPrice)
  if(!toalCartQuantity) return null
  return (
    
    <div className="bg-stone-800 text-stone-200 px-4 py-4 uppercase sm:px-6 text-sm md:text-base flex items-center justify-between absolute top-[55px] w-full sm:top-[85px]">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{toalCartQuantity} pizzas</span>
        <span>${totalcartprice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;


{/* <section className="absolute top-[55px] w-full sm:top-[85px]">
<div className="bg-stone-800 text-stone-200 px-4 py-4 uppercase sm:px-6 text-sm md:text-base flex items-center justify-between">
  <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
    <span>{toalCartQuantity} pizzas</span>
    <span>${totalcartprice}</span>
  </p>
  <Link to="/cart">Open cart &rarr;</Link>
</div>
</section> */}