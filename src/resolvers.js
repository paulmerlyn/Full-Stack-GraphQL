const { productsData, usersData, categoriesData } = require('./data/data');
const { UserInputError } = require('apollo-server');
const mongoose = require('mongoose')
const Product = require('./models/Product.js')
const Category = require('./models/Category.js')
const User = require('./models/User.js')

async function run() {
  await mongoose.connect('mongodb://localhost:27017'); // courtesy: https://masteringjs.io/tutorials/mongoose/using-insertone-in-mongoose
}

const resolvers = {
  Query: {
    appName: () => 'ProductHunt polo clone',

    allProducts: () => { 
      console.log('Calling resolver for Query.allProducts'); 
      return productsData  // this was how we did things before we started using the MongoDB, storing our data in memory
    },

    // This  attempt to use the MongoDB/Mongoose rather than data/data.js as the data store is abortive b/c of errors
    // allProducts: () => {
    //   return Product.find({})
    // },

    allCategories: () => {
      return categoriesData
    },
    
    productsByAuthor: (_, args) => {  // instead of using args in this way, we could alternatively use destructuring i.e. (_, { authorName }) => ...
      const user = usersData.find(user => user.userName === args.authorName)
      if (!user) throw new UserInputError('not a valid author userName')
      return productsData.filter(product => product.authorId === user?.id)
    },

    productsByCategory: (_, { slug }) => {
      // Find category id that pertains to slug
      const categoryId = categoriesData.find(category => category.slug === slug).id
      // ... and return all products whose categories property includes that category id
      return productsData.filter(product => product.categories.includes(categoryId))
    }
  },

  Mutation: {
    createProduct: async(_, { input } ) => {
      const mongoDB = 'mongodb://user:pass@127.0.0.1:27017/products-db'

      run()
      console.log('Calling createProduct mutation with input: ', input)
      //const author = await User.findOne({userName: "ellen"})
      const author = await User.findById('3d6fad714086e3bfcfceac54').exec()
      console.log('Found author is: ', author)
      return Product.create({
        name: input.name,
        description: input.description,
        url: input.url,
        numberOfVotes: 0,
        publishedAt: Date.now(),
        authorId: author._id,
        categoriesIds: input.categoriesIds,
       });
    },

    createCategory: async(_, { input } ) => {
      return Category.create({
        slug: input.slug,
        name: input.name,
       });
    }
  },

  // Specifies how to resolve fields for the Product type
  Product: {
    author: (product) => {
      console.log(`Calling resolver for Product.author with product ${product.name}`);
      return usersData.find(user => user.id === product.authorId)
    },
    categories: (product) => {
      console.log(`Calling resolver for Product.category with product ${product.name}`)
      return categoriesData.filter(category => {
        return product.categories.includes(category.id)
      })
    }
  },

  // Specifies how to resolve fields of the User type
  User: {
    organization: (user) => {
      return user.orgId % 2 === 0 ? { id: user.orgId, name: 'FBI' }  : { id: user.orgId, name: 'CIA' };
    }
  }
}

module.exports = { resolvers }