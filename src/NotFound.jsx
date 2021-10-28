import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <p>Sorry this Page was not Found...</p>
        <Link to="/">Back To Home Page...</Link>
        </div>
     );
}
 
export default NotFound;