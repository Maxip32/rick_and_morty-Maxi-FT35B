import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo.png"
//import { useDispatch } from "react-redux";
//import { getFavorite } from "../redux/actions";

const Nav= ({onSearch})=>{
    // const dispatch= useDispatch()
   return(
<nav>
<div>
<img src={logo} alt="logo" width="300px" height="85px"/>

<div className="stiloslinks">

     <h4> <Link to="home" >    <button className="botonNav">Home</button>    </Link> </h4>
     <h4> <Link to= "/favorites"  >    <button className="botonNav">Favorites</button>     </Link> </h4>
     {/* <button onClick={()=> dispatch(getFavorite())}>Get Favorites</button>  */}
<SearchBar onSearch={onSearch}/>
     <h4> <Link to="about">   <button className="botonNav">About</button>   </Link> </h4>
     <h4> <Link to= "/"  >    <button className="botonNav">Logout</button>     </Link> </h4>
    
    
    
    


</div>



</div>

</nav>

    )
}

export default Nav;