const express = require("express");
const aiRoute = require("./routes/ai.route");

const app = express();

app.use(express.json());
app.use("/ai", aiRoute);

app.get("/", (req,res) =>{
    return res.send("Hello World");
})

module.exports = app;