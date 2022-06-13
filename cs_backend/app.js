const express = require("express");

app = express()
const cors = require('cors');

// middlewares
app.use(express.json())
app.use(cors)

app.get('/',(req,res)=>{
    res.send('<h1>customer support</h1>')
})

const server = app.listen(process.env.PORT||5000, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`server is listening at http://${host}:${port}`);
  });