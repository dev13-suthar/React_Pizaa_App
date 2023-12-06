import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";


export default function DeleteItem({pizzaID}) {
    // console.log(pizzaID)
    const disptach = useDispatch();
  return (
    <Button type="small"onClick={()=>disptach(deleteItem(pizzaID))}>Delete</Button>
  )
}
