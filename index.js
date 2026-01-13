const app = require('./app');
require('./config/db');

const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World");
});

// Listen on all interfaces so your phone can reach it
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
