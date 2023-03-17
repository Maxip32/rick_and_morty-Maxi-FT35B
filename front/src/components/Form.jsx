import { useState } from "react";
import validation from "./validation";
import "./Form.css"
import logo from "../../src/assets/logo.png"
const Form=({login})=>{

    const [userData, setUserData] = useState({ username: '', password: '' });

    
    const [errors, setError]= useState({

        username: '', 
        password: ''
})

 const handleInputChange= (event)=>{

setUserData({

    ...userData,
    [event.target.name]: event.target.value
})

setError(validation({

...userData,
[event.target.name]: event.target.value

}))

}
 const handleSubmit=(event)=>{
event.preventDefault();
    login(userData);

}

    return(
    <div>
<img src={logo} alt="logo" width="300px" height="85px"/>
<br></br>
    <form onSubmit={handleSubmit}>

    <label htmlFor="username" style={{color:"red"}} >Username: </label>

    <input className="inpusuario" type="text" name="username" value={userData.username} onChange={handleInputChange} />
    
    {errors.username && <p style={{color:"red"}}>{errors.username}</p>}

        
    <label htmlFor="password" style={{color:"red"}} >Password: </label>
    
    <input className="inpusuario" type="password" name="password" value={userData.password} onChange={handleInputChange} />

    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
        
<button className="estilologin">LOGIN</button>
 </form>


    </div>
    
)

}
export default Form;







