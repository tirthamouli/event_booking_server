# GraphQl
1. It is a replacement or built on top of rest API
2. It is stateless, client-independent API for exchanging data with higher query flexibility.

## Rest API limitations
1. May get unnecessary data back when it is not needed
2. May reqire a lot of end points. It slows down development process
3. May require complex APIs to manage with a few APIs
Eg: What data is needed can be sent using query parameters.

## What graphQL solves?
1. Build a backend with one end point and a querying language to query for the required data

## What graphQL does?
1. It is basically a specification that defines a query language which clients can use to query data from the back end. 
2. The job of the back end is to parse these incomming queries, create a response and send the response back to the front end.
3. Query parser in the back end requires two things
   a. Package or tool that is capable of understanding graphql queries. since the queries are standardized, such tools exists (express-graphql middle ware)
   b. Schema - the schema for the queries and mutations (We need to define)
3. We always send post requests to one endpoint even while trying to get data
4. Only has one single end point
5. Exposes a query language to the front end
6. We don't use get request because the query is sent using post
7. We don't have to write the parser on our own, there are parsers for nodeJS, php etc
8. GraphQL works with any front end framework

### Packages
1. express-graphql: 
   a. A graphql package that can be used as a middleware in express. 
   b. This allows us to point at schemas, resolvers and automatically connect that for us.
   c. It basically parses the request and handles them according to the schema definition by sending it to the correct resolver
2. graphql: Create graphql schema

## GraphQL query
{ 
  // Operation type
  query {
    // End point
    user {
      name // Requested field
      age // Requested field
    }
  }
}

EG:
mutation {
  createEvent(eventInput:{ title: "Another test", description: "Some other description", price: 50 }){
    id,
    title,
    description,
    price,
    date,
  }
}

query {
  events {
    id,
    date,
    title
  }
}

1. Operation Type - 
   a. Query - GET request
   b. Mutation - POST/PUT/PATCH/DELETE methods
   c. Subscriptions - Set up real time connections via web sockets