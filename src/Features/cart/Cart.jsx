import { Link } from 'react-router-dom';
import Linkbutton from '../../ui/Linkbutton';
import CartItem from './CartItem';
import Button from '../../ui/Button';
import EmptyCart from "./EmptyCart"
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getcart } from './CartSlice';

function Cart() {
  const cart = useSelector(getcart)
  const user = useSelector(state=>state.user.username); 
  const dispatch = useDispatch()

  if(!cart.length) return <EmptyCart/>

  return (
    <div className='py-3 px-4 '>
      <Linkbutton to="/menu" className="text-sm text-blue-500 hover:text-blue-800">&larr; Back to menu</Linkbutton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {user}</h2>

      <ul className="divide-y divide-stone-300 border-b mt-3">
        {cart.map((item)=><CartItem item={item} key={item.pizzaId} />)}
      </ul>
      <div className="mt-6 space-x-4">
        <Link to="/order/new" className='text-blue-300'>Order pizzas</Link>

        <Button type="secondary" onClick={()=>dispatch(clearCart())}>clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
