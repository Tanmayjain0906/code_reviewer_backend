require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT

app.listen(8000, () => {
    console.log(`Server start running on http://localhost:${PORT}`);
})