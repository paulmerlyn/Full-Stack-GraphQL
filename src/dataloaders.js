// server/src/dataloaders.js

const DataLoader = require('dataloader')
const Category = require('./models/Category.js')

function categoriesLoader() {
  return new DataLoader(async (categoriesIds) => {
    // Fetch all categories with IDs passed to the function 
    const categories = await Category.find().where('_id').in(categoriesIds)
    // Convert the result list into a map, where the key is a 
    // category's ID, and a value is fetched category
    const categoryForId = Object.fromEntries(
      categories.map(c => [c.id, c])
    )
    // Return a category object for each category ID in the input
    return categoriesIds.map(categoryId => categoryForId[categoryId])
  })
}

function usersLoader() {
  return new DataLoader(async (usersIds) => {
    // Fetch all users with IDs passed to the function 
    const users = await User.find().where('_id').in(usersIds)
    // Convert the result list into a map, where the key is a 
    // user's ID, and a value is fetched user
    const userForId = Object.fromEntries(
      users.map(u => [u.id, u])
    )
    // Return a user object for each user ID in the input
    return usersIds.map(userId => userForId[userId])
  })
}

// Export a function to create a categoriesLoader function
module.exports = {
  categoriesLoader,
  usersLoader
}