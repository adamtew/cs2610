var express = require('express')
  , router = express.Router();

  router.get('/', function(req,res){
    res.render('index', {
      title: "Welcome | Login"
    })
  })

  module.exports = router
