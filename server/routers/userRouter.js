const express = require('express');
const userController = require('../Controllers/userController')
const router = express.Router();

router.post('/signup', userController.signUp, (req, res) => {
    console.log('hello from signup router')
    res.status(200).json(res.locals.userDoc)
} )

router.post('/login', userController.login, (req, res) => {
    console.log('hello from login router')
    res.status(200)
})

router.get('/profile', userController.checkProfile, (req,res) => {
    console.log('hello from profile router')
    res.status(200)
})
router.post('/save', userController.saveItinerary, (req, res) => {
    console.log('hello from save router')
    res.status(200)
})

router.post('/logout', userController.logOut, (req, res) => {
    res.status(200)
} )

router.get('/myitinerary', userController.serveItinerary, (req, res) => {
    res.status(200).json(res.locals.userItin)
})





module.exports = router