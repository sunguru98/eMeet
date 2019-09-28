const express = require("express");
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const app = express();
const port = process.env.PORT || 3000
require('./db')

app.use(express.json());

// All routes
app.use("/api/v1/users", require("./routes/userRoutes"));

app.listen(port, () => console.log('Server connected'))