
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getPizzaQuantity } from "./CartSlice";
function CartItem({ item }) {

  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getPizzaQuantity(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-5">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaID={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
