const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail =  async (req, res) => {
 
    const params = req.params
    try{
      
      const response = await axios.get(URL + params.id);
      const character=  {
        
        id: response.data.id,
        name: response.data.name,
        image: response.data.image,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin,
        status: response.data.status
      }
      res.status(200).json(character)

}catch (error) {
res.status(500).json(error.message)

}
}
    module.exports = getCharDetail;

 