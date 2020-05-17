const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/beers", (req, res) => {
//   res.send([1, 2, 3]);
// });

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const BeersRouter = require("./Beers/router");
app.use(BeersRouter);

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
