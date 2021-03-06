var express = require('express');
var app = express();
var router = express.Router();
var models  = require('./models');
var Photo = models.Photo;


var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

var config = require('./config/config.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);



app.use(methodOverride(function(req, res, next){
  if(req.body && typeof req.body == 'object' && '_method' in req.body){
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// app.use('/gallery', require('./route/gallery'));

router.route('/')
  .get(function (req, res){
    return Photo.findAll({
      order: [
        [models.Sequelize.fn('RANDOM')]
      ],
      limit: 6
    })
    .then(function(table){
      return res.render('gallery', {
              table: table
      })
    })
  });


// router.route('/gallery/:id', function (req, res, next){
//   if (req.params.id === 0 || req.params.id === void(0)){
//     res.redirect('/');
//   }
// });

router.route('/gallery/:id')
  .get(function (req, res){
    return Photo.findAll({
      order: [
        [models.Sequelize.fn('RANDOM')]
      ],
      limit: 4
    })
    .then(function (table){
      return Photo.findOne({
        where : {id: req.params.id}
      })
      .then(function(photo){
        return res.render('id', {
                                      singlePhoto: photo,
                                      table: table
        });
      })
    })
  });

app.get('/new', function (req, res){
  res.render('new_photo');
});

app.get('/edit', function (req, res){
  res.render('edit_photo');
});


app.post('/new_photo', function(req, res, next){
  Photo.create({
    author: req.body.author,
    link: req.body.link,
    description: req.body.description
  });
  res.redirect('/');
});


var server = app.listen(config.port, function (){
  console.log('working properly');
});