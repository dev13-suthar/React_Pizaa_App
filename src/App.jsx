import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home"
import Menu, { loader } from "./Features/menu/Menu"
import Cart from "./Features/cart/Cart"
import CreateOrder,{action as createAction} from "./Features/order/CreateOrder";
import Order, { Orderloader } from "./Features/order/Order"
import {action as updateOrderAction} from "./Features/order/UpdateOrder"
import Applayout from "./ui/Applayout";
import Error from "../src/ui/Error" 

const router =createBrowserRouter([
  {
    element:<Applayout/>,
    errorElement:<Error/>,
    children:[
      { 
        path: '/', 
        element: <Home /> },
      {
        path: '/menu',  
        element: <Menu />,
        loader:loader,
        errorElement:<Error/>,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action:createAction,    
      },
      {
        path: '/order/:orderID',
        element: <Order />,
        loader:Orderloader,
        errorElement:<Error/>,
        action:updateOrderAction,
      }
    ],
  },
])

export default function App() {
  return <RouterProvider router={router}/>
}
