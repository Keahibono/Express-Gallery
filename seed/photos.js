var models = require('../models');
var Photo = models.Photo;

models.sequelize
.sync({ force: true})
.then(function(){
  Photo.bulkCreate([
    {
      author: "Mountain Hill Cabin Kitten",
      link: "https://placekitten.com/640/480?image=12",
      description: "placekittens.com"
    },
    {
      author: "Mountain Hill Cabin Kitten",
      link: "https://placekitten.com/640/480?image=15",
      description: "placekittens.com"
    },
    {
      author: "Mountain Hill Cabin Kitten",
      link: "https://placekitten.com/640/480?image=11",
      description: "placekittens.com"
    },
    {
      author: "Mountain Hill Cabin Kitten",
      link: "https://placekitten.com/640/480?image=18",
      description: "placekittens.com"
    }
  ])
});

