let {favs} = require("../utils/favs");

const addFav = (req, res) => {
  favs.push(req.body);
res.status(201).json(favs);
  };

  

const getFavs = (req, res) => {
  res.status(200).json(favs)
};

const deleteFav = (req, res) => {
const params= req.params;
favs =favs.filter((character)=> character.id !== Number(params.id))
 res.status(200).json(favs);
};

module.exports = { addFav, getFavs, deleteFav };