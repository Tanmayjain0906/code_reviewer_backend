const express = require("express");
const cors = require("cors");

const app = express();

const aiRoute = require("./routes/ai.route");

app.use(cors({
    origin: "https://code-reviewer-frontend-seven.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));

app.use(express.json());
app.use("/ai", aiRoute);

app.get("/", (req,res) =>{
    return res.send("Hello World");
})

module.exports = app;