const express = require('express');
const bodyParser = require('body-parser');

// Step 1: Create a new app
const app = express();

// Step 2: Use body-parser
app.use(bodyParser.json());

app.get('/', (req, res, _next) => {
  res.send('Hello world');
});

// Step 3: Listen on port
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000');
});
