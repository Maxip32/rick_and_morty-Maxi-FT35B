import SearchBar from "./SearchBar"
import { Link, NavLink } from "react-router-dom";


const Nav= ({onSearch})=>{
    return(
<nav>
    <Link to="about">About</Link>
    
    
    <Link to="home">Home</Link>
<SearchBar onSearch={onSearch}/>

</nav>

    )
}

export default Nav;