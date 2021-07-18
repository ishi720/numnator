const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`http://localhost:${port}`);
  console.log('Press Ctrl+C to quit.');
});