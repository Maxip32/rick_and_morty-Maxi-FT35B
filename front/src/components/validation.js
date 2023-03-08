const validation= (userData)=>{
let errors={};

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)  ){

errors.username= "El Email es invalido";
}
if (!userData.username){

    errors.username="Este campo no puede estar vacio";
}

if(userData.username.length > 35){

    errors.username= " El email debe contener como maximo 35 caracteres";
}

if(!userData.password.match(/\d/)){

    errors.password="La contraseña debe contener un numero";
}

if(userData.password.length < 6 || userData.password.length > 10){

    errors.password="La password debe contener entre 6 y 10 caracteres";
}

return errors;

}

export default validation;