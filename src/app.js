const express = require("express");
const app = express();
require('dotenv').config();
const usersRoute = require("./routes/users");

app.use(express.json());

//Define Routes
app.use("/users", usersRoute);


//Running server on port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});