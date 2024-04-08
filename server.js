const express = require('express');

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
      dbName: dms_test,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log('💾 connected...');
    app.listen(PORT, () =>
      console.log(`🚀Going live @ http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err.message));
