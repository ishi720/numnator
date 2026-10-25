const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));

// history モードのルーティング用に、静的ファイル以外は index.html を返す
app.get('/{*splat}', (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`http://localhost:${port}`);
  console.log('Press Ctrl+C to quit.');
});