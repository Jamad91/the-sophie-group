const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedForRents = () => db.Promise.map([
  {address1: '60-24 Woodbine St.', address2: "Ridgewood NY 11385", description: 'this is the House 1', bedroomNum: 4, bathroomNum: 2, squareFeet: 400, mainImageUrl: "https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png", extraImageUrls: "http://img11.deviantart.net/2f29/i/2012/292/d/4/simpson__s_house_cutaway_second_floor_by_ajdelong-d5ib3qa.jpg, https://s-media-cache-ak0.pinimg.com/originals/09/8a/15/098a15e3b90c6e2b63bc1941f64f63d2.jpg"},
  {address1: '750 Main St.', address2: 'Worcester MA 01610', description: 'this is the House 2', bedroomNum: 4, bathroomNum: 2, squareFeet: 400, mainImageUrl: "http://static.planetminecraft.com/files/resource_media/screenshot/1408/family_guy_griffin_house.jpg", extraImageUrls: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2012/12/13/12/enhanced-buzz-25249-1355420136-23.jpg, https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/c49/a9/fg2.jpg"},
  {address1: '41-00 43rd Ave.', address2: "Sunnyside NY 11104", description: 'this is the House 3', bedroomNum: 4, bathroomNum: 2, squareFeet: 400, mainImageUrl: "http://cdn.history.com/sites/2/2015/03/hungry-history-cooking-for-the-commander-in-chief-20th-century-white-house-chefs-iStock_000004638435Medium-E.jpeg", extraImageUrls: "https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/8E13573F-1DD8-B71B-0B05716AAF1D3D48.jpg?width=465&quality=90&mode=crop, http://www.whitehousemuseum.org/west-wing/oval-office/oval-office-c1996.jpg"}
], forRent => db.model('forRent').create(forRent))

const seedForSales = () => db.Promise.map([
  {address1: '41-00 43rd Ave.', address2: "Sunnyside NY 11104", description: 'this is the House 3', bedroomNum: 4, bathroomNum: 2, squareFeet: 400, mainImageUrl: "http://cdn.history.com/sites/2/2015/03/hungry-history-cooking-for-the-commander-in-chief-20th-century-white-house-chefs-iStock_000004638435Medium-E.jpeg", extraImageUrls: "https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/8E13573F-1DD8-B71B-0B05716AAF1D3D48.jpg?width=465&quality=90&mode=crop, http://www.whitehousemuseum.org/west-wing/oval-office/oval-office-c1996.jpg", sold: true},
  {address1: '750 Main St.', address2: 'Worcester MA 01610', description: 'this is the House 2', bedroomNum: 4, bathroomNum: 2, squareFeet: 400, mainImageUrl: "http://static.planetminecraft.com/files/resource_media/screenshot/1408/family_guy_griffin_house.jpg", extraImageUrls: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2012/12/13/12/enhanced-buzz-25249-1355420136-23.jpg, https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/c49/a9/fg2.jpg", sold: false},
  {address1: '60-24 Woodbine St.', address2: "Ridgewood NY 11385", description: 'this is the House 1', bedroomNum: 4, bathroomNum: 2, squareFeet: 400, mainImageUrl: "https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png", extraImageUrls: "http://img11.deviantart.net/2f29/i/2012/292/d/4/simpson__s_house_cutaway_second_floor_by_ajdelong-d5ib3qa.jpg, https://s-media-cache-ak0.pinimg.com/originals/09/8a/15/098a15e3b90c6e2b63bc1941f64f63d2.jpg", sold: false}
], forSale => db.model('forSale').create(forSale))

const seedBlogPosts = () => db.Promise.map([
  {title: 'test 1', content: 'first blog post'},
  {title: 'test 2', content: 'second blog post'},
], blog => db.model('blog').create(blog))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedForSales)
  .then(forSales => console.log(`Seeded ${forSales.length} forSales OK`))
  .then(seedForRents)
  .then(forRents => console.log(`Seeded ${forRents.length} forRents OK`))
  .then(seedBlogPosts)
  .then(blogPosts => console.log(`Seeded ${blogPosts.length} blog posts OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
