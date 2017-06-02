const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Chano Rivera', email: 'chano.rivera@thesophiegroup.com', password: 'sophie17'},
  {name: 'Kelley Rivera', email: 'kelley.rivera@thesophiegroup.com', password: 'sophie17'},
], user => db.model('users').create(user))

const seedForRents = () => db.Promise.map([
  {address1: '60-24 Woodbine St.', address2: "Ridgewood NY 11385", description: "Want the city life and the benefits of quiet suburbs? This house is perfect for you. Easy train access lets you get to the main metropolitan area quickly, while still having the option to enjoy life outside the hustle and bustle of the city.", price: 40000, bedroomNum: 4, bathroomNum: 2, squareFeet: 400, lotSize: 600, features: 'Pool, Central Heating, Wine Cellar', mainImageUrl: "http://clv.h-cdn.co/assets/cm/15/09/54eb988eefedc_-_small-of-fame-yellow-house-0215-xln-81871600.jpg", extraImageUrls: "https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg, https://blogs-images.forbes.com/brandonturner/files/2016/10/House21.jpg?width=960", sold: false, zillow: "https://www.zillow.com", mls: "www.mls.com"},
  {address1: '750 Main St.', address2: 'Worcester MA 01610', description: "A home for those that like easy-living. Located in a quiet neighborhood, you can truly relax and feel at home!", price: 40000, bedroomNum: 4, bathroomNum: 2, squareFeet: 400, lotSize: 600, features: 'Pool, Central Heating, Wine Cellar', mainImageUrl: "http://clv.h-cdn.co/assets/16/31/1600x800/gallery-1470159442-outside-the-lines-house-0916-index.jpg", extraImageUrls: "https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg, https://blogs-images.forbes.com/brandonturner/files/2016/10/House21.jpg?width=960", sold: false, zillow: "https://www.zillow.com", mls: "www.mls.com"},
  {address1: '41-00 43rd Ave.', address2: "Sunnyside NY 11104", description: 'A great home for those that want to be in the middle of a cultural hub! With easy train access and a variety of businesses, you could not go wrong!', price: 40000, bedroomNum: 4, bathroomNum: 2, squareFeet: 400, lotSize: 600, features: 'Pool, Central Heating, Wine Cellar', mainImageUrl: "http://weknownyourdreamz.com/images/house/house-06.jpg", extraImageUrls: "https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg, https://blogs-images.forbes.com/brandonturner/files/2016/10/House21.jpg?width=960", sold: true, zillow: "https://www.zillow.com", mls: "www.mls.com"}
], forRent => db.model('forRent').create(forRent))

const seedForSales = () => db.Promise.map([
  {address1: '41-00 43rd Ave.', address2: "Sunnyside NY 11104", description: 'A great home for those that want to be in the middle of a cultural hub! With easy train access and a variety of businesses, you could not go wrong!', price: 40000, bedroomNum: 4, bathroomNum: 2, squareFeet: 400, lotSize: 600, features: 'Pool, Central Heating, Wine Cellar', mainImageUrl: "http://weknownyourdreamz.com/images/house/house-06.jpg", extraImageUrls: "https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg, https://blogs-images.forbes.com/brandonturner/files/2016/10/House21.jpg?width=960", sold: true, zillow: "https://www.zillow.com", mls: "www.mls.com"},
  {address1: '750 Main St.', address2: 'Worcester MA 01610', description: "A home for those that like easy-living. Located in a quiet neighborhood, you can truly relax and feel at home!", price: 40000, bedroomNum: 4, bathroomNum: 2, squareFeet: 400, lotSize: 600, features: 'Pool, Central Heating, Wine Cellar', mainImageUrl: "http://clv.h-cdn.co/assets/16/31/1600x800/gallery-1470159442-outside-the-lines-house-0916-index.jpg", extraImageUrls: "https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg, https://blogs-images.forbes.com/brandonturner/files/2016/10/House21.jpg?width=960", sold: false, zillow: "https://www.zillow.com", mls: "www.mls.com"},
  {address1: '60-24 Woodbine St.', address2: "Ridgewood NY 11385", description: "Want the city life and the benefits of quiet suburbs? This house is perfect for you. Easy train access lets you get to the main metropolitan area quickly, while still having the option to enjoy life outside the hustle and bustle of the city.", price: 40000, bedroomNum: 4, bathroomNum: 2, squareFeet: 400, lotSize: 600, features: 'Pool, Central Heating, Wine Cellar', mainImageUrl: "http://clv.h-cdn.co/assets/cm/15/09/54eb988eefedc_-_small-of-fame-yellow-house-0215-xln-81871600.jpg", extraImageUrls: "https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg, https://blogs-images.forbes.com/brandonturner/files/2016/10/House21.jpg?width=960", sold: true, zillow: "https://www.zillow.com", mls: "www.mls.com"}
], forSale => db.model('forSale').create(forSale))

const seedBlogPosts = () => db.Promise.map([
  {title: 'test 1', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {title: 'test 2', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {title: 'test 3', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
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
