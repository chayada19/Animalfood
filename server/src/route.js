const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const AnimalfoodController = require('./controllers/AnimalfoodController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)

     // create user
     app.post('/user', UserController.create)

     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)

     // delete user
     app.delete('/user/:userId', UserController.delete)

     // get all user
     app.get('/user/:userId', UserController.show)

     // login
     app.post('/login', UserAuthenController.login)

     app.post('/animalfood', AnimalfoodController.create)

     app.get('/animalfoods', AnimalfoodController.index)

     app.put('/animalfoods/:animalfoodsId', AnimalfoodController.put)

     app.delete('/animalfood/:animalfoodId', AnimalfoodController.delete)

     app.get('/animalfoods/:animalfoodsId', AnimalfoodController.show)


}   