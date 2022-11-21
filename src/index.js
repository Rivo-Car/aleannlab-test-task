const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static(
  path.join(process.cwd(), './static'),
  { redirect: false },
));

app.get('/names', (req, res) => {
  res.render('main', {
    body: 'names',
    title: 'List of Names',
    names: [
      { id: 1, name: 'Name 1', rank: 10 },
      { id: 2, name: 'Name 2', rank: 20 },
    ],
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening: http://localhost:3000');
});
