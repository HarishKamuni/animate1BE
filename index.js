const express = require("express");
const cors = require("cors");
const data = require("./DummyData")
const app = express();

const PORT = process.env.PORT || 8000;
app.use(cors())
app.get("/", (req, res) => {
    res.send(data);
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})