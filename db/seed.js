const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedForRents = () => db.Promise.map([
  {title: 'house1', description: 'this is the House 1', imageURL: "./assets/742_Evergreen_Terrace.png"},
  {title: 'house2', description: 'this is the House 2', imageURL: "./assets/31_Spooner_Street.jpg"},
  {title: 'house3', description: 'this is the House 3', imageURL: "./assets/1600_Pennsylvania_Avenue.jpg"}
], forRent => db.model('forRent').create(forRent))

const seedForSales = () => db.Promise.map([
  {title: 'house3', description: 'this is the House AA', imageURL: "./assets/1600_Pennsylvania_Avenue.jpg"},
  {title: 'house2', description: 'this is the House BB', imageURL: "./assets/31_Spooner_Street.jpg"},
  {title: 'house1', description: 'this is the House CC', imageURL: "./assets/742_Evergreen_Terrace.png"},
], forSale => db.model('forSale').create(forSale))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedForSales)
  .then(forSales => console.log(`Seeded ${forSales.length} forSales OK`))
  .then(seedForRents)
  .then(forRents => console.log(`Seeded ${forRents.length} forRents OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
