const mongoose = require('mongoose')

mongoose
  .connect(process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected..");
  })
  .catch(err => console.log(err.message))