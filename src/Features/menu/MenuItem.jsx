import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button"
import { useDispatch, useSelector} from "react-redux";
import { addItem, getPizzaQuantity } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getPizzaQuantity(id));
  const incart = currentQuantity>0;
  const distpatch = useDispatch ()
  const handleAddTocart = ()=>{
      const newItem = {
        pizzaId:id,
        name: name,
        quantity:1,
        unitPrice:unitPrice,
        totalPrice:unitPrice*1,
      }
      distpatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2 ">
      <img src={imageUrl} alt={name}  className={`h-24 ${soldOut?'opacity:70 grayscale':''}`}/>
      <div className="flex flex-col flex-grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium">Sold out</p>}
         {incart &&  
          <div className="flex items-center gap-3 sm:gap-8">
            <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>
            <DeleteItem pizzaID={id}/>
          </div>
         }
          {!soldOut && !incart && <Button type="small" onClick={handleAddTocart}>Order Now</Button>}
          {/* <Button type="small" onClick={handleAddTocart}>Order Now</Button> */}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
