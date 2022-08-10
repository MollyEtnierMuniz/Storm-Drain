let drains = require('./db.json')
let globalID = 4

module.exports = {
    getDrain: (req, res) => {
    res.status(200).send(drains)
    },
    deleteDrain:(req, res) => {
    let index = drains.findIndex(elem => elem.id === +req.params.id)
        drains.splice(index, 1)
        res.status(200).send(drains);
    },
    addDrain: (req, res) => {
        let{nearestAddress, city, blockage} =req.body
        let NewDrain = {
            id: globalID,
            nearestAddress,
            city,
            blockage
        }
        drains.push(NewDrain)
        res.status(200).send(drains)
        globalID++
    },
    updateDrain: (req, res) => {
      let {id } =req.params
      let {type } = req.body  
      let index = drains.findIndex(elem => +elem.id === +id)

      if (drains[index].blockage != "none") {
        drains[index].blockage === "none"
        res.status(200).send(drains)
    }else{
        res.sendStatus (400)
    }
}
}
