import { useSelector } from "react-redux";
import CreateUser from "../Features/user/CreateUser";
import Button from "./Button";
// import { getOrder } from "../services/apiRestaurant";
import food from "../ui/preparation.png"
import { useNavigate } from "react-router-dom";
function Home() {
  const orderID = useSelector(state=>state.user.lastOrder)
  const Navigate = useNavigate();
  const user = useSelector(state=>state.user.username); 
  const handleCLick = ()=>{
      Navigate(`/order/${orderID}`);
  }
  return (
  <>
 
  <>
 {orderID===""?null:<button onClick={handleCLick} className="rounded-full right-5 bottom-[45px] absolute bg-slate-200 p-2 animate-bounce">
   <span className="z-50 opacity-100">
        <img src={food} alt="" srcSet="" height={'50px'} width={'50px'} />
      </span>
    </button>}
    </>
    <div className="my-10 sm:my-16 px-4 text-center relative">
      <h1 className="text-xl font-semibold mb-8 md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
        
      </h1>
      {user===''?<CreateUser/>:<Button type="secondary" to='/menu'>Start Order, <span className="font-bold italic">{user}</span></Button>}
    </div>
  </>
  );
}

export default Home;
