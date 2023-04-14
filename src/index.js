const express = require("express");

const v1Router = require("./v1/routes");

const app = express();
app.use("/api/v1",v1Router);

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server starting at ${port}`);
})

