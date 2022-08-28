const fs=require ("fs")
const save = () => {
    fs.writeFile(__dirname+"/db.json",JSON.stringify(drains,null,2), (error) =>{
        if (error) console.log(error) 
    })
}

let drains = require('./db.json')

module.exports = {
    getDrain: (req, res) => {
    res.status(200).send(drains)
    },
    deleteDrain:(req, res) => {
    let index = drains.findIndex(elem => elem.id === +req.params.id)
        drains.splice(index, 1)
    
        res.status(200).send(drains);
        save()       
    },
    addDrain: (req, res) => {
        let{nearestAddress, city, blockage} =req.body
        let newDrain = {
            id: (drains.length)+1,
            nearestAddress,
            city,
            blockage
        }
        drains.push(newDrain)

        res.status(200).send(drains)
        save()
    },
    updateDrain: (req, res) => {
      let {id } =req.params
    //   let {type } = req.body  
      let index = drains.findIndex(elem => +elem.id === +id)

      if (drains[index].blockage != "none") {
        drains[index].blockage === "none"
 
        res.status(200).send(drains)
    save()    
    }else{
        res.sendStatus (400)
    }
}
}
