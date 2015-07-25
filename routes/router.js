var express = require('express');
var router = express.Router();

module.exports = router;

router.use(function(req, res){

});

// router.route('/')
//   .get('/gallery');

router.route('/:id')
  .all(function(req, res, next){
    var id = req.params.id;
    if (!isNan(id)){
      return next;
    }
});

