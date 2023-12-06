import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import Loaderr from "./Loaderr";

export default function Applayout() {
  const navigation = useNavigation();
  const isloading = navigation.state==='loading'
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isloading && <Loaderr/>}
      


      <Header/>
    <div className="overflow-scroll">
      <main className="max-w-3xl  mx-auto">
        <Outlet/>
      </main>
      </div>
      <CartOverview/>
    </div>
  )
}
