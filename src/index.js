const { ApolloServer, gql } = require('apollo-server')
const { readSchema } = require('./schema.js')
const { resolvers } = require('./resolvers.js');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

const typeDefs = readSchema()

const server = new ApolloServer({
  typeDefs, // schema for our GraphQL API
  resolvers, // implementation of queries and types
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ]
})

server.listen().then(res => {
  console.log(`GraphQL server is listening on default port 4000`)
}).catch(err => `GraphQL server error: ${err}`)