const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    host: '127.0.0.1',
    port: 27017,
    name: 'products-db',
    user: 'admin',
    pwd: 'pass',
  },
  dropDatabase: true,
};

const seeder = new Seeder(config);

const path = require('path');
const collections = seeder.readCollectionsFromPath(path.resolve("./src/data"));

(async () => {
  try {
    await seeder.import(collections);
  } catch (err) {
    // Handle errors
    console.log(`Error seeding database: ${err}`)
  }
  // Do whatever you want after successful import
})()
