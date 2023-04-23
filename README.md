## README for Educative Class on GraphQL

Source: https://www.educative.io/courses/full-stack-applications-with-graphql/YQ5GonBZLMp

### Summary
REALLY good course that features GraphQL on server (Apollo Server) using data stored in a file (data/data.js), then progresses to integrate with a MongoDB database via Mongoose before adding a React front-end (Apollo Client). Tons of great learning here from a nice, clear example. However, I run into errors (e.g. when trying to switch my resolvers.js to retrieving data from Mongo rather than from the file (data/data.js). Similarly, I get an error when using a mutation (e.g. in NewProduct.js) to write data to MongoDB (e.g. "Operation users.findOne() buffering timed out after 10000ms").

To run the project:
```npm run start```

First, we need to start a container with a MongoDB database.

```
cd educative // this directory is where our server code resides
npm run db:up
```

We also have the option to replace data in the database with the seed data using the db:seed command.
```
npm run db:seed
```

Once the database is running, we can start the server using the following command:
```
npm run start
```

Next, we start the client.
```
cd client
npm run start
```

After all these steps, we can go to localhost:4000 to use the application.
And we can go to localhost:3000 to access the front-end
And with mongo-express running, we can access this MongoDB client via http://localhost:8081/db/products-db/products

You can access the Apollo Studio explorer at https://studio.apollographql.com/sandbox/explorer
