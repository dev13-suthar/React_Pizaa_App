import { useRouteError } from 'react-router-dom';
import Linkbutton from './Linkbutton';

function NotFound() {

  const err = useRouteError();
  // console.log(err.data)
  // let rr = err.data

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{err.message || err.data}</p>
      <Linkbutton to="-1">&larr; Go back anywhere</Linkbutton>
    </div>
  );
}

export default NotFound;
