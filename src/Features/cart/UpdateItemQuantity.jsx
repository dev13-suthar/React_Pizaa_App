
import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuan, increseItemQuan } from './CartSlice';

export default function UpdateItemQuantity({pizzaId,currentQuantity}) {
    const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={()=>dispatch(decreaseItemQuan(pizzaId))}>-</Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={()=>dispatch(increseItemQuan(pizzaId))}>+</Button>
    </div>
  )
}
