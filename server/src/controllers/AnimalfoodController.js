const { where } = require('sequelize')
const{Animalfood} = require('../models')
module.exports = {
  //get all user
  async index (req, res) {
    try {
      const animalfoods = await Animalfood.findAll()
      res.send(animalfoods)
    } catch (error) {
      res.status(500).send({
         error: 'The snimalfoods information was incorrect'
        })
    }
   
  },

  //create user
  async create(req, res) {
    try {
      const animalfood = await Animalfood.create(req.body)
      res.send(animalfood.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The animalfoods information was incorrect'
        })
    }
  },

  //edit user
  async put(req, res) {
    try {
      await Animalfood.update(req.body,{
      where: {
        id: req.params.animalfoodsId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update animalfood information was incorrect'
        })
    }
  },

  // delete user
  async delete(req, res) {
    try {
      const animalfood = await Animalfood.findOne({
        where: {
          id: req.params.animalfoodId
        }
      })
      if (!animalfood) {
        return res.status(403).send({
          error: 'The animalfood id is not found'
        })
      }
      await animalfood.destroy()
      res.send(animalfood)
    } catch (error) {
      res.status(500).send({
        error: 'Delete animalfood information was incorrect'
       })
    }
  },

  // show user by id
  async show (req, res) {
    try {
      const animalfood = await Animalfood.findOne({
        where: {
          id: req.params.animalfoodsId
        }
      })
      if (!animalfood) {
        return res.status(403).send({
          error: 'The animalfood id is not found'
        })
      }

      res.send(animalfood)
    } catch (error) {
      res.status(500).send({
        error: 'Animalfoods information was incorrect'
       })
    }
  }
}
