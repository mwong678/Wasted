const express = require('express');
const path = require('path');

const app = express();
const htmlPath = path.join(__dirname, 'public');

app.use(express.static(htmlPath));

app.get('/', (req, res) => {
  res.sendFile(htmlPath);
});

app.set('port', process.env.PORT || 4100);
const server = app.listen(app.get('port'), () => {
  console.log('Express running on PORT ' + (process.env.PORT || 4100));
  console.log(path.join(__dirname, 'public'));
});
