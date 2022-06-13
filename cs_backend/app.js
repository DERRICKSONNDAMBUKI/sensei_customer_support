const express = require("express");
app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

// ROUTES
app.get('/', async (req, res) => {
    try {
        res.send("Hello RU nav sys")
        console.log('getting home');
    } catch (error) {
        console.error(error);
    }
})

const server = app.listen(process.env.PORT || 8000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is listening at http://${host}:${port}`);
});
