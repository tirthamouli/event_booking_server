const express = require('express');
const bodyParser = require('body-parser');
const graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// Step 1: Create a new app
const app = express();

// Step 2: Use body-parser
app.use(bodyParser.json());

const events = [];

// Step 3: Define middleware
app.use('/graphql', graphql({
  schema: buildSchema(`
    type Event {
      id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }
  
    schema {
      query: RootQuery
      mutation: RootMutation   
    }
  `),
  rootValue: {
    events: () => events,
    createEvent: ({ eventInput }) => {
      const { title, description, price } = eventInput;

      const newEvent = {
        id: Math.random().toString(),
        title,
        description,
        price: +price,
        date: new Date().toISOString(),
      };
      events.push(newEvent);
      return newEvent;
    },
  },
  graphiql: true,
}));

// Step 4: Define check
app.get('/', (req, res, _next) => {
  res.send('Hello world');
});

// Step 3: Listen on port
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000');
});
