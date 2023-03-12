const  axios  = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"



const getCharDetail = async (req, res) => {
    const params = req.params 

const result= await axios.get(`${URL}${params}`)
.then(result => result.data)
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
   
      
      .catch(err=> res.status(500).json({error: err.message}) );
      return res.status(200).json(result)
}


module.exports = getCharDetail;