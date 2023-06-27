const express = require('express')
const {
    createUser,
    getUser,
    editUser,
    deleteUser
}   = require('../controllers/userController')

const router = express.Router();

router.get('/',home)
router.post('/createUser', createUser)
router.get('/getUser', getUser)
router.put('/editUser', editUser)
router.delete('/deleteUser', deleteUser)

module.exports = router