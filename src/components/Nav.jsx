import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav= ({onSearch})=>{
   return(
<nav>
<SearchBar onSearch={onSearch}/>

<div className="stiloslinks">

    <Link to="home" >    <span>Home</span>    </Link>
    <Link to="about">   <span>About</span>   </Link>
    <Link to= "/"  >    <span>Logout</span>     </Link>
    <Link to= "/favorites"  >    <span>Favorites</span>     </Link>


</div>

</nav>

    )
}

export default Nav;