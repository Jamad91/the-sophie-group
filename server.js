'use strict';

const express = require('express');
const volleyball = require('volleyball');
const path = require('path')

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

const forSales = [{
  id: 1,
  title: '742 Evergreen Terrace',
  image: './public/assets/742_Evergreen_Terrace.png'
}, {
  id: 2,
  title: '31 Spooner St.',
  image: './public/assets/31_Spooner_Street.jpg'
}, {
  id: 3,
  title: '1600 Pennsylvania Ave.',
  image: './public/assets/1600_Pennsylvania_Avenue.jpg'
}]

const forRents = [{
  id: 1,
  title: '1600 Pennsylvania Ave.',
  image: './public/assets/1600_Pennsylvania_Avenue.jpg'
}, {
  id: 2,
  title: '31 Spooner St.',
  image: './public/assets/31_Spooner_Street.jpg'
}, {
  id: 3,
  title: '742 Evergreen Terrace',
  image: './public/assets/742_Evergreen_Terrace.png'
}];


app.get('/api/buy', function (req, res) {
  res.json(forSales.map(({id, title, image}) => ({id, title, image})));
});

app.get('/api/rent', function (req, res) {
  res.json(forRents.map(({id, title, image}) => ({id, title, image})));
});

app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});
