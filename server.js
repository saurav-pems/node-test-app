const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(`request arrived `);
  return res.json({
    message: 'hello-world',
  });
});

app.listen(9000, () => {
  console.log(`nodejs app is live and listening to rquests`);
});
