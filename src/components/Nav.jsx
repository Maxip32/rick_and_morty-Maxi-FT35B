import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav= ({onSearch})=>{
   return(
<nav>

<div className="stiloslinks">

     <h4> <Link to="home" >    <span>Home</span>    </Link> </h4>
     <h4> <Link to= "/favorites"  >    <span>Favorites</span>     </Link> </h4>
<SearchBar onSearch={onSearch}/>
     <h4> <Link to="about">   <span>About</span>   </Link> </h4>
     <h4> <Link to= "/"  >    <span>Logout</span>     </Link> </h4>
    
    
    
    


</div>

</nav>

    )
}

export default Nav;