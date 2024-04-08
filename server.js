const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  console.log(`request arrived `);
  return res.json({
    message: 'hello-world',
  });
});

mongoose
  .connect(
    'mongodb+srv://sushant:12345@cluster1.s7g4gii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
    {
      dbName: 'test',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('💾 connected...');
    app.listen(8000, () =>
      console.log(`🚀Going live @ http://localhost:${8000}`)
    );
  })
  .catch((err) => console.log(err.message));
