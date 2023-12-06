// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalCartPrice, getcart } from "../cart/CartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../Store"
import { formatCurrency } from "../../utilities/helpers";
import { useState } from "react";
import { fetchAddress, updateOrders } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(getcart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority?totalCartPrice*0.2:0;
  const totalPrice= totalCartPrice + priorityPrice;
  const navigate = useNavigation();
  const isSubmitting = navigate.state=='submitting';  
  const formError = useActionData();
  const {user,status:AddressStatus,posiion:Position,address,erorr:errorAddresss} = useSelector(state=>state.user); 
  const isLoadingAddress = AddressStatus==="loading";



  // username: '',
  //   status:'idle',
  //   posiion:{},
  //   address:'',
  //   erorr:'',

  if(!cart.length) return <EmptyCart/>

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Lets go!</h2>
      
      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center sm:gap-0">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" defaultValue={user} name="customer" required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center sm:gap-0">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required/>
          {formError?.phone && <p className="text-xs mt-2 text-red-700">{formError.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center sm:gap-0 relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" disabled={isLoadingAddress} defaultValue={address} required />
            {AddressStatus==='error' && <p className="text-xs font-semibold mt-2 text-red-700 animate-bounce">{errorAddresss}</p>}
          </div>
          {!Position.latitude && !Position.longitude && <span className="absolute right-[3px] top-8 z-50  sm:top-[1px] md:top-[5px]">
          <Button type="small" disabled={isLoadingAddress}  onClick={(e)=>{
            e.preventDefault()
            dispatch(fetchAddress())
          }}>get pos</Button>
          </span>}

        </div>

        <div className ="mb-12 flex gap-5 items-center">
          <input
          className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center sm:gap-0">
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <input type="hidden" name="position" value={Position.longitude && Position.latitude?`${Position.latitude},${Position.longitude}`:``} />
          <Button type="primary" disabled={isSubmitting | isLoadingAddress}>{isSubmitting?'Placing order..':`Order Now for ${formatCurrency(totalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request}){
  const formdata =  await request.formData();
  const data = Object.fromEntries(formdata);
  // console.log(data)
  const order ={
    ...data,
    cart:JSON.parse(data.cart),
    prority:data.prority==='true'
  }

  const errors = {}
  if(!isValidPhone(order.phone)) errors.phone = "Please GIve Correct Phone number";

  if(Object.keys(errors).length>0) return errors;
  // if everthing is okay then order
  const neworder = await createOrder(order);
  store.dispatch(clearCart());
  store.dispatch(updateOrders(neworder.id))
  return redirect(`/order/${neworder.id}`); 
}
export default CreateOrder;

