const axios = require("axios");

const getCharById =  async (req, res) => {
    const params = req.params
    console.log(params, "esto es params"); 
    //const URL = "https://rickandmortyapi.com/api/character/"

const result= await axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)

.then(res => res.data)
.then(data => {
      return{
               key: data.id,
               id: data.id,
               name: data.name,
               image: data.image,
              gender: data.gender,
              species: data.species
      }
     } )
   //console.log(result, "estos es el resultado")
      
      .catch(err=> res.status(500).json({error: err.message}) );
      return res.status(200).json(result)


}

module.exports= getCharById;




         



         // res
//  .writeHead(200, { "Content-type": "application/json" })
       // .end(JSON.stringify(character))

   // })
   // .catch(err => 
      //  res
       // .writeHead(500, { "content-type": "text/plain" })
        //.end(`El personaje con id:${id} no fue encontrado`)
  //  )



module.exports = getCharById;