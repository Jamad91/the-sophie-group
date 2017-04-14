const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedForRents = () => db.Promise.map([
  {address1: '742 Evergreen Terrace', address2: "Springfield NY, 12345", description: 'this is the House 1', bedroomNum: 4, bathroomNum: 2, mainImageUrl: "./assets/742_Evergreen_Terrace.png", extraImageUrls: ["./assets/31_Spooner_Street.jpg", "./assets/1600_Pennsylvania_Avenue.jpg"]},
  {address1: '31 Spooner St', address2: 'Providence, RI 12345', description: 'this is the House 2', bedroomNum: 4, bathroomNum: 2, mainImageUrl: "./assets/31_Spooner_Street.jpg", extraImageUrls: ["./assets/742_Evergreen_Terrace.png", "./assets/1600_Pennsylvania_Avenue.jpg"]},
  {address1: '1600 Pennsylvania Ave', address2: "Washington D.C. 12345", description: 'this is the House 3', bedroomNum: 4, bathroomNum: 2, mainImageUrl: "./assets/1600_Pennsylvania_Avenue.jpg", extraImageUrls: ["./assets/742_Evergreen_Terrace.png", "./assets/31_Spooner_Street.jpg"]}
], forRent => db.model('forRent').create(forRent))

const seedForSales = () => db.Promise.map([
  {address1: '1600 Pennsylvania Ave', address2: "Washington D.C. 12345", description: 'this is the House 3', bedroomNum: 4, bathroomNum: 2, mainImageUrl: "./assets/1600_Pennsylvania_Avenue.jpg", extraImageUrls: ["./assets/742_Evergreen_Terrace.png", "./assets/31_Spooner_Street.jpg"]},
  {address1: '31 Spooner St', address2: 'Providence, RI 12345', description: 'this is the House 2', bedroomNum: 4, bathroomNum: 2, mainImageUrl: "./assets/31_Spooner_Street.jpg", extraImageUrls: ["./assets/742_Evergreen_Terrace.png", "./assets/1600_Pennsylvania_Avenue.jpg"]},
  {address1: '742 Evergreen Terrace', address2: "Springfield NY, 12345", description: 'this is the House 1', bedroomNum: 4, bathroomNum: 2, mainImageUrl: "./assets/742_Evergreen_Terrace.png", extraImageUrls: ["./assets/31_Spooner_Street.jpg", "./assets/1600_Pennsylvania_Avenue.jpg"]}
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
