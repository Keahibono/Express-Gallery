var models = require('../models');
var Photo = models.Photo;

models.sequelize
.sync({ force: true})
.then(function(){
  Photo.bulkCreate([
    {
      author: "Mountain Kitten",
      link: "https://placekitten.com/640/480?image=12",
      description: "placekittens.com"
    },
    {
      author: "Mountain Hill Cabin Kitten",
      link: "https://placekitten.com/640/480?image=15",
      description: "placekittens.com"
    },
    {
      author: "Adult Kitten",
      link: "https://placekitten.com/640/480?image=11",
      description: "placekittens.com"
    },
    {
      author: "My Kitten",
      link: "https://placekitten.com/640/480?image=18",
      description: "placekittens.com"
    },
    {
      author: "Buutercup Kitten",
      link: "https://placekitten.com/640/480?image=1",
      description: "placekittens.com"
    },
    {
      author: "Sexxy Kitten",
      link: "https://placekitten.com/640/480?image=13",
      description: "placekittens.com"
    },
    {
      author: "Multi Kitten",
      link: "https://placekitten.com/640/480?image=2",
      description: "placekittens.com"
    }
  ])
});

