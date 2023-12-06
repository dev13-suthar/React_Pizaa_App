import { Link } from 'react-router-dom';
import img from "../../ui/empty.png"

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>
      <section className="flex items-center justify-center">
          <img src={img} alt="" className="h-full w-full mix-blend-multiply"/>
      </section>
    </div>
  );
}

export default EmptyCart;
